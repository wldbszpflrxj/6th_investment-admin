import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ROUTES } from '@/constants/routes';
import resetCss from '@/styles/reset';
import Home from '@/pages/Home/Home';
import AccountList from '@/pages/AccountList/AccountList';
import Login from '@/pages/Login/Login';

const App = () => (
  <ChakraProvider>
    <Global styles={resetCss} />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.ACOOUNTS} element={<AccountList />} />
    </Routes>
  </ChakraProvider>
);

export default App;
