import React from 'react';

import { Container, Text, InputContainer, MaskedInputContent } from './styles';

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

const CustomMaskedInput: React.FC<IInput> = ({
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
  name,
  isError,
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
      >
        <MaskedInputContent
          disabled={disabled}
          alwaysShowMask
          mask={mask!}
          maskPlaceholder={maskPlaceholder}
          value={value}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
        />
        {isError}

      </InputContainer>
    </Container>
  );
};

CustomMaskedInput.defaultProps = {
  hasBottomMargin: false,
  type: 'text',
  onEnterKeyPress: () => {},
  text: '',
  placeholder: '',
  backgroundColor: '',
  mask: '',
  maskPlaceholder: null,
};

export default CustomMaskedInput;
