// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

// const SignUp = () => {
//   const [householdName, setHouseholdName] = useState("");
//   const [householdEmail, setHouseholdEmail] = useState("");
//   const [householdPassword, setHouseholdPassword] = useState("");
//   const [householdPhone, setHouseholdPhone] = useState("");

//   const [businessName, setBusinessName] = useState("");
//   const [businessEmail, setBusinessEmail] = useState("");
//   const [businessPassword, setBusinessPassword] = useState("");
//   const [businessPhone, setBusinessPhone] = useState("");

//   const [signUpMessage, setSignUpMessage] = useState("");
//   const [countdown, setCountdown] = useState(10);

//   const navigate = useNavigate();

//   const handleHouseholdSignUp = async (e) => {
//     e.preventDefault();

//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (
//       householdPassword !== "" &&
//       householdEmail !== "" &&
//       !passwordRegex.test(householdPassword)
//     ) {
//       setSignUpMessage(
//         "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
//       );
//       return;
//     }

//     const userData = {
//       name: householdName,
//       email: householdEmail,
//       password: householdPassword,
//       phone: householdPhone,
//       userType: "household",
//     };

//     try {
//       await axios.post("http://localhost:3000/signup", userData);

//       setSignUpMessage("User Account Created Successfully");

//       const timer = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000);

//       setTimeout(() => {
//         clearInterval(timer);
//         navigate("/login");
//       }, 10000);
//     } catch (error) {
//       if (error.response && error.response.data.error) {
//         setSignUpMessage(error.response.data.error);
//       } else {
//         setSignUpMessage("Something went wrong");
//       }
//       console.log(error);
//     }
//   };

//   const handleBusinessSignUp = async (e) => {
//     e.preventDefault();

//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (
//       businessPassword !== "" &&
//       businessEmail !== "" &&
//       !passwordRegex.test(businessPassword)
//     ) {
//       setSignUpMessage(
//         "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
//       );
//       return;
//     }

//     const businessData = {
//       name: businessName,
//       email: businessEmail,
//       password: businessPassword,
//       phone: businessPhone,
//       userType: "business",
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/signup",
//         businessData
//       );

//       const data = response.data;
//       console.log(data);

//       setSignUpMessage("User Account Created Successfully");

//       const timer = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000);

//       setTimeout(() => {
//         clearInterval(timer);
//         navigate("/login");
//       }, 10000);
//     } catch (error) {
//       if (error.response && error.response.data.error) {
//         setSignUpMessage(error.response.data.error);
//       } else {
//         setSignUpMessage("Something went wrong");
//       }
//       console.log(error);
//     }
//   };

//   return (
//     <div className="signup-body">
//       <div className="wrapper">
//         <div className="description">
//           <h1 id="msg">
//             Make a difference with <span className="site-name">fOOD fOLIO</span>
//           </h1>
//           <p>
//             Sign up below to join our community and unlock a world of
//             possibilities.
//             <br />
//             Fill out the form and let's get started on this journey together.
//           </p>
//         </div>
//       </div>

//       {signUpMessage && (
//         <p
//           className={`message ${
//             signUpMessage === "User Account Created Successfully"
//               ? "success"
//               : "error"
//           }`}
//         >
//           {signUpMessage}
//         </p>
//       )}

//       {signUpMessage === "User Account Created Successfully" &&
//         countdown > 0 && (
//           <p className="countdown-timer">
//             Redirecting in <span className="timer">{countdown}</span> seconds to
//             LOG IN...
//           </p>
//         )}

//       <div className="form-wrapper">
//         <div className="container-1">
//           <h1>As a Household</h1>

//           <form method="POST">
//             <div className="form-group">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={householdName}
//                 onChange={(e) => setHouseholdName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="Email ID"
//                 value={householdEmail}
//                 onChange={(e) => setHouseholdEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 placeholder="Create Password"
//                 value={householdPassword}
//                 onChange={(e) => setHouseholdPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={householdPhone}
//                 onChange={(e) => setHouseholdPhone(e.target.value)}
//                 required
//               />
//             </div>
//           </form>

//           <div className="bullet-points">
//             <ul>
//               <li>Full Access to our Algorithms</li>
//               <li>Unlimited Donations</li>
//               <li>Easily Track Food Waste</li>
//               <li>Reduce Costs with Analysis</li>
//               <li>Minimize Carbon Emissions</li>
//               <li>Help the Unprivileged</li>
//             </ul>
//           </div>

//           <ScrollLink to="msg" smooth duration={500}>
//             <button
//               type="button"
//               className="sign-upbtn"
//               onClick={handleHouseholdSignUp}
//             >
//               SIGN UP
//             </button>
//           </ScrollLink>
//         </div>

//         <div className="container2">
//           <h1>As a Business</h1>

//           <form method="POST">
//             <div className="form-group2">
//               <input
//                 type="text"
//                 placeholder="Name of the Business"
//                 value={businessName}
//                 onChange={(e) => setBusinessName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group2">
//               <input
//                 type="email"
//                 placeholder="Business Email ID"
//                 value={businessEmail}
//                 onChange={(e) => setBusinessEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group2">
//               <input
//                 type="password"
//                 placeholder="Create Password"
//                 value={businessPassword}
//                 onChange={(e) => setBusinessPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group2">
//               <input
//                 type="tel"
//                 placeholder="Contact Number"
//                 value={businessPhone}
//                 onChange={(e) => setBusinessPhone(e.target.value)}
//                 required
//               />
//             </div>
//           </form>

//           <div className="bullet-points2">
//             <ul>
//               <li>Full Access to our Algorithms</li>
//               <li>Unlimited Donations</li>
//               <li>Cost Reductions & Higher Profit Margins</li>
//               <li>Better Tax Implications</li>
//               <li>Gain Competitive Advantage</li>
//               <li>Minimize Carbon Emissions</li>
//               <li>Help the Unprivileged</li>
//             </ul>
//           </div>

//           <ScrollLink to="msg" smooth duration={500}>
//             <button
//               type="button"
//               className="sign-upbtn"
//               onClick={handleBusinessSignUp}
//             >
//               SIGN UP
//             </button>
//           </ScrollLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("household");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setMessage(
        "Password must contain uppercase, lowercase, number and special character."
      );
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/signup", {
        ...formData,
        userType,
      });

      setMessage("success");

      let timer = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        navigate("/login");
      }, 5000);
    } catch (err) {
      setMessage(
        err.response?.data?.error || "Something went wrong."
      );
    }

    setLoading(false);
  };
  return (
  <div className="signup-page">
    <div className="signup-card">

      <div className="signup-header">
        <h1>🍃 FoodFolio</h1>
        <p>Join our community and help reduce food waste.</p>
      </div>

      <div className="user-toggle">
        <button
          className={userType === "household" ? "active" : ""}
          onClick={() => setUserType("household")}
          type="button"
        >
          Household
        </button>

        <button
          className={userType === "business" ? "active" : ""}
          onClick={() => setUserType("business")}
          type="button"
        >
          Business
        </button>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">

        <input
          type="text"
          name="name"
          placeholder={
            userType === "household"
              ? "Full Name"
              : "Business Name"
          }
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder={
            userType === "household"
              ? "Email Address"
              : "Business Email"
          }
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {message && message !== "success" && (
          <div className="error-message">
            {message}
          </div>
        )}

        {message === "success" && (
          <div className="success-message">
            🎉 Account created successfully!

            <br />

            Redirecting in {countdown} seconds...
          </div>
        )}

        <button
          className="signup-btn"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="login-link">
        Already have an account?

        <Link to="/login">
          Login
        </Link>
      </div>

    </div>
  </div>
);
}