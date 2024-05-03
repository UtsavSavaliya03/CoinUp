import React from 'react';

export default function SafeguardComponent() {
    return (
        <div className='md:px-12 px-4' id='hero'>
            <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl'>
                <div className='p-12'>
                    <p className='mx-auto text-center lg:w-[60%] text-4xl md:text-[72px] md:leading-[82px] font-medium'>Safeguard Your Digital Wealth with CoinUp</p>
                    <p className='mx-auto text-center lg:w-[50%] my-4 text-[#4b4b4b]'>Manage your cryptocurrencies securely and effortlessly with our intuitive cryptowallet app. Take control of your digital assets wherever you go.</p>
                    <div className='flex flex-wrap justify-center gap-4 mt-8'>
                        <a href='#downloads'><button className='mx-auto bg-[black] text-white font-semibold px-4 py-2 rounded-lg'>Get Wallet</button></a>
                        <a href='#features'><button className='mx-auto bg-[white] text-black font-semibold px-4 py-2 rounded-lg border border-[#e7e7e7] hover:bg-[#fafafaf5] hover:border-[#cfcfcf] duration-500'>Key Features</button></a>
                    </div>
                </div>

                <div className='mobile-back-background h-[150px] bg-[#fdbc45] mt-[240px]'>
                </div>
                <div className='flex justify-center items-end gap-8 mt-[-380px]'>
                    <img src='/Assets/Images/left-mobile.png' className='w-[250px] h-[290px] hidden lg:block' />
                    <img src='/Assets/Images/center-mobile.png' className='w-[360px] h-[380px]' />
                    <img src='/Assets/Images/right-mobile.png' className='w-[250px] h-[290px] hidden lg:block' />
                </div>
                <div className='bg-[#333333] py-2 rounded-b-2xl'>
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
