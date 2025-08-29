import { useEffect, useState } from "react";
import Button from "../../components/Button/Index";
import { api } from "../../@core/APIs/api";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  country_code: z.string(),
  mobile_number: z.number({ error: "Phone number is required" }),
});

const Login = () => {
  const [countryCodes, setCountryCodes] = useState([]);

  // Connection to Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // ** Call Country code API
  useEffect(() => {
    api
      .get("country-code-list")
      .then((res) => {
        console.log(res.data);

        if (res.data.status == "success") {
          setCountryCodes(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (data) => {
    console.log(data);

    // Loader -
    api
      .post("login-with-otp", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-wrapper">
      {/* Banner */}
      <div className="banner-wrap">
        <img src="images/login/banner.svg" alt="Banner" />
      </div>

      {/* Auth Part */}
      <div className="auth-part-wrap">
        {/* Our Form */}
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>Mobile Number</label>
            <div className="input-with-select">
              {countryCodes?.length > 0 && (
                <select {...register("country_code")}>
                  {countryCodes.map((item, index) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <option key={index} value={item.country_code}>
                        {item.country_code}
                      </option>
                    );
                  })}
                </select>
              )}

              <input
                type="number"
                {...register("mobile_number", { valueAsNumber: true })}
              />
            </div>

            {errors?.mobile_number?.message && (
              <span className="text-red">{errors?.mobile_number?.message}</span>
            )}
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
