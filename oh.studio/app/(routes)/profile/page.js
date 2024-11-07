import { v4 as uuid_v4 } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import experience from '@/app/data/experience.json';
import companies from '@/app/data/companies.json';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
	title: "Profile - OH.STUDIO",
	description: "A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences."
};

export default function Profile() {
	return (
		<main className="pt-24 mx-4 font-sans">
      <ScrollAnimation
      	className="py-40 text-center"
      	classNameNotInView="opacity-0 translate-y-24"
      	classNameInView="opacity-100 translate-y-0"
    	>
        <h1 className="text-center text-4xl leading-tight font-medium md:text-5xl lg:text-7xl">Hey 👋🏼 I'm Oli </h1>
      </ScrollAnimation>
			<ScrollAnimation className="flex gap-6 md:mx-6 lg:h-[32rem] lg:max-w-[84rem] lg:mx-auto">
				<Image
					src="/my-photo-1.avif" alt="my photo" width={600} height={0}
					className="w-full rounded-xl object-cover h-72 md:h-full"
				/>
				<Image
          src="/my-photo-2.avif" alt="my photo" width={600} height={0}
          className="hidden w-full rounded-xl object-cover md:inline"
        />
			</ScrollAnimation>
			<ScrollAnimation className="text-center space-y-6 py-24 md:w-[35rem] md:mx-auto md:py-40 lg:w-[40rem]">
				<h2 className="inline py-2 px-3 rounded-full text-sm bg-secundary">About</h2>
				<p className="text-center text-2xl font-medium md:text-4xl md:leading-tight">
					A freelance designer based in the UK.	I combine my experience in product and brand to solve problems,	tell stories, and create compelling experiences.
				</p>
			</ScrollAnimation>
			<ScrollAnimation className="text-center space-y-4 md:py-16">
				<h2 className="inline py-2 px-3 rounded-full text-sm bg-secundary">Experience</h2>
				<p className="text-center text-3xl font-medium md:text-4xl">Where I've worked</p>
				<div className="py-24 grid grid-cols-2 md:grid-cols-3 xl:w-[76rem] xl:mx-auto">
					{
						experience.map( xp =>
							<div key={uuid_v4()} className="my-6 space-y-2">
								<span className="text-neutral text-sm">{xp.workTime.begin} {xp.workTime.end ? `- ${xp.workTime.end}`: null}</span>
								<p className="text-lg font-medium lg:text-2xl">{xp.company}</p>
								<span className="text-neutral text-sm">{xp.jobRole}</span>
								<div className="py-4">
									<span className="py-2 px-3 rounded-full text-sm bg-secundary">{xp.contract}</span>
								</div>
							</div>
						)
					}
				</div>
			</ScrollAnimation>
			<ScrollAnimation className="text-center space-y-4 pb-20">
				<h2 className="inline py-2 px-3 rounded-full text-sm bg-secundary">Clients</h2>
				<p className="text-center text-3xl font-medium md:text-4xl">Who I've worked with</p>
				<div className="pt-24 grid grid-cols-2 md:grid-cols-4 md:pt-16 xl:w-[84rem] xl:mx-auto">
					{
						companies.map(company => {
							let pathname = `/${company.url}`;
							return (
								<div key={uuid_v4()} className="my-10 mx-auto invert">
									<Image
										src={pathname} alt="company logo" width={200} height={0}
									/>
								</div>
							)
						})
					}
				</div>
			</ScrollAnimation>
      <ScrollAnimation className="text-center pt-24 pb-48">
        <h2 className="text-3xl font-medium md:text-4xl">
          <span className="block">Let's work together.</span>
          <span className="text-neutral"><Link href="mailto:oli@oh.studio">Get in touch.</Link></span>
        </h2>
      </ScrollAnimation>
		</main>
	)
};
