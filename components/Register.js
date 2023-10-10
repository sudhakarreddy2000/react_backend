function Register() {

    return (
        <>
     <h1>Register</h1>
     <form>
        <input type="text" placeholder="uid" name="uid"/>
        <br/>
        <input type="password" placeholder="password" name="pwd"/>
        <br/>
        <input type="password" placeholder="reenter password" name="pwd2"/>
        <br/>
        <input type='submit'/>
        </form>
     </>
    );
  }
  
  export default Register;