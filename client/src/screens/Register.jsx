import { useState } from "react";
import { registerUser } from "../services";
import { useNavigate } from "react-router-dom";


const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // define an async function to register the user
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // make the userInfo object
            const userInfo = {
                username,
                email,
                password,
            };
            // call registerUser with userInfo as the argument and save the user into a variable
            const user = await registerUser(userInfo);
            // console log the user!
            // console.log(user);
            props.setUser(user)
            navigate('/');
        } catch(error) {
            console.error(error.message)
        }
    }

  return (
    <section>
      <h3>Register for an account!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit">Sign up</button>
      </form>
    </section>
  );
};

export default Register;
