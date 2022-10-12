const SignUp = () => {
  return (
    <form>
      <div class="form-outline mb-4 mt-5">
        <input type="email" id="form1Example1" class="form-control" />
        <label class="form-label" for="form1Example1">
          Username
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form1Example2" class="form-control" />
        <label class="form-label" for="form1Example2">
          Password
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form1Example2" class="form-control" />
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
