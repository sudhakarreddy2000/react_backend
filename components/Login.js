import {useState} from 'react'
function Login() {
const [user, setUser]=useState('')
const [pass, setPass]=useState('')
    return (
        <>
        <h1>Login</h1>
        <form>
           <input type="text" placeholder="uid" name="uid" onChange={(e) => setUser(e.target.value)}/>
           <br/>
           <input type="password" placeholder="password" name="pwd" onChange={(e) => setPass(e.target.value)}/>
           <br/>
           <input type='submit'/>
           </form>
        </>
    );
  }
  export default Login;