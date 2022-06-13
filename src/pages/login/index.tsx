import * as React from 'react';
import { useState } from 'react';
import { ContainerPage } from "./style"
 
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEntrar = () => {
        console.log(email)
        console.log(password)
    }

  return (
      <ContainerPage >
     LOGIN
      </ContainerPage>
  );
};

export default Login;
