"use client";

import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="fixed left-[50%] right-[50%] mt-4 text-sm font-sans">
			<nav className="flex justify-center">
				<ul className="flex items-center gap-4 p-1 rounded-full bg-secundary backdrop-blur-md">
					<li className={`py-2.5 px-5 rounded-full z-10 ${pathname === '/' && 'bg-white px-7'}`}><a href="#">Home</a></li>
					<li className={`py-2.5 px-5 rounded-full ${pathname === '/profile' && 'bg-white px-7'}`}><a href="#">Profile</a></li>
					<li className={`py-2.5 px-5 rounded-full ${pathname === '/contact' && 'bg-white px-7'}`}><a href="#">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}
