import React, { useState } from 'react';
import InputTextBox from '../components/InputTextBox';
import PasswordTextBox from '../components/PasswordTextBox';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleRegister = () => {
    // check both the passwords and check for email doesnt exist
  };
  return (
    <div>
      <InputTextBox email={email} setEmail={setEmail} />
      <PasswordTextBox
        password={password}
        setPassword={setPassword}
      />
      <PasswordTextBox
        password={confirmPassword}
        setPassword={setConfirmPassword}
      />
    </div>
  );
};

export default Register;
