import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
	title: "Contact - OH.STUDIO",
	description: "Let's work together. Get in touch. © Oli Harris 2023.",
}

export default function Contact() {
	return (
		<>
			<Header page="contact"/>
			<main className="h-[80vh] flex items-center font-sans mx-5 pt-28">
				<h1 className="w-full text-center text-4xl leading-tight font-medium">
					<span className="block">Let's work together.</span>
					<span className="text-neutral"><a href="mailto:oli@oh.studio">Get in touch.</a></span>
				</h1>
			</main>
			<Footer />
		</>
	)
}
