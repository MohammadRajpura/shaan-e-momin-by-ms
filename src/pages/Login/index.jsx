import Button from "../../components/Button/Index";

const Login = () => {
  return (
    <div className="auth-wrapper">
      {/* Banner */}
      <div className="banner-wrap">
        <img src="images/login/banner.svg" alt="Banner" />
      </div>

      {/* Auth Part */}
      <div className="auth-part-wrap">
        {/* Our Form */}
        <form className="form-group">
          <div className="form-control">
            <label>Mobile Number</label>
            <div className="input-with-select">
              <select>
                <option value="+91">+91</option>
                <option value="+92">+92</option>
              </select>
              <input type="text" />
            </div>
          </div>

          <Button
            className={"my-button-wrap"}
            type="submit"
            w={"100%"}
            rounded={true}
          >
            Login
          </Button>
        </form>

        {/* New User */}
        <div className="auth-extra-info">
          <label>New User ?</label>
          <Button color="secondary" rounded={true}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
