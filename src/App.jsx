import { useState} from 'react'
import FormInput from './Components/FormInput'
import './App.css'


const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birhday: "",
    password: "",
    confirmPassword:""   
  });
  
 
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "Username should be 3-16 characters and may include number or underscore",
      label: "username",
      required: true,
      pattern:"^[A-Za-z][A-Za-z0-9_]{3,16}$",

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
       errorMessage:"it should be valid email",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label:"Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
       errorMessage:"password should contain at least 1 number, 1 character,1 special character",
      label: "Password",
      pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      required:true
    },
    {
      id: 5,
      name: " confirmPassword",
      type: "password",
      placeholder: "Confrim Password",
      errorMessage:"password didn't match",
      label: "Confirm Password",
      pattern:values.password,
      required:true
    }

  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    
  }
  console.log(values)

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register </h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button className='btn'>Submit</button>
      </form>

    </div>

  )
}

export default App
