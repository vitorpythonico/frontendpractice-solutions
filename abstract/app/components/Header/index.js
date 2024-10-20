"use client";

import { Search, X, Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/app/public/images/logo.svg';

export default function Header() {
  const [toggleInput, setToggleInput] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

	return (
	  <header className={`${ toggleMenu ? 'bg-primary' : 'bg-black'} `}>
	    <nav className="relative flex flex-wrap items-center justify-between gap-2 px-4 py-2 xs:py-8 sm:px-[8vw]">
	    { toggleInput && <div className="absolute top-0 left-0 bottom-0 flex items-center gap-2 w-full bg-white">
	        <input className="w-full p-3 ml-4 rounded-md outline-none border-[1px] border-black text-xl text-black  placeholder:text-black placeholder:p-4" placeholder="Search"/>
	        <X color="black" strokeWidth={3} onClick={() => setToggleInput(!toggleInput)} className="mr-4 cursor-pointer duration-300 hover:w-8 h-8"/>
	      </div>
	    }
	      <ul className="flex items-center gap-2">
	        <li className="w-[8rem] h-[2rem]"><a className="hover:opacity-90" href="#"><Image priority src={Logo} alt="logo" /></a></li>
	        <span className="h-10 w-[0.1rem] bg-white rounded-lg"></span>
	        <li className="text-2xl"><a>Help Center</a></li>
	      </ul>
	      <div className="flex items-center gap-3 xs:gap-1">
	        <Search width={30} onClick={() => setToggleInput(!toggleInput)} strokeWidth={3} className="cursor-pointer duration-300 hover:w-9 h-9"/>
	        {
	          toggleMenu
	          ? <X size={32} onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer"/>
	          : <Menu size={32} onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer"/>
	        }
	      </div>
	      <ul className={`${toggleMenu ? 'w-full flex flex-col text-2xl text-center pt-7 pb-28 xs:pb-20' : 'hidden'}`}>
	        <span className="absolute left-0 w-full h-[1px] bg-white"></span>
	        <li className="relative top-10"><a className="py-4 border-b-[1px] border-white hover:opacity-80 xs:px-[8vw]" href="#">Submit a request</a></li>
	        <li className="relative top-[5rem]"><a className="py-4 hover:opacity-80 xs:px-[8vw]" href="#">Sign in</a></li>
	      </ul>
	    </nav>
		</header>
	)
}
