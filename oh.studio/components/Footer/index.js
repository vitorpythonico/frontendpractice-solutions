import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

export default function Footer() {
	return (
		<footer className="pb-20 flex flex-col gap-2 text-sm font-sans">
			<div className="flex flex-col items-center gap-2">
				<Image src={Logo} alt="logo" width={32} />
				<p>© Oli Harris 2023</p>
			</div>
			<ul className="flex justify-center gap-4">
				<li><Link href="#">Twitter</Link></li>
				<li><Link href="#">Linkedin</Link></li>
				<li><Link href="#">Mail</Link></li>
			</ul>
		</footer>
	)
}
