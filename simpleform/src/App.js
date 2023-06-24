import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastNameInputChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleEmailInputChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class= "regitser-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success!! You have been finally registered</div> : null}
        <input
          disabled={submitted}
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter a valid first name</span>: null}
        <input
          disabled={submitted}
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a valid last name</span> : null}
        
        <input
          disabled={submitted}
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter a valid email</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
