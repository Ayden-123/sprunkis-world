import { Twitter } from 'lucide-react';
import Image from 'next/image';


// export default function Footer() {
// 	return (
// 		<footer className='w-full px-5 py-10 text-[#f7f7f7]'>
// 			<div className='max-w-[1200px] mx-auto flex justify-between items-center md:items-start gap-2 text-sm'>
// 				<div className='flex items-center flex-col justify-between'>
// 					<a
// 						className='flex items-center mb-3'
// 						href={`/`}
// 					>
// 						<Image
// 							width={200}
// 							height={200}
// 							src={'/logo.png'}
// 							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
// 							alt='logo'
// 						></Image>
// 						<h2 className='ml-3 font-bold leading-5'>DeePoster</h2>
// 					</a>
// 					<p className='flex text-gray-400 items-cneter justify-between'>
// 						Unleash our AI Poster Generator's creativity.
// 					</p>
// 				</div>

// 				<div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 ">
// 					<div className="font-inter font-bold">Contact Us</div>
// 					<div className="font-inter text-base text-gray-400">
// 						office@deeposter.com
// 					</div>
// 					<div className='flex flex-row'>
// 						<a href="https://x.com/Ayden990804"
// 							target="_blank"
// 							className='px-3'
// 						>
// 							<img src="/svg/social/x.png"
// 								alt="x"
// 								className='text-white'
// 								width="40"
// 								height="40" />
// 						</a>

// 						<a href="https://www.indiehackers.com/ayden"
// 							target="_blank"
// 							className='px-3'
// 						>
// 							<img src="/svg/social/indiehacker.svg"
// 								alt="indiehacker"
// 								className='text-white'
// 								width="40"
// 								height="40" />
// 						</a>

// 						<a
// 							href='https://linktr.ee/ayden132'
// 							target="_blank"
// 							className='font-inter text-base text-gray-400'
// 						>
// 							<img src="/svg/social/link.png"
// 								alt="linktree"
// 								className='text-white'
// 								width="25"
// 								height="25" />
// 						</a>

// 						<a href="https://bigfrontend.dev/user/ZLl7TXl"
// 							target="_blank"
// 							className='px-5'
// 						>
// 							<img src="/svg/social/link.png"
// 								alt="bigfrontend"
// 								className='text-white'
// 								width="25"
// 								height="25" />
// 						</a>
// 					</div>
// 				</div>
// 				<div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 ">
// 					<div className="font-inter font-bold">About</div>
// 					<a
// 						href="/privacy-notice"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						Privacy Notice
// 					</a>
// 					<a
// 						href="/terms-of-service"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						Terms Of Service
// 					</a>

// 				</div>
// 				<div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 ">
// 					<div className="font-inter font-bold">Blog</div>
// 					<a
// 						href="https://telegra.ph/DeePoster--Create-Stunning-Posters-with-AI-10-19"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						telegra
// 					</a>
// 					<a
// 						href="https://aydens-organization.gitbook.io/deeposter"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						gitbook
// 					</a>
// 					<a
// 						href="https://post.smzdm.com/p/admmkeqd/"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						什么值得买
// 					</a>
// 					<a
// 						href="https://substack.com/home/post/p-150442974"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						substack
// 					</a>
// 					<a
// 						href="https://www.qiuyumi.com/whois/?domain=deeposter.com"
// 						target="_blank"
// 						className="font-inter text-base text-gray-400"
// 					>
// 						秋玉米
// 					</a>
// 				</div>
// 				<div className="mb-5 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 ">
// 					<div className="font-inter font-bold">Frendship Links</div>
// 					<a href="https://iuu.ai/">iuu AI</a>
// 					<a href="https://tap4.ai/ai/flux-ai-io" title="Flux Image AI">Flux Image AI</a>
// 					<a href="https://bai.tools" target="_blank">BAI.tools</a>
// 					<a href='https://aitooltrek.com' title='AI Tool Trek'> AI Tool Trek </a>
// 					<a href="https://fluxai.pro/" title="Flux AI Pro">Flux AI Pro</a>
// 				</div>
// 				<div className="mb-5 mt-10 flex max-w-[200px] grow basis-[100px] flex-col space-y-5">
// 					<a href="https://dang.ai/" target="_blank" >
// 						<img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png"
// 							alt="Dang.ai"
// 							width="150"
// 							height="54" />
// 					</a>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }



export default function Footer() {
	return (
		<footer className='w-full px-5 py-10 text-[#f7f7f7]'>
			<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-sm'>
				<div className='flex items-center flex-col justify-between w-full md:w-auto'>
					<a className='flex items-center mb-3' href={`/`}>
						<Image
							width={200}
							height={200}
							src={'/logo.png'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='logo'
						/>
						<h2 className='ml-3 font-bold leading-5'>DeePoster</h2>
					</a>
					<p className='flex text-gray-400 items-center justify-between text-center md:text-left'>
						Unleash our AI Poster Generator's creativity.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
					<div className="flex flex-col space-y-3">
						<div className="font-inter font-bold">Contact Us</div>
						<div className="font-inter text-sm text-gray-400">
							office@deeposter.com
						</div>
						<div className='flex flex-row space-x-2'>
							<a href="https://x.com/Ayden990804"
								target="_blank"
								className='px-3'
							>
								<img src="/svg/social/x.png"
									alt="x"
									className='text-white'
									width="40"
									height="40" />
							</a>

							<a href="https://www.indiehackers.com/ayden"
								target="_blank"
								className='px-3'
							>
								<img src="/svg/social/indiehacker.svg"
									alt="indiehacker"
									className='text-white'
									width="40"
									height="40" />
							</a>

							<a
								href='https://linktr.ee/ayden132'
								target="_blank"
								className='font-inter text-base text-gray-400'
							>
								<img src="/svg/social/link.png"
									alt="linktree"
									className='text-white'
									width="25"
									height="25" />
							</a>

							<a href="https://bigfrontend.dev/user/ZLl7TXl"
								target="_blank"
								className='px-5'
							>
								<img src="/svg/social/link.png"
									alt="bigfrontend"
									className='text-white'
									width="25"
									height="25" />
							</a>
						</div>
					</div>

					<div className="flex flex-col space-y-3">
						<div className="font-inter font-bold">About</div>
						<a href="/privacy-notice" target="_blank" className="font-inter text-sm text-gray-400">
							Privacy Notice
						</a>
						<a href="/terms-of-service" target="_blank" className="font-inter text-sm text-gray-400">
							Terms Of Service
						</a>
					</div>

					<div className="flex flex-col space-y-3">
						<div className="font-inter font-bold">Blog</div>
						<a
							href="https://telegra.ph/DeePoster--Create-Stunning-Posters-with-AI-10-19"
							target="_blank"
							className="font-inter text-base text-gray-400"
						>
							telegra
						</a>
						<a
							href="https://aydens-organization.gitbook.io/deeposter"
							target="_blank"
							className="font-inter text-base text-gray-400"
						>
							gitbook
						</a>
						<a
							href="https://post.smzdm.com/p/admmkeqd/"
							target="_blank"
							className="font-inter text-base text-gray-400"
						>
							什么值得买
						</a>
						<a
							href="https://substack.com/home/post/p-150442974"
							target="_blank"
							className="font-inter text-base text-gray-400"
						>
							substack
						</a>
						<a
							href="https://www.qiuyumi.com/whois/?domain=deeposter.com"
							target="_blank"
							className="font-inter text-base text-gray-400"
						>
							秋玉米
						</a>
					</div>

					<div className="flex flex-col space-y-3">
						<div className="font-inter font-bold">Friendship Links</div>
						<a href="https://iuu.ai/">iuu AI</a>
						<a href="https://tap4.ai/ai/flux-ai-io" title="Flux Image AI">Flux Image AI</a>
						<a href="https://bai.tools" target="_blank">BAI.tools</a>
						<a href='https://aitooltrek.com' title='AI Tool Trek'> AI Tool Trek </a>
						<a href="https://fluxai.pro/" title="Flux AI Pro">Flux AI Pro</a>
						<a
							href="https://aipure.ai/"
							target="_blank">
							AIPURE AI
						</a>
					</div>
				</div>

				<div className="mt-8 md:mt-0 w-full md:w-auto flex justify-center md:justify-start">
					<a href="https://dang.ai/" target="_blank">
						<img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png"
							alt="Dang.ai"
							width="150"
							height="54" />
					</a>
				</div>
			</div>
		</footer>
	);
}