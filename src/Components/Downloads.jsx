import React from 'react';

export default function Downloads() {
    return (
        <div className='my-12 md:px-12 lg:py-12 px-4' id='downloads'>
            <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl'>
                <div className='px-4 lg:pt-12 lg:px-12 xl:px-[90px]'>
                    <p className='text-4xl md:text-5xl font-medium lg:w-[40%]'>Get the CoinUp App and Dive Into Crypto</p>

                    <div className='grid lg:grid-cols-3 gap-6 mt-12'>
                        <div className='bg-white border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                            <img className='h-12 w-12' src='https://framerusercontent.com/images/ShBuiLqeIyWr9tFDtx24p4roGKE.svg' alt='icon' />
                            <p className='text-xl font-medium mt-4'>Download for IOS</p>
                            <p className='text-[#4b4b4b] mt-4'>Download the CoinUp Wallet Mobile App from the App Store.</p>
                        </div>
                        <div className='bg-white border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                            <img className='h-12 w-12' src='https://framerusercontent.com/images/FrxZyy6kfKwLeUdY1uobOZ9OEk.svg' alt='icon' />
                            <p className='text-xl font-medium mt-4'>Download for Android</p>
                            <p className='text-[#4b4b4b] mt-4'>Download the CoinUp Wallet Mobile App from the Google Play.</p>
                        </div>
                        <div className='bg-white border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                            <img className='h-12 w-12' src='https://framerusercontent.com/images/X007m2fizmS2iG1h23OpgO2GE.svg' alt='icon' />
                            <p className='text-xl font-medium mt-4'>Download for Chrome</p>
                            <p className='text-[#4b4b4b] mt-4'>Get the desktop Browser Extension from the Chrome Web Store.</p>
                        </div>
                        <div className='lg:col-span-3 bg-[#77e3af] rounded-2xl px-4 pt-4 md:px-8 md:pt-5 xl:flex justify-between flex-wrapa'>
                            <div className='xl:w-[50%] mt-4'>
                                <p className='text-[#0f0f0f] text-4xl font-normal lg:w-[60%]'>Take Your Crypto Assets Anywhere!</p>
                                <p className='text-[#4b4b4b] mt-12 lg:w-[70%]'>Unlock the power of crypto on the go with the CoinUp app. Seamlessly manage, trade, and track your digital assets from the palm of your hand, wherever you are. Download now and take control of your crypto.</p>
                                <div className='mt-8 mb-12 flex gap-5'>
                                    <img className='cursor-pointer' src='https://framerusercontent.com/images/daGlY7MhNnhjSLU3YjhdXlzBkOE.svg' alt='icon' />
                                    <img className='cursor-pointer' src='https://framerusercontent.com/images/HIwWMWocSGC4QVb8P4REjDpoq8.svg' alt='icon' />
                                </div>
                            </div>
                            <div className='flex items-end xl:mr-12'>
                                <img className='h-[270px] w-[270px] mx-auto mt-8 xl:mt-0' src='/Assets/Images/center-mobile.png' alt='images' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#333333] py-2 rounded-b-2xl mt-[80px]'>
                    <marquee className='pb-0 pt-1 m-0'>
                        <div className='text-white text-sm flex items-center gap-5'>
                            <p className='m-0'>FAST</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>OPEN-SOURCE</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>TRANSPARENT</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>UNIQUE</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>FRIENDLY</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>TRUSTWORTHY</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>DECENTRALIZED</p><p className='text-[#4b4b4b] font-bold text-2xl'>‒</p>
                            <p className='m-0'>SECURE</p>
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    )
}
