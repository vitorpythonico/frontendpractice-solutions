"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="fixed left-[50%] right-[50%] z-10 mt-6 text-sm font-sans">
			<nav className="flex justify-center">
				<ul className="flex items-center gap-4 p-1 rounded-full bg-secundary backdrop-blur-md">
					<li className={`py-2.5 px-6 rounded-full ${pathname === '/' && 'bg-white'}`}><Link href="/">Home</Link></li>
					<li className={`py-2.5 px-6 rounded-full ${pathname === '/profile' && 'bg-white'}`}><Link href="/profile">Profile</Link></li>
					<li className={`py-2.5 px-6 rounded-full ${pathname === '/contact' && 'bg-white'}`}><Link href="/contact">Contact</Link></li>
				</ul>
			</nav>
		</header>
	)
}
