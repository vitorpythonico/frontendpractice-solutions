import { v4 as uuid_v4 } from 'uuid';
import { Lock, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/app/data/projects.json';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
	return (
		<main className="mx-4 font-sans">
			<ScrollAnimation className="pt-56 pb-40 flex flex-col items-center gap-10">
				<h1 className="text-center text-4xl leading-tight font-medium
					md:text-5xl md:max-w-[38rem] md:leading-tight
					lg:text-7xl lg:max-w-[45rem] lg:leading-snug"
				>
					A brand and product designer working with clients globally
				</h1>
				<div className="hidden md:flex items-center gap-4 text-sm">
					<span>Expertise</span>
					<span className="inline py-2 px-3 rounded-full bg-secundary">Branding</span>
					<span className="inline py-2 px-3 rounded-full bg-secundary">Product</span>
					<span className="inline py-2 px-3 rounded-full bg-secundary">Design Systems</span>
				</div>
			</ScrollAnimation>
			<ScrollAnimation className="flex flex-col gap-6 md:grid md:grid-cols-2 md:mx-4 xl:max-w-[80rem] xl:mx-auto">
				{
					projects.map(project => {
						let pathResource = `/${project.url}`;
						return (
							<article key={uuid_v4()} className="md:relative">
									{
										project.type === 'image'
										?	<Link href="#" className="peer">
												<Image
                      	  src={pathResource} alt="project illustration" width={700} height={0}
                        	className={`w-full h-full rounded-xl md:duration-300 md:hover:blur-sm ${project.comming && 'cursor-auto'}`}
                      	/>
                    	</Link>
                    : <video autoPlay loop src={pathResource}
                    		className="w-full rounded-xl h-full object-cover
                    		md:duration-300 md:hover:blur-sm md:hover:cursor-pointer peer"
                  		>
                    		Your browser does not support the video tag.
                  		</video>
									}
                  <div
                  	className="flex gap-2 text-sm mt-3
                  	md:hidden md:absolute md:left-6 md:top-4 md:z-10 md:text-white md:w-[90%] md:peer-hover:flex justify-between"
                	>
										<div className="flex gap-2 md:flex-col md:gap-0 lg:text-lg">
	                    <span className="inline-block md:font-medium lg:font-normal">{project.name}</span>
	                    { project.comming && <span className="inline-block text-neutral md:font-medium lg:font-normal">Comming soon</span> }
                    </div>
                    <div>
											{
												project.comming
												? <button className="hidden rounded-full p-4 bg-black md:inline z-20">
														<Lock size={16} />
													</button>
												: <button className="hidden rounded-full p-4 text-black bg-white md:inline">
														<ArrowUpRight size={16} />
													</button>
											}
										</div>
                  </div>
							</article>
						)
					})
				}
			</ScrollAnimation>
			<ScrollAnimation className="text-center py-32 lg:py-52">
				<h2 className="text-3xl font-medium md:text-4xl">
					<span className="block">Let's work together.</span>
					<span className="text-neutral hover:opacity-60"><Link href="mailto:oli@oh.studio">Get in touch.</Link></span>
				</h2>
			</ScrollAnimation>
		</main>
	)
};

