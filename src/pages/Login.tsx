import React, { useState } from 'react';
import InputTextBox from '../Components/InputTextBox';
import PasswordTextBox from '../Components/PasswordTextBox';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // call login api
  };

  return (
    <div className="w-80">
      <InputTextBox email={email} setEmail={setEmail} />
      <PasswordTextBox
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
