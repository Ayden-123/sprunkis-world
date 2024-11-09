import Image from 'next/image';
import { Button } from '@/components/ui/button'; // 假设您使用了某种UI组件库

export default function GetStarted() {
    return (
        <div className='text-white max-w-6xl mx-auto py-16'>
            <div className='text-4xl md:text-5xl font-bold text-center mb-16'>Get started with a few easy steps</div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Step 1 */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-2'>
                        <span className='bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold'>1.</span>
                        <h3 className='text-xl font-semibold'>Type a Prompt</h3>
                    </div>
                    {/* <div className='bg-gray-100 rounded-lg p-4'>
                        <h4 className='text-gray-800 font-semibold mb-2'>Start Creating</h4>
                        <p className='text-gray-600 text-sm mb-4'>Enter your prompt to get started</p>
                        <div className='bg-white rounded p-2 mb-2'>
                            <p className='text-gray-800 text-sm'>A person with a VR headset floating in space</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-600 text-sm'>Simple</span>
                            <Button className='bg-pink-500 hover:bg-pink-600 text-white'>Create</Button>
                        </div>
                    </div> */}
                    <Image src="/images/step/step1.png" alt="AI generated image step1" width={300} height={300} className='rounded-lg' />
                    <p className='text-gray-300 text-sm'>
                        Input your desired poster title and content. The AI will help you add more poster elements.
                    </p>
                </div>

                {/* Step 2 */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-2'>
                        <span className='bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold'>2.</span>
                        <h3 className='text-xl font-semibold'>Press Generate</h3>
                    </div>
                    <Image src="/images/step/step2.png" alt="AI generated image step2" width={300} height={300} className='rounded-lg' />
                    <p className='text-gray-300 text-sm'>
                        Watch our AI engine create your vector graphic. Hang in there, it takes a few seconds.
                    </p>
                </div>

                {/* Step 3 */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-2'>
                        <span className='bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold'>3.</span>
                        <h3 className='text-xl font-semibold'>Download</h3>
                    </div>
                    <Image src="/images/step/step3.png" alt="AI generated image step3" width={300} height={300} className='rounded-lg' />
                    <p className='text-gray-300 text-sm'>
                        Download the poster to your local disk. Your Poster look amazing!
                    </p>
                </div>
            </div>

            <div className='flex justify-center mt-16'>
                <a className='bg-purple_bg hover:bg-purple_bg/80 text-white px-8 py-3 text-lg'
                    href='/home'>
                    Get started
                </a>
            </div>

            <div className="w-full mt-10">
                <div className="h-px bg-white/20"></div>
            </div>
        </div>
    );
}