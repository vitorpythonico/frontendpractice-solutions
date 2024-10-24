import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';

export default function Footer() {
	return (
		<footer className="pb-20 flex flex-col gap-2 text-sm font-sans md:flex-row md:justify-between md:items-center md:pb-6 md:px-8 xl:max-w-[90rem] xl:mx-auto">
			<div className="flex flex-col items-center gap-2 md:flex-row">
				<Image src={Logo} alt="logo" width={32} />
				<p>© Oli Harris 2023</p>
			</div>
			<ul className="flex justify-center gap-4">
				<li><Link href="#" className="hover:text-neutral">Twitter</Link></li>
				<li><Link href="#" className="hover:text-neutral">Linkedin</Link></li>
				<li><Link href="#" className="hover:text-neutral">Mail</Link></li>
			</ul>
		</footer>
	)
}
