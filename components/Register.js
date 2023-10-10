import {useState} from 'react'
function Register() {
    const [user, setUser]=useState('')
    const [pass, setPass]=useState('')
    const [rpass, setRpass]=useState('')
    return (
        <>
     <h1>Register</h1>
     <form>
        <input type="text" placeholder="uid" name="uid" onChange={(e) => setUser(e.target.value)}/>
        <br/>
        <input type="password" placeholder="password" name="pwd" onChange={(e) => setPass(e.target.value)}/>
        <br/>
        <input type="password" placeholder="reenter password" name="pwd2" onChange={(e) => setRpass(e.target.value)}/>
        <br/>
        <input type='submit'/>
        </form>
     </>
    );
  }
  
  export default Register;