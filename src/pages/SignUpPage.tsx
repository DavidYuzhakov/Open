import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import google from "../img/google.svg";

export function SignUp() {
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
  }
  
  const signUp = [
    {
      id: "name",
      type: "name",
      placeholder: "First and last name",
      text: "Full Name",
    },
    {
      id: "company",
      type: "text",
      placeholder: "Your company or app name",
      text: "Company Name",
    },
    {
      id: "email",
      type: "email",
      placeholder: "you@yourcompany.com",
      text: "Work Email",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Password (at least 10 characters)",
      minLength: 10,
      text: "Password",
    },
  ];
  
  interface IFormInputs {
    id: string;
    type: string;
    placeholder: string;
    minLength?: number;
    text: string;
  }

  
  return (
    <>
      <Header nav={false} />
      <main className="md:pt-[160px] pt-[100px]">
        <div className="container">
          <div className="max-w-[760px] mx-auto pb-10">
            <h1 className="text-[#D9E3EA] text-center md:text-4xl text-3xl font-extrabold md:mb-20 mb-10">
              Welcome. We exist to make entrepreneurism easier.
            </h1>
            <div className="max-w-[400px] mx-auto text-center">
              <button
                className="relative w-full py-3 rounded bg-[#E53D3E] text-white mb-6 hover:bg-[#bb3838] transition duration-200"
                type="submit"
              >
                Sign up with Google
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
                  Or, register with your email
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
                {signUp.map((item: IFormInputs) => {
                  return (
                    <div key={item.id} className="mb-4">
                      <label className="label" htmlFor={item.id}>
                        {item.text}
                      </label>
                      <input
                        required
                        className="input"
                        type={item.type}
                        id={item.id}
                        placeholder={item.placeholder}
                        minLength={item.minLength}
                      />
                    </div>
                  );
                })}

                <div className="mb-4 text-left">
                    <input
                      required
                      className="form-checkbox"
                      type="checkbox"
                      id="checkbox"
                    />
                    <label
                      className="text-base ml-2 text-[#707D86]"
                      htmlFor="checkbox"
                    >
                      I agree to be contacted by Open PRO about this offer as per
                      the Open PRO{" "}
                      <a href="#" className="text-[#9BA9B4] underline">
                        Privacy Policy.
                      </a>
                    </label>
                  
                </div>
                <button
                  className="bg-[#5D5DFF] text-white w-full rounded py-3 hover:bg-[#4242af] transition duration-200"
                  type="submit"
                >
                  Sign up
                </button>
              </form>

              <p className="text-base">
                Already using Open PRO?{" "}
                <Link className="text-[#5d5dff] hover:underline" to={"/signin"}>
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

