import React from 'react';

export default function AboutApp() {
    return (
        <div className='my-12 md:py-12 md:px-[140px] px-4' id='about'>
            <div className='grid lg:grid-cols-2 items-center'>
                <div className='xl:w-[480px] xl:h-[460px] h-full w-full rounded-2xl mobile-back-background bg-[#fdbc45] flex items-end justify-center px-4 pt-4'>
                    <img src='/Assets/Images/left-mobile.png' className='xl:w-[360px] xl:h-[380px]' />
                </div>
                <div className='mt-10 ml-0 lg:mt-0 lg:ml-8'>
                    <div className='flex mb-8'>
                        <p className='text-[12px] leading-[12px] py-2 px-3 border border-black rounded-full'>ABOUT APP</p>
                    </div>
                    <p className='text-5xl'>Discover CoinUp Cryptowallet Solution</p>
                    <p className='text-[#4b4b4b] mt-8'>Experience the pinnacle of security and convenience with CoinUp's Cryptowallet Solution. Our state-of-the-art wallet offers unparalleled protection for your digital assets, coupled with intuitive features designed to streamline your crypto experience. </p>
                    <p className='text-[#4b4b4b] mt-8'>With CoinUp, you can securely store, manage, and transact with ease, empowering you to navigate the world of cryptocurrency with confidence and peace of mind.</p>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-12 bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8 mt-[90px]'>
                <div>
                    <img className='h-8 w-8' src='https://framerusercontent.com/images/csLcnq6YaXZNSONnYMd4QZ408.svg' alt='icon'/>
                    <p className='mt-6 text-xl font-medium'>Keep Your Crypto Safe</p>
                    <p className='mt-4 text-[#4b4b4b]'>Rest easy knowing your digital assets are protected by our robust security features, keeping hackers at bay.</p>
                </div>
                <div>
                    <img className='h-8 w-8' src='https://framerusercontent.com/images/iRlQDTlJ8PZYUzlHskw8mdzA4.svg' alt='icon'/>
                    <p className='mt-6 text-xl font-medium'>Manage Everything Easily</p>
                    <p className='mt-4 text-[#4b4b4b]'>Effortlessly handle your crypto portfolio in one place, making transactions simple and intuitive.</p>
                </div>
                <div>
                    <img className='h-8 w-8' src='https://framerusercontent.com/images/DIoAViQB5XwyssP5AOGpBFEoog.svg' alt='icon'/>
                    <p className='mt-6 text-xl font-medium'>Access Anywhere</p>
                    <p className='mt-4 text-[#4b4b4b]'>Stay connected to your crypto world on the go, with seamless syncing across all your devices.</p>
                </div>
            </div>
        </div>
    )
}
