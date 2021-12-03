import { useState } from 'react';
import './App.css';
 
function App() {
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <h1>React Application</h1>
 
      <h3>Testable component App</h3>
      <input
        type="email"
        placeholder="Enter email"
        data-testid="email-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
 
      {email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
    </div>
  );
}
 
export default App;