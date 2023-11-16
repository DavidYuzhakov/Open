import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import google from "../img/google.svg";

export function SignIn() {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    setNameError(false)
    setPasswordError(false)
    
    if (nameValue.trim().length === 0) {
      setNameError(true)
    }
    if (passwordValue.trim().length < 10) {
      setPasswordError(true)
    }
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    switch (e.target.id) {
      case 'name': 
        setNameValue(e.target.value)
        break
      case 'password': 
        setPasswordValue(e.target.value)
    }
  }

  return (
    <>
      <Header nav={false} />
      <main className="md:pt-[160px] pt-[100px]">
        <div className="container">
          <div className="max-w-[760px] mx-auto pb-10">
            <h1 className="text-[#D9E3EA] text-center md:text-4xl text-3xl font-extrabold md:mb-20 mb-10">
              Welcome back. We exist to make entrepreneurism easier.
            </h1>
            <div className="max-w-[400px] mx-auto text-center">
              <button
                className="relative w-full py-3 rounded bg-[#E53D3E] text-white mb-6 hover:bg-[#bb3838] transition duration-200"
                type="submit"
              >
                Sign in with Google
                <img
                  className="absolute top-3 left-4 pr-4 py-1.5 border-r-[1px] border-[#F56565]"
                  src={google}
                  alt="google"
                />
              </button>
              <p className="flex items-center mb-6 max-[768px]:justify-center">
                <svg
                  className="max-[768px]:hidden"
                  width="90"
                  height="1"
                  viewBox="0 0 90 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H90" stroke="#33363A" strokeDasharray="1 1" />
                </svg>
                <span className="text-base px-2">
                  Or, sing in with your email
                </span>
                <svg
                  className="max-[768px]:hidden"
                  width="90"
                  height="1"
                  viewBox="0 0 90 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H90" stroke="#33363A" strokeDasharray="1 1" />
                </svg>
              </p>
              <form
                className="mb-6"
                action="/"
                onSubmit={(e) => submitHandler(e)}
              >
                <div className="mb-4">
                  <label className="label" htmlFor={'name'}>
                    Full Name <span className="text-[#E53D3E]">{nameError && "*"}</span>
                  </label>
                  <input
                    className="input"
                    type={'name'}
                    id={'name'}
                    value={nameValue}
                    placeholder={'First and last name'}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-4">
                  <label className="label" htmlFor={'password'}>
                    Full Name <span className="text-[#E53D3E]">{passwordError && "*"}</span>
                  </label>
                  <input
                    className="input"
                    type={'password'}
                    id={'password'}
                    value={passwordValue}
                    placeholder={'Password (at least 10 characters)'}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-4 text-left flex justify-between items-center">
                  <div className="mr-3">
                    <input
                      className="form-checkbox"
                      type="checkbox"
                      id="checkbox"
                    />
                    <label className="text-base ml-2" htmlFor="checkbox">
                      Keep me signed in
                    </label>
                  </div>
                  <a className="text-base text-[#5D5DFF] hover:underline" href="#">Forgot Password?</a>
                </div>
                <button
                  className="bg-[#5D5DFF] text-white w-full rounded py-3 hover:bg-[#4242af] transition duration-200"
                  type="submit"
                >
                  Sign in
                </button>
              </form>

              <p className="text-base">
                Don’t you have an account?
                <Link className="text-[#5d5dff] hover:underline" to={"/signup"}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
