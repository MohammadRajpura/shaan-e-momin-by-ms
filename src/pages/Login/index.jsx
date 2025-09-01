import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Index";
import { api } from "../../@core/APIs/api";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CountryContext } from "../../@core/context/CountryContext";

// ✅ Zod schema validation
// - country_code: must be a string (dropdown)
// - mobile_number: must be a number (input field)
const schema = z.object({
  country_code: z.string(),
  mobile_number: z.number({ error: "Phone number is required" }),
});

const Login = () => {
  // Store list of country codes from API
  // const [countryCodes, setCountryCodes] = useState([]);

  const { countryCode, loading } = useContext(CountryContext);

  // ✅ React Hook Form + Zod resolver
  // - register: connect inputs to form state
  // - handleSubmit: wrapper for form submission
  // - errors: holds validation errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // ✅ Form submit handler
  const onSubmit = (data) => {
    console.log(data); // form values

    // Call login API with entered data
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
      {/* Banner Image */}
      <div className="banner-wrap">
        <img src="images/login/banner.svg" alt="Banner" />
      </div>

      {/* Main Authentication Section */}
      <div className="auth-part-wrap">
        {/* Form Section */}
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>Mobile Number</label>

            {/* Input with Country Code Dropdown */}
            <div className="input-with-select">
              {/* Show select only if countryCodes available */}
              {countryCode?.length > 0 && (
                <select {...register("country_code")}>
                  {countryCode.map((item, index) => {
                    return (
                      // Adding key for React list rendering
                      <option key={index} value={item.country_code}>
                        {item.country_code}
                      </option>
                    );
                  })}
                </select>
              )}

              {/* Mobile Number Input */}
              <input
                type="number"
                {...register("mobile_number", { valueAsNumber: true })}
              />
            </div>

            {/* Show validation error if mobile_number invalid */}
            {errors?.mobile_number?.message && (
              <span className="text-red">{errors?.mobile_number?.message}</span>
            )}
          </div>

          {/* Login Button */}
          <Button
            className={"my-button-wrap"}
            type="submit"
            w={"100%"}
            rounded={true}
          >
            Login
          </Button>
        </form>

        {/* Extra Info for New Users */}
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
