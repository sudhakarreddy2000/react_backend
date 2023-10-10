function Login() {

    return (
        <>
        <h1>Login</h1>
        <form>
           <input type="text" placeholder="uid" name="uid"/>
           <br/>
           <input type="password" placeholder="password" name="pwd"/>
           <br/>
           
           <input type='submit'/>
           </form>
        </>
    );
  }
  
  export default Login;