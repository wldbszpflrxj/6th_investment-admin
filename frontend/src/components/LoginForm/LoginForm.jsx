import React, { useState } from 'react';
import { Input, Button, Center } from '@chakra-ui/react';
import { emailValidator, passwordLengthValidator } from '@/utils/validator';
import authApiService from '@/api/authApiService';

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleIdChange = event => {
    const { value } = event.target;
    setEmailInput(value);
    setIsValidEmail(emailValidator(value));
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    setPasswordInput(value);
    setIsValidPassword(passwordLengthValidator(value, 8));
  };

  const handleLogin = async event => {
    event.preventDefault();
    const response = await authApiService.login({ email: emailInput, password: passwordInput });

    localStorage.setItem('token', response.accessToken);
  };

  return (
    <Center h="100vh">
      <form>
        {emailInput && !isValidEmail && <p>올바른 아이디를 입력해주세요.</p>}
        <Input
          type="text"
          id="email"
          placeholder="아이디를 입력하세요"
          onChange={handleIdChange}
          size="md"
          mb="1em"
        />
        {passwordInput && !isValidPassword && <p>8글자 이상의 비밀번호를 입력해주세요.</p>}
        <Input
          type="text"
          id="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handlePasswordChange}
          size="md"
          mb="1em"
        />
        <Button type="submit" onClick={handleLogin} colorScheme="teal" width="100%" size="md">
          로그인
        </Button>
      </form>
    </Center>
  );
};

export default LoginForm;
