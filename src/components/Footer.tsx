import bg from "../img/footer/bg.svg";
import logo from "../img/logo.svg";

export function Footer() {
  return (
    <footer className="md:mb-16 mb-10">
      <div className="container">
        <div className="relative md:flex justify-between items-center block bg-[#5D5DFF] w-full text-white md:py-16 py-10 md:px-12 px-6 md:mb-16 mb-10">
          <img
            className="absolute top-0 right-0 pointer-events-none"
            src={bg}
            alt="background"
          />
          <div className="md:mr-5 max-[768px]:mb-5">
            <h2 className="font-bold md:text-3xl text-2xl text-white mb-2">
              Stay in the loop
            </h2>
            <p>Join our newsletter to get top news before anyone else.</p>
          </div>
          <form className="flex max-[485px]:flex-wrap" action="/">
            <input
              className="min-[480px]:mr-2 rounded max-[485px]:mb-2 border-[#ABABFF] border-[1px] bg-[#4B4ACF] placeholder:text-[#ABABFF] py-3 px-4 text-base outline-none"
              type="email"
              required
              maxLength={20}
              placeholder="Your best email…"
            />
            <button
              className="text-[#5D5DFF]  bg-white font-medium text-base rounded py-2.5 px-8"
              type="submit"
            >
              Sbuscribe
            </button>
          </form>
        </div>
        <div className="md:flex justify-between items-start md:mb-12 mb-7">
          <div className='lg:max-w-[360px] md:max-w-[250px] w-full max-[768px]:mb-4'>
            <img src={logo} alt="logo" className='mb-4' />
            <p className='text-base'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
          <div className="sm:grid grid-cols-3 lg:gap-8 gap-4">
            <div className="text-sm max-[640px] mb-5">
              <h5 className="text-white mb-1">Products</h5>
              <ul>
                <li className="mb-1">Web Studio</li>
                <li className="mb-1">DynamicBox Flex</li>
                <li>Programming Forms</li>
              </ul>
            </div>
            <div className="text-sm max-[640px] mb-5">
              <h5 className="text-white mb-1">Resources</h5>
              <ul>
                <li className="mb-1">Nostrud exercitation</li>
                <li className="mb-1">Visual mockups</li>
                <li className="mb-1">Nostrud exercitation</li>
                <li className="mb-1">Visual mockups</li>
                <li>Nostrud exercitation</li>
              </ul>
            </div>
            <div className="text-sm">
              <h5 className="text-white mb-1">Company</h5>
              <ul>
                <li className="mb-1">Consectetur adipiscing</li>
                <li className="mb-1">Labore et dolore</li>
                <li className="mb-1">Consectetur adipiscing</li>
                <li className="mb-1">Labore et dolore</li>
                <li>Consectetur adipiscing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-between items-center">
          <p className="text-sm max-[640px] mb-4">
            Made by <span className="text-[#D9E3EA]">Cruip</span>. All right
            reserved
          </p>
          <div className="flex items-center">
            <svg
              className="social"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#25282C" />
              <path
                d="M24 11.5C23.4 11.8 22.8 11.9 22.1 12C22.8 11.6 23.3 11 23.5 10.2C22.9 10.6 22.2 10.8 21.4 11C20.8 10.4 19.9 10 19 10C17.3 10 15.8 11.5 15.8 13.3C15.8 13.6 15.8 13.8 15.9 14C13.2 13.9 10.7 12.6 9.1 10.6C8.8 11.1 8.7 11.6 8.7 12.3C8.7 13.4 9.3 14.4 10.2 15C9.7 15 9.2 14.8 8.7 14.6C8.7 16.2 9.8 17.5 11.3 17.8C11 17.9 10.7 17.9 10.4 17.9C10.2 17.9 10 17.9 9.8 17.8C10.2 19.1 11.4 20.1 12.9 20.1C11.8 21 10.4 21.5 8.8 21.5C8.5 21.5 8.3 21.5 8 21.5C9.5 22.4 11.2 23 13 23C19 23 22.3 18 22.3 13.7C22.3 13.6 22.3 13.4 22.3 13.3C23 12.8 23.6 12.2 24 11.5Z"
                fill="#5D5DFF"
              />
            </svg>
            <svg
              className="social"
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" width="32" height="32" rx="16" fill="#25282C" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 8.19995C15.6 8.19995 12 11.8 12 16.2C12 19.7 14.3 22.7 17.5 23.8C17.9 23.9 18 23.6 18 23.4C18 23.2 18 22.7 18 22C15.8 22.5 15.3 21 15.3 21C14.9 20.1 14.4 19.8 14.4 19.8C13.7 19.3 14.5 19.3 14.5 19.3C15.3 19.4 15.7 20.1 15.7 20.1C16.4 21.4 17.6 21 18 20.8C18.1 20.3 18.3 19.9 18.5 19.7C16.7 19.5 14.9 18.8 14.9 15.7C14.9 14.8 15.2 14.1 15.7 13.6C15.6 13.4 15.3 12.6 15.8 11.5C15.8 11.5 16.5 11.3 18 12.3C18.6 12.1 19.3 12 20 12C20.7 12 21.4 12.1 22 12.3C23.5 11.3 24.2 11.5 24.2 11.5C24.6 12.6 24.4 13.4 24.3 13.6C24.8 14.2 25.1 14.9 25.1 15.7C25.1 18.8 23.2 19.4 21.4 19.6C21.7 20 22 20.5 22 21.2C22 22.3 22 23.1 22 23.4C22 23.6 22.1 23.9 22.6 23.8C25.8 22.7 28.1 19.7 28.1 16.2C28 11.8 24.4 8.19995 20 8.19995Z"
                fill="#5D5DFF"
              />
            </svg>
            <svg
              className="social"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#25282C" />
              <path
                d="M14.0229 24L14 17H11V14H14V12C14 9.3008 15.6715 8 18.0794 8C19.2328 8 20.2241 8.08587 20.5129 8.12425V10.9451L18.843 10.9458C17.5334 10.9458 17.2799 11.5681 17.2799 12.4812V14H21L20 17H17.2799V24H14.0229Z"
                fill="#5D5DFF"
              />
            </svg>
            <svg
              className="social"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#25282C" />
              <circle cx="20.1451" cy="11.8919" r="0.96" fill="#5D5DFF" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 16C12 18.206 13.794 20 16 20C18.206 20 20 18.206 20 16C20 13.794 18.206 12 16 12C13.794 12 12 13.794 12 16ZM14 16C14 14.897 14.897 14 16 14C17.103 14 18 14.897 18 16C18 17.103 17.103 18 16 18C14.897 18 14 17.103 14 16Z"
                fill="#5D5DFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24H20C22.056 24 24 22.056 24 20V12C24 9.944 22.056 8 20 8H12C9.944 8 8 9.944 8 12V20C8 22.056 9.944 24 12 24ZM10 12C10 11.065 11.065 10 12 10H20C20.935 10 22 11.065 22 12V20C22 20.935 20.935 22 20 22H12C11.047 22 10 20.953 10 20V12Z"
                fill="#5D5DFF"
              />
            </svg>
            <svg
              className="social"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#25282C" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.7 8H23.3C23.7 8 24 8.3 24.1 8.7V23.3C24.1 23.7 23.8 24 23.4 24H8.7C8.3 24 8 23.7 8 23.4V8.7C8 8.3 8.3 8 8.7 8ZM10.4 21.6H12.7H12.8V14H10.4V21.6ZM11.6 13C10.8 13 10.2 12.3 10.2 11.6C10.2 10.8 10.8 10.2 11.6 10.2C12.4 10.2 13 10.8 13 11.6C12.9 12.3 12.3 13 11.6 13ZM19.2 21.6H21.5V17.4C21.5 15.4 21.1 13.8 18.7 13.8C17.6 13.8 16.8 14.4 16.5 15V14H14.2V21.7H16.6V17.9C16.6 16.9 16.8 15.9 18 15.9C19.2 15.9 19.2 17 19.2 17.9V21.6Z"
                fill="#5D5DFF"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
