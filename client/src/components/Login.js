import React from "react";



const Login = () => {
    const [username, setUsername] = ("")
    const [password, setPassword] = ("")
    const [erros, setErrors] = ([])


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUsername(user));
            } else {
                r.json().then((errors) => setErrors(Object.values(errors)))
            }
        });
    }
    return ( 

        <form onSubmit={handleSubmit}>
  <div class="form-outline mb-4 mt-5">
    <input type="email" id="form1Example1" class="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <label class="form-label" for="form1Example1">Username</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form1Example2" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <label class="form-label" for="form1Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
     );
}
 
export default Login;