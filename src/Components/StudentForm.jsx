import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../ContextData";
import { useNavigate } from "react-router-dom";

function StudentForm() {
  const {
    formData,
    setFormData,
    educationDetails,
    setEducationDetails,
    error,
    setError,

    setFinalData,
  } = useContext(Context);

  const navigate = useNavigate();

  const handleAdd = () => {
    setEducationDetails([
      ...educationDetails,
      {
        //  id : id +1,
        institutioname: "",
        coursename: "",
        yearofcompletion: "",
        percentage: "",
      },
    ]);
  };

  const handleDelete = (index) => {
    const newEductionFields = [...educationDetails];
    newEductionFields.splice(index, 1);
    setEducationDetails(newEductionFields);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    // console.log(name,value ,"Name -VALUE");
    const updatedArray = [...educationDetails];
    updatedArray[index][name] = value;
    setEducationDetails(updatedArray);
  };

  const handleSubmit = () => {
    let newError = {};
    if (!formData.firstname) {
      newError = { ...newError, firstname: "firstname is req" };
    }
    if (!formData.lastname) {
      newError = { ...newError, lastname: "Lastname is req" };
    }
    if (!formData.fathername) {
      newError = { ...newError, fathername: "fathername is req" };
    }
    if (!formData.mothername) {
      newError = { ...newError, mothername: "mothername is req" };
    }
    if (!formData.country) {
      newError = { ...newError, country: "country is req" };
    }
    if (!formData.state) {
      newError = { ...newError, state: "state is req" };
    }
    if (!formData.city) {
      newError = { ...newError, city: "city is req" };
    }
    if (!formData.permanentcountry) {
      newError = { ...newError, permanentcountry: "Permanentcountry is req" };
    }
    if (!formData.permanentstate) {
      newError = { ...newError, permanentstate: "Permanentstate is req" };
    }
    if (!formData.permanentcity) {
      newError = { ...newError, permanentcity: "Permanentcity is req" };
    }


    if (Object.keys(newError).length === 0) {
      alert("Form Submitted");
      navigate("/user");
      setFinalData((finalData) => [
        ...finalData,
        { formData, educationDetails },
      ]);
    } else {
      setError(newError);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Student Form</h1>
        <h3>General Details</h3>
        <TextField
          label="FirstName"
          name="firstname"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
          error={Boolean(error.firstname)}
          helperText={error.firstname}
        />
        <TextField
          label="LastName"
          name="Lastname"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
          error={Boolean(error.lastname)}
          helperText={error.lastname}
        />
        <TextField
          label="FatherName"
          name="fathername"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) =>
            setFormData({ ...formData, fathername: e.target.value })
          }
          error={Boolean(error.fathername)}
          helperText={error.fathername}
        />
        <TextField
          label="MotherName"
          name="mothername"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) =>
            setFormData({ ...formData, mothername: e.target.value })
          }
          error={Boolean(error.mothername)}
          helperText={error.mothername}
        />
        <h3>Current Address</h3>
        <TextField
          label="country"
          name="country"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          error={Boolean(error.country)}
          helperText={error.country}
        />

        <TextField
          label="State"
          name="state"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          error={Boolean(error.state)}
          helperText={error.state}
        />
        <TextField
          label="City"
          name="city"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          error={Boolean(error.city)}
          helperText={error.city}
        />

        <h3>Permanent Address</h3>
        <FormGroup>
          <FormControlLabel
            label="Same As Current"
            control={<Checkbox />}
            onChange={(e) => {
              setFormData({ ...formData, sameascurrent: e.target.checked });
              if (e.target.checked) {
                setFormData({
                  ...formData,
                  permanentcountry: formData.country,
                  permanentstate: formData.state,
                  permanentcity: formData.city,
                });
              }
            }}
          />
        </FormGroup>
        <TextField
          label="Permanent Country"
          name="permanentcountry"
          variant="outlined"
          color="secondary"
          margin="normal"
          value={formData.permanentcountry || ""}
          onChange={(e) =>
            setFormData({ ...formData, permanentcountry: e.target.value })
          }
          error={Boolean(error.permanentcountry)}
          helperText={error.permanentcountry}
        />
        <TextField
          label="Permanent State"
          name="permanentstate"
          variant="outlined"
          color="secondary"
          margin="normal"
          value={formData.permanentstate || ""}
          onChange={(e) =>
            setFormData({ ...formData, permanentstate: e.target.value })
          }
          error={Boolean(error.permanentstate)}
          helperText={error.permanentstate}
        />
        <TextField
          label="Permanent City"
          name="permanentcity"
          variant="outlined"
          color="secondary"
          margin="normal"
          value={formData.permanentcity || ""}
          onChange={(e) =>
            setFormData({ ...formData, permanentcity: e.target.value })
          }
          error={Boolean(error.permanentcity)}
          helperText={error.permanentcity}
        />

        <h3>Educational Details</h3>

        {educationDetails.map((val, index) => {
          return (
            <div
              style={{ display: "flex", flexDirection: "column" }}
              key={index}
            >
              <h3>Educational Details {index + 1}</h3>
              <TextField
                label="Institution Name"
                name="institutioname"
                variant="outlined"
                color="secondary"
                margin="normal"
                onChange={(e) => handleChange(e, index)}
                error={Boolean(error.institutioname)}
                helperText={error.institutioname}
              />
              <TextField
                label="Course Name"
                name="coursename"
                variant="outlined"
                color="secondary"
                margin="normal"
                onChange={(e) => handleChange(e, index)}
                error={Boolean(error.coursename)}
                helperText={error.coursename}
              />
              <TextField
                label="Year of Completion"
                name="yearofcompletion"
                variant="outlined"
                color="secondary"
                margin="normal"
                onChange={(e) => handleChange(e, index)}
                error={Boolean(error.yearofcompletion)}
                helperText={error.yearofcompletion}
              />
              <TextField
                label="Percentage"
                name="percentage"
                variant="outlined"
                color="secondary"
                margin="normal"
                onChange={(e) => handleChange(e, index)}
                error={Boolean(error.percentage)}
                helperText={error.percentage}
              />
              <Button variant="outlined" onClick={() => handleAdd(index)}>
                Add +
              </Button>
              <Button onClick={() => handleDelete(index)} variant="outlined">
                Delete
              </Button>
            </div>
          );
        })}

        <Button
          variant="contained"
          sx={{ width: 240, height: 30, margin: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default StudentForm;
