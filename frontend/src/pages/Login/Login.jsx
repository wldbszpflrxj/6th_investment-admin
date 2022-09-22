import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert, AlertIcon } from '@chakra-ui/react';
import LoginForm from '@/components/LoginForm/LoginForm';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorage';

const Login = () => {
  const [hasToken, setHasToken] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setHasToken(!!localStorage.getItem(LOCAL_STORAGE_KEYS));

    if (hasToken) navigate('/');
  }, [hasToken, navigate]);

  return (
    <Container maxW="md" centerContent>
      {!hasToken && (
        <Alert status="warning">
          <AlertIcon />
          세션이 만료되었습니다. 다시 로그인해주세요.
        </Alert>
      )}
      <LoginForm />
    </Container>
  );
};

export default Login;
