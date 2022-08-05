import React from 'react';

import { Container, Text, InputContainer, NormalInputContent } from './styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  hasBottomMargin?: boolean;
  backgroundColor?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur?: (value: any) => void;
  onEnterKeyPress?: () => void;
  mask?: string | (string | RegExp)[];
  maskPlaceholder?: string | null | undefined;
  disabled?: boolean;
  isError?: boolean;
}

const CustomInput: React.FC<IInput> = ({
  text,
  placeholder,
  type = 'text',
  hasBottomMargin,
  value,
  onChange,
  onBlur,
  width,
  height,
  onEnterKeyPress,
  backgroundColor,
  mask,
  maskPlaceholder,
  disabled,
  isError,
  ...rest
}) => {
  return (
    <Container>
      <Text>{text}:</Text>
      <InputContainer
        isErrored={!!isError}
        backgroundColor={backgroundColor}
        hasBottomMargin={hasBottomMargin}
        width={width}
        height={height}
        type={type}
      >
        <NormalInputContent
          value={value}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={(event: any) => {
            if (event.key === 'Enter') {
              if (onEnterKeyPress) onEnterKeyPress();
            }
          }}
          {...rest}
        />
        {isError}
      </InputContainer>
    </Container>
  );
};

CustomInput.defaultProps = {
  hasBottomMargin: false,
  type: 'text',
  onEnterKeyPress: () => {},
  text: '',
  placeholder: '',
  backgroundColor: '',
  mask: '',
  maskPlaceholder: null,
  isError: false,
};

export default CustomInput;
