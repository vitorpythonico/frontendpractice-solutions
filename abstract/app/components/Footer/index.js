import Image from 'next/image';
import LogoFooter from '@/app/public/images/logo-footer.svg';

export default function Footer() {
	return (
		<footer className="bg-black md:px-[5vw]">
			<nav className="px-4 py-16 sm:flex md:block lg:flex lg:justify-between">
				<div className="w-full flex flex-wrap lg:flex-nowrap lg:justify-between">
	    		<div className="flex-[50%] space-y-4 pb-12">
	    			<h3 className="font-bold text-2xl">Abstract</h3>
	    			<ul>
		    			<li><a href="#">Start Trial</a></li>
							<li><a href="#">Pricing</a></li>
							<li><a href="#">Download</a></li>
						</ul>
	    		</div>
	    		<div className="flex-[50%] space-y-4 pb-12">
						<h3 className="font-bold text-2xl">Resources</h3>
						<ul>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Help</a></li>
							<li><a href="#">Center</a></li>
							<li><a href="#">Release</a></li>
							<li><a href="#">Notes</a></li>
							<li><a href="#">Status</a></li>
						</ul>
	    		</div>
	    		<div className="flex-[50%] space-y-4 pb-12">
	    			<h3 className="font-bold text-2xl">Community</h3>
						<ul>
							<li><a href="#">Twitter</a></li>
							<li><a href="#">LinkedIn</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Dribbble</a></li>
							<li><a href="#">Podcast</a></li>
						</ul>
	    		</div>
					<div className="flex-[50%] space-y-4 pb-12">
						<h3 className="font-bold text-2xl">Company</h3>
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Legal</a></li>
							<li>
								<div className="mt-6">
									<h4 className="font-bold">Contact Us</h4>
									<a href="#">info@abstract.com</a>
								</div>
							</li>
		  			</ul>
					</div>
				</div>
				<div className="flex flex-col gap-4 text-xl sm:self-end">
					<Image src={LogoFooter} width={132} alt="logo image"/>
					<div>
						<p>© Copyright 2024</p>
						<p>Abstract Studio Design, Inc.</p>
						<p>All rights reserved</p>
					</div>
				</div>
			</nav>
		</footer>
	)
}
