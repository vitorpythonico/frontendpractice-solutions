import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata = {
	title: "Contact - OH.STUDIO",
	description: "Let's work together. Get in touch. © Oli Harris 2023.",
}

export default function Contact() {
	return (
		<main className="h-[80vh] flex items-center font-sans mx-5 pt-28 md:h-[90vh]">
			<ScrollAnimation className="w-full">
				<h1 className="text-center text-4xl leading-tight font-medium md:text-5xl lg:text-7xl lg:leading-tight">
					<span className="block">Let's work together.</span>
					<span className="text-neutral hover:opacity-60"><Link href="mailto:oli@oh.studio">Get in touch.</Link></span>
				</h1>
			</ScrollAnimation>
		</main>
	)
}
