import React, { createContext, useState } from "react";
import App from "./App";

export const Context = createContext();

function ContextData() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    mothername: "",
    country: "",
    state: "",
    city: "",
    sameascurrent: false,
    permanentcountry: "",
    permanentstate: "",
    permanentcity: "",
  });
  const [educationDetails, setEducationDetails] = useState([
    {
      institutioname: "",
      coursename: "",
      yearofcompletion: "",
      percentage: "",
    },
  ]);

  const [error, setError] = useState({});
  const [finalData, setFinalData] = useState([]);

  return (
    <Context.Provider
      value={{
        formData,
        setFormData,
        educationDetails,
        setEducationDetails,
        error,
        setError,
        finalData,
        setFinalData,
      }}
    >
      <App />
    </Context.Provider>
  );
}

export default ContextData;
