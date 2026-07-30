import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    setError("");

    if (isLoginForm) {
      if (emailId === "admin@gmail.com" && password === "12345") {
        navigate("/");
      } 
      else {
        setError("Invalid Email or Password");
      }
    } 
    else {
      if (!firstName || !lastName || !emailId || !password) {
        setError("Please fill all fields");
        return;
      }

      alert("Signup Successful!");
      setIsLoginForm(true);
      setFirstName("");
      setLastName("");
      setEmailId("");
      setPassword("");
      setError("");
    }
  };

  return (
    <div className="flex justify-center mt-20">
    <div className="w-80">
      <h2 className="text-2xl font-bold text-center mb-5">
        {isLoginForm ? "Login" : "Sign Up"}
      </h2>

      {!isLoginForm && (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border p-2 mb-3"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border p-2 mb-3"
          />
        </>
      )}

      <input
        type="email"
        placeholder="Email"
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
        className="w-full border p-2 mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 mb-3"
      />

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2"
      >
        {isLoginForm ? "Login" : "Sign Up"}
      </button>

      <p
        className="text-center mt-4 cursor-pointer text-blue-500"
        onClick={() => {
          setIsLoginForm(!isLoginForm);
          setError("");
          setFirstName("");
          setLastName("");
          setEmailId("");
          setPassword("");
        }}
      >
        {isLoginForm
          ? "New User? Sign Up Here"
          : "Already have an account? Login Here"}
      </p>
    </div>
  </div>
);
}
export default Login;