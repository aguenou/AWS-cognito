import React, { useState } from 'react';
import AWS from 'aws-sdk';

function ConfirmSignUp() {
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({ region: 'us-east-1' });
    const params = {
      ClientId: '38nt5jnle029odcn43vngi3gvq',
      ConfirmationCode: confirmationCode,
      Username: email,
    };
    try {
      await cognitoIdentityServiceProvider.confirmSignUp(params).promise();
      alert("User confirmed")
    } catch (err) {
      setError(err.message);
    }
  }

  return (
     <form onSubmit={handleSubmit}>
       <label>
         Email:
         <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
       </label>
       <br />
       <label>
         Confirmation code:
         <input type="text" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)} />
       </label>
       <br />
       {error && <p>Error: {error}</p>}
       <input type="submit" value="Confirm" />
     </form>
  );
}

export default ConfirmSignUp;