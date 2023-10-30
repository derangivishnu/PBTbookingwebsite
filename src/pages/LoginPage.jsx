import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginPage = () => {
  return (
    <div>
        <h1>Login here</h1>

<form style={{border:"2px solid blue",borderRadius:"20px",background:"lightblue"}} class='w-50  mx-50 container  align-items-center justify-content-center'>
<div class="mb-3">
<br/>
<label for="exampleInputEmail1" class="form-label" >  <h5>Email address</h5></label>
<input type="email" class="form-control w-75 container justify-content-center"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label"> <h5>Password</h5></label>
<input type="password" class="form-control w-75 container justify-content-center" id="exampleInputPassword1"/>
</div>


<button type="submit" class="btn btn-primary">Submit</button>
<br />
<br/>
</form>
      
    </div>
  )
}

export default LoginPage
