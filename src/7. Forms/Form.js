import { useState } from "react";

const DEFAULT_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
};

const DEFAULT_FORM_ERROR_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const DEFAULT_FORM_TOUCHED_VALUES = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
};

function Form() {
  // SOURCE OF TRUTH :-
  // It means that all the form fields values are currently derived from respective input boxes of the form, which it should not.
  // We should tell the input box that your value is this. And for that we need SOURCE OF TRUTH.
  // What is better than useState as a SOURCE OF TRUTH.

  // SOURCE OF TRUTH FOR FORM VALUES.
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES);

  // SOURCE OF TRUTH FOR ERRORS.
  const [error, setError] = useState(DEFAULT_FORM_ERROR_VALUES);

  // SOURCE OF TRUTH FOR TOUCHED.
  const [touched, setTouched] = useState(DEFAULT_FORM_TOUCHED_VALUES);

  console.log("data and errors in form:", formData, error);

  function handleFormSubmission(event) {
    console.log("Handle form submission!!");
    event.preventDefault();

    // validateWholeForm(); // We can validate the whole form here. Here we should check "Required" fields are there and no error in error state.

    // We can do something like this before submitting the form.
    for (let key in error) {
      if (error[key]) {
        return;
      }
    }

    // After validating the whole form we can submit it to backend.
    async function submitForm() {
      const response = await fetch("google.com", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response data after submitting the form:", data);
    }

    submitForm();
  }

  function onChangeHandler(event, key) {
    // console.log(event.target);
    // console.log(event.type);
    const value = event.target.value;
    // console.log(key, value);
    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        [key]: value,
      };
    });

    validate(value, key); // we can validate form fields here also.
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validate(value, key) {
    const val = String(value);

    const localError = {};

    // First name and Last name.
    if (key === "firstName" || key === "lastName") {
      const nameRegex = /^[A-Za-z ]+$/;
      const regexVal = val.match(nameRegex); // It can be either null or [].

      if (!val) {
        localError[key] = "REQUIRED FIELD";
      } else if (val && !regexVal) {
        localError[key] = `${key} should not have special character!!`;
      } else if (val && regexVal) {
        localError[key] = "";
      }
    }

    // Email.
    if (key === "email") {
      if (!val && touched.email) {
        localError[key] = "REQUIRED FIELD";
      } else if (val && !validateEmail(val) && touched.email) {
        localError[key] = "Please enter valid email!!";
      } else if (val && validateEmail(val)) {
        localError[key] = "";
      }
    }

    // Phone.
    if (key === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      const regexVal = val.match(phoneRegex); // It can be either null or [].
      if (!val && touched.phone) {
        localError[key] = "REQUIRED FIELD";
      } else if (val && !regexVal && touched.phone) {
        localError[key] = "Please enter valid phone number!!";
      } else if (val && regexVal) {
        localError[key] = "";
      }
    }

    setError((oldLocalError) => {
      return {
        ...oldLocalError,
        ...localError,
      };
    });
  }

  return (
    <>
      <h3>Forms in React!!</h3>

      {/* <form method="" action=""> */}

      <form onSubmit={handleFormSubmission}>
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "firstName");
          }}
          id="firstName"
          type={"text"}
          placeholder="firstName"
          value={formData.firstName}
          onBlur={() => {
            setTouched((oldTouched) => {
              return {
                ...oldTouched,
                firstName: true,
              };
            });
          }}
        />

        <div style={{ color: "red" }}>{error.firstName}</div>

        <br />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "lastName");
          }}
          id="lastName"
          type={"text"}
          placeholder="lastName"
          value={formData.lastName}
          onBlur={() => {
            setTouched((oldTouched) => {
              return {
                ...oldTouched,
                lastName: true,
              };
            });
          }}
        />

        <div style={{ color: "red" }}>{error.lastName}</div>

        <br />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "email");
          }}
          id="email"
          type={"email"}
          placeholder="email"
          value={formData.email}
          onBlur={() => {
            setTouched((oldTouched) => {
              return {
                ...oldTouched,
                email: true,
              };
            });
          }}
        />

        <div style={{ color: "red" }}>{error.email}</div>

        <br />
        <br />
        <br />

        <label htmlFor="phone">Contacts:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "phone");
          }}
          id="phone"
          type={"tel"}
          placeholder="phone"
          value={formData.phone}
          onBlur={() => {
            setTouched((oldTouched) => {
              return {
                ...oldTouched,
                phone: true,
              };
            });
          }}
        />

        <div style={{ color: "red" }}>{error.phone}</div>

        <br />
        <br />
        <br />

        <label htmlFor="gender">Select Gender:</label>
        <select
          onChange={(event) => {
            onChangeHandler(event, "gender");
          }}
          id="gender"
          value={formData.gender}
        >
          <option value={0}>Choose From Below</option>
          <option value={1}>Don't want to disclose!!</option>
          <option value={2}>Male</option>
          <option value={3}>Female</option>
        </select>

        <br />
        <br />
        <br />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "dob");
          }}
          id="dob"
          type={"date"}
          placeholder="dob"
          value={formData.dob}
        />

        <br />
        <br />
        <br />

        {/* Two ways to submit the form */}

        {/* 1. */}
        {/* <button>
          Submit
        </button> */}

        {/* 2. */}
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default Form;

// Things in Form we need to care of.
// 1. State management.
// 2. How to create form elements.
// 3. Validation and error display.

// If we try to submit the form without entering any data then "PAGE RELOAD" takes place.
// In order to prevent the "PAGE RELOAD" we can use "event.preventDefault()" method present inside event object.

// ERROR HANDLING.
// 1. We can either handle the error while submitting the form.
// 2. Or we can do error handling as soon as user enter's the data in any field, for every field.
