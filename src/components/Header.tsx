import {Link} from 'react-router-dom'
import logo from '../img/logo.svg';
import bg from '../img/header/bg.png';

interface HeaderProps {
  nav: boolean
}

export function Header (props: HeaderProps) {
  return (
    <header className='absolute w-full'>
      <div className="container h-[80px] flex justify-between items-center">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        {props.nav && <nav>
          <Link to={'/signin'} className='font-medium text-[#5D5DFF] text-base sm:mr-[50px] mr-7 hover:text-white transition duration-200'>Sign in</Link>
          <Link 
            to={'/signup'} 
            className='px-5 py-2 rounded text-white bg-[#5D5DFF] hover:bg-[#5D5DFF]/80 transition duration-200'
          >Sign up</Link>
        </nav>}
      </div>
      <img className='absolute right-0 top-0 -z-10' src={bg} alt="background" />
    </header>
  )
}