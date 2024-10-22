import { v4 as uuid_v4 } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/app/data/projects.json';

export default function Home() {
	return (
		<main className="mx-4 font-sans">
			<section className="py-44 text-center">
				<h1 className="text-center text-4xl leading-tight font-medium">A brand and product designer working with clients globally</h1>
				{ /*tags*/}
			</section>
			<section className="space-y-6">
				{
					projects.map(project => {
						let pathResource = `/${project.url}`;
						return (
							<article key={uuid_v4()}>
								<Link href="#">
									{
										project.type === 'image'
										? <Image
                        src={pathResource} alt="project illustration" width={700} height={0}
                        className="rounded-xl"
                      />
                    : <video autoPlay={true} loop={true} src={pathResource} className="rounded-xl">Your browser does not support the video tag.</video>
									}
                  <div className="flex gap-2 text-sm mt-3">
                    <span className="inline-block">{project.name}</span>
                    { project.comming && <span className="inline-block text-neutral">Comming soon</span> }
                  </div>
								</Link>
							</article>
						)
					})
				}
			</section>
			<section className="text-center py-32">
				<h2 className="text-3xl font-medium">
					<span className="block">Let's work together.</span>
					<span className="text-neutral">Get in touch.</span>
				</h2>
			</section>
		</main>
	);
}
