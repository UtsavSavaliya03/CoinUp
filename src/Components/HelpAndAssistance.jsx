import React from 'react'

export default function HelpAndAssistance() {
    return (
        <div className='my-12 md:py-12 md:px-[140px] px-4' id='support'>
            <img className='h-16 mx-auto mb-6' src='https://framerusercontent.com/images/pYXfCr0wyanwbOffAPwKwOJxPE.svg' alt='img' />
            <p className='text-4xl md:text-5xl text-center font-medium'>Get Help and Assistance</p>
            <p className='text-[#4b4b4b] mt-8 text-center lg:w-[45%] mx-auto'>Access our support team for assistance with any questions or issues. We're here to help you navigate the world of cryptocurrency with confidence.</p>


            <div className='lg:flex gap-5 mt-12'>
                <div className='lg:w-1/2 lg:mt-0 mt-12'>
                    <div className='bg-[#fafafa] border border-[#f3f3f3] hover:border-[#e7e7e7] duration-300 rounded-3xl p-4 md:p-8 cursor-pointer'>
                        <div className='h-[48px] w-[48px] border border-[#f3f3f3] rounded-full bg-white flex items-center justify-center'>
                            <img className='h-5 w-5' src='https://framerusercontent.com/images/Au7FjCgWgRlO8Pcdmli2KRDSvI.svg' alt='icon' />
                        </div>
                        <p className='text-xl font-medium mt-4'>General Support</p>
                        <p className='text-[#4b4b4b] mt-4'>Our team is ready to assist you with any inquiries and provide all the information.</p>
                    </div>
                    <div className='bg-[#fafafa] border border-[#f3f3f3] hover:border-[#e7e7e7] duration-300 rounded-3xl p-4 md:p-8 cursor-pointer my-6'>
                        <div className='h-[48px] w-[48px] border border-[#f3f3f3] rounded-full bg-white flex items-center justify-center'>
                            <img className='h-5 w-5' src='	https://framerusercontent.com/images/Lh02r2L4syCoPbxcri0zRjYCk1A.svg' alt='icon' />
                        </div>
                        <p className='text-xl font-medium mt-4'>Discord Community</p>
                        <p className='text-[#4b4b4b] mt-4'>Join our lively Discord Community for crypto insights, updates, and support.</p>
                    </div>
                    <div className='bg-[#fafafa] border border-[#f3f3f3] hover:border-[#e7e7e7] duration-300 rounded-3xl p-4 md:p-8 cursor-pointer'>
                        <div className='h-[48px] w-[48px] border border-[#f3f3f3] rounded-full bg-white flex items-center justify-center'>
                            <img className='h-5 w-5' src='https://framerusercontent.com/images/kqxaRvgnJOyHRQ9nFbnk7aPPjg.svg' alt='icon' />
                        </div>
                        <p className='text-xl font-medium mt-4'>Telegram Chat</p>
                        <p className='text-[#4b4b4b] mt-4'>Join the chat for lively discussions. Connect with other enthusiasts.</p>
                    </div>
                </div>
                <div className='lg:w-2/3 lg:mt-0 mt-8 p-4 bg-[#ffc5f6] rounded-3xl flex justify-center items-center'>
                    <img className='lg:h-[500px] lg:w-[500px]' src='https://framerusercontent.com/images/5bG3TOI9Sa3W4fF4aFgSQTfXj8.svg' alt='image' />
                </div>
            </div>

        </div>
    )
}
