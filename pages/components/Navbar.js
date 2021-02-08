import "tailwindcss/tailwind.css";
import Popper from "popper.js";
import Link from 'next/link';
import LangSelector from "./LangSelector"

const Navbar = () => {
    return (
      <>
        <nav className='flex items-center flex-wrap p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4'>
            <span className='text-xl text-white font-bold tracking-wide dark:text-white font-mono animate-heartbeat'>
              yude.jp
            </span>
          </a>
        </Link>
            <div className="origin-top-right absolute right-0">
                <LangSelector />
            </div>
      </nav>
      </>
        );
    };
export default Navbar