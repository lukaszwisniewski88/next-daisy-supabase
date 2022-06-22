import React, {PropsWithChildren} from 'react';
import LoginComponent from '@components/auth/login'

function Login(props: PropsWithChildren<{ user: string }>): JSX.Element {
  console.log(props)
  return (
    <LoginComponent/>
  );
}

export default Login;