import React, {useState} from 'react'

const SignUp = ({setUser}) => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-outline mb-4 mt-5">
        <input type="text" id="form1Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label class="form-label" for="form1Example1">
          Username
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form1Example2" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label class="form-label" for="form1Example2">
          Password
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form1Example2" class="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        <label class="form-label" for="form1Example2">
          Password Confirmation
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
