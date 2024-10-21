import { MoveRight, ArrowRight} from 'lucide-react';
import Image from 'next/image';

import IconAccount from '@/app/public/images/icon-account.png';
import IconAuthenticate from '@/app/public/images/icon-authenticate.png';
import IconBilling from '@/app/public/images/icon-billing.png';
import IconComment from '@/app/public/images/icon-comment.png';
import IconOrganizations from '@/app/public/images/icon-organizations.png';
import IconVersions from '@/app/public/images/icon-versions.png';

export default function Main() {
	return (
  	<main className="text-black">
			<section className="text-center space-y-8	bg-secundary py-28">
				<h1 className="tracking-[-0.150rem] text-4xl 2xs:text-6xl md:text-[5rem]">How can we help?</h1>
				<div className="flex justify-center items-center">
					<input type="search" placeholder="Search"
						className="peer  w-full mx-4 max-w-[46rem] p-5 rounded-md outline-none border-[1px] text-xl border-black duration-300
						hover:border-contrast focus:border-contrast placeholder:text-black md:ml-12"
					/>
					<ArrowRight width={40} className="peer-hover:text-contrast duration-300 absolute right-6 md:relative md:right-20"/>
				</div>
			</section>
			<section className="space-y-24 px-4 py-28 xs:px-12 md:pt-40 md:grid md:grid-cols-2 md:gap-24 md:space-y-0 lg:px-[10vw]">
				<article className="flex gap-2 ">
					<div className="flex-[20%] w-full max-w-24">
						<Image src={IconVersions} alt="version icon" width={124}/>
					</div>
					<div className="flex-[80%] flex flex-col gap-2 ml-2">
						<h2 className="text-2xl text-primary font-bold">Using Abstract</h2>
						<p className="text-2xl text-primary">Abstract lets you manage, version, and document your designs in one place.</p>
						<a href="#" className="mt-2 flex items-center gap-2 text-contrast text-xl">Learn More <MoveRight width={24} strokeWidth={1} /></a>
				</div>
				</article>
				<article className="flex gap-2">
					<div className="flex-[20%] w-full max-w-24">
            <Image src={IconAccount} alt="account icon" width={124}/>
          </div>
          <div className="flex-[80%] flex flex-col gap-2 ml-2">
						<h2 className="text-2xl text-primary font-bold">Manage your acount</h2>
						<p className="text-2xl text-primary">Configure your account settings, such as your email, profile details, and password.</p>
						<a href="#" className="mt-2 flex items-center gap-2 text-contrast text-xl">Learn More <MoveRight width={24} strokeWidth={1} /></a>
					</div>
				</article>
				<article className="flex gap-2">
          <div className="flex-[20%] w-full max-w-24">
            <Image src={IconOrganizations} alt="organization icon" width={124}/>
          </div>
					<div className="flex-[80%] flex flex-col gap-2 ml-2">
						<h2 className="text-2xl text-primary font-bold">Manage organizations, teams and projects</h2>
						<p className="text-2xl text-primary">Use Abstract organizations, teams, and projects to organize your people and your work.</p>
						<a href="#" className="mt-2 flex items-center gap-2 text-contrast text-xl">Learn More <MoveRight width={24} strokeWidth={1} /></a>
					</div>
				</article>
				<article className="flex gap-2">
          <div className="flex-[20%] w-full max-w-24">
            <Image src={IconBilling} alt="billing icon" width={124}/>
          </div>
          <div className="flex-[80%] flex flex-col gap-2 ml-2">
						<h2 className="text-2xl text-primary font-bold">Manage billing</h2>
						<p className="text-2xl text-primary">Change subscriptions and payment details</p>
						<a href="#" className="mt-2 flex items-center gap-2 text-contrast text-xl">Learn More <MoveRight width={24} strokeWidth={1} /></a>
					</div>
				</article>
				<article className="flex gap-2">
          <div className="flex-[20%] w-full max-w-24">
            <Image src={IconAuthenticate} alt="authenticate icon" width={124}/>
          </div>
					<div className="flex-[80%] flex flex-col gap-2 ml-2">
						<h2 className="text-2xl text-primary font-bold">Authenticate to Abstract</h2>
						<p className="text-2xl text-primary">Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
						<a href="#" className="mt-2 flex items-center gap-2 text-contrast text-xl">Learn More <MoveRight width={24} strokeWidth={1} /></a>
					</div>
				</article>
				<article className="flex gap-2">
          <div className="flex-[20%] w-full max-w-24">
            <Image src={IconComment} alt="comment icon" width={124}/>
          </div>
          <div className="flex-[80%] flex flex-col gap-2 ml-2">
						<h2 className="text-2xl text-primary font-bold">Abstract support</h2>
						<p className="text-2xl text-primary">Get in touch with a human</p>
						<a href="#" className="mt-2 flex items-center gap-2 text-contrast text-xl">Learn More <MoveRight width={24} strokeWidth={1} /></a>
					</div>
				</article>
			</section>
  	</main>
	)
}
