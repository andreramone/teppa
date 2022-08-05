import React, { useState, useEffect } from 'react';
import {IconBaseProps} from 'react-icons'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import {
  Container,
  Text,
  InputContainer,
  InputContent,
  IconButton,
} from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  placeholder?: string;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>
  value: string;
  hasBottomMargin?: boolean;
  onChangeValue: (value: string) => void;
  onEnterKeyPress?: () => void;
}

const Input: React.FC<IInput> = ({
  text,
  placeholder,
  type,
  hasBottomMargin,
  value,
  onChangeValue,
  onEnterKeyPress,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [trueType, setTrueType] = useState<string>('text');

  useEffect(() => {
    if (type === 'password') {
      if (showPassword) {
        return setTrueType('text');
      }
      return setTrueType('password');
    }
    return setTrueType('text');
  }, [showPassword, type]);

  return (
    <Container>
      <Text>{text}</Text>
      <InputContainer hasBottomMargin={hasBottomMargin}>
        <InputContent
          value={value}
          placeholder={placeholder}
          type={trueType}
          onChange={(e) => onChangeValue(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              if (onEnterKeyPress) onEnterKeyPress();
            }
          }}
          {...rest}
        />
        {type === 'password' && (
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaEyeSlash
                color="#ABABAB"
                size={24}
                style={{ marginLeft: '8px' }}
              />
            ) : (
              <FaEye color="#ABABAB" size={24} style={{ marginLeft: '8px' }} />
            )}
          </IconButton>
        )}
      </InputContainer>
    </Container>
  );
};

Input.defaultProps = {
  hasBottomMargin: false,
  type: 'text',
  onEnterKeyPress: () => {},
};

export default Input;