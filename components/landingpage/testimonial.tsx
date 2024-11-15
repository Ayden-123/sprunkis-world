'use client';
import TestimonialCard from './testimonial/card';
import { TestimonialsList } from '@/lib/testimonialsList';
import { motion } from 'framer-motion';
import { MdFeedback } from 'react-icons/md';

export default function Feature({ locale, langName = 'en' }) {
	let list = TestimonialsList[`TESTIMONIAL_${langName.toUpperCase()}`] || [];
	return (
		<section
			id='testimonial'
			className='relative py-10 md:py-20'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>

					<h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-landingpage_text_big_white from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
						{/* {locale.h3} */}
						Who is TLDR This for?
					</h3>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 w-full md:w-10/12 mx-auto columns-1 md:columns-3 gap-5'>
					{list.map((item, index) => {
						return (
							<TestimonialCard
								key={index}
								testimonialItem={item}
							/>
						);
					})}
				</div>
			</motion.div>

			<div className='hidden md:block absolute left-[20%] top-[70%] z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
		</section>
	);
}
