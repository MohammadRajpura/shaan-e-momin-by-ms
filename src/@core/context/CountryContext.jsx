import { createContext, useEffect, useState } from "react";
import { api } from "../APIs/api";

// ** Creating context
export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryCode, setCountryCodes] = useState();
  const [loading, setLoading] = useState(true);

  // ✅ Fetch country codes on first render
  useEffect(() => {
    api
      .get("country-code-list")
      .then((res) => {
        console.log(res.data);

        if (res.data.status == "success") {
          // store API response in state
          setCountryCodes(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CountryContext.Provider value={{ countryCode, loading }}>
      {children}
    </CountryContext.Provider>
  );
};
