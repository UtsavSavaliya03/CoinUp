import React from 'react';

export default function Features() {
    return (
        <div className='my-12 md:px-[140px] px-4' id='features'>
            <p className='md:pt-12 text-5xl font-normal lg:w-[50%]'>Powerful Features for Managing Your Crypto</p>

            <div className='grid lg:grid-cols-3 gap-6 mt-12'>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <p className='text-[#0f0f0f] text-3xl'>Easy Onboarding & Simple Use</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/OFLuDR3Cf4IRijJaBL0ST7J8zk.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Get started in minutes with our intuitive and user-friendly experience. No crypto knowledge required.</p>
                </div>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <p className='text-[#0f0f0f] text-3xl'>Advanced Security Features</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/Zkwuf69ADEBocgNupSKOc4MG90.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Industry-leading security features and secure backup options keep your crypto safe and accessible.</p>
                </div>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <p className='text-[#0f0f0f] text-3xl'>Secure Staking & Earn Rewards</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/d5XyezVOEBiutIJ44LjYs0UCo.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Earn passive income with secure staking options. Grow your portfolio while your crypto works for you.</p>
                </div>
                <div className='lg:col-span-2 bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <div className='flex'>
                        <p className='bg-[#ffc5f6] text-[12px] leading-[12px] py-2 px-3 rounded-full'>NEW</p>
                    </div>
                    <div className='md:w-[50%] mt-4'>
                        <p className='text-[#0f0f0f] text-3xl'>Customizable Watchlist & Price Alerts</p>
                        <p className='text-[#4b4b4b] mt-2'>Create a personalized watchlist and set price alerts to stay informed about market movements.</p>
                    </div>
                    <img className='h-[300px] w-[450px] mx-auto my-4' src='https://framerusercontent.com/images/cmJFL59UdkUqkVAnIFbkifIEM.svg' alt='images' />
                </div>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <div className='flex'>
                        <p className='bg-[#ffc5f6] text-[12px] leading-[12px] py-2 px-3 rounded-full'>NEW</p>
                    </div>
                    <p className='text-[#0f0f0f] text-3xl mt-4'>Stay Informed, Invest Confidently</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/VKmNulBALM4DAoBn6mWgkwTVIL0.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Staying informed and making smart investment decisions through the in-app news feed.</p>
                </div>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <p className='text-[#0f0f0f] text-3xl'>Multi-Currency Support</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/DhvP7DwZoJloKqYNKBIA8Dhroz4.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Effortlessly manage a diverse portfolio of cryptocurrencies in a single, user-friendly interface.</p>
                </div>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <p className='text-[#0f0f0f] text-3xl'>Sync Across Devices</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='	https://framerusercontent.com/images/u7orwzIwerNIb9TDWdU8cAY3n8.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Sync your wallet seamlessly across multiple devices, ensuring access to your assets wherever you go.</p>
                </div>
                <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
                    <p className='text-[#0f0f0f] text-3xl'>24/7 Customer Support</p>
                    <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/TBUl6dJ1E5A7OCISe7KPdnELY4E.svg' alt='images' />
                    <p className='text-[#4b4b4b]'>Our dedicated team of experts, ready to assist you with any inquiries or issues you may encounter.</p>
                </div>
                <div className='lg:col-span-3 bg-[#ffc5f6] rounded-2xl p-4 md:p-8 xl:flex justify-between flex-wrapa'>
                    <div className='xl:w-[50%] mt-4'>
                        <p className='text-[#0f0f0f] text-4xl font-normal lg:w-[60%]'>Streamline Your Crypto Experience</p>
                        <p className='text-[#4b4b4b] mt-12 lg:w-[70%]'>Experience seamless cryptocurrency management with our user-friendly app. Effortlessly track, trade, and secure your digital assets, all in one place.</p>
                        <a href='#supported-chains'><button className='bg-[black] text-white font-semibold px-4 py-2 rounded-lg mt-12'>Supported Chains</button></a>
                    </div>
                    <div className='flex'>
                        <div className='border border-2 border-[grey] p-10 rounded-full mx-auto mt-8 xl:mt-0'>
                            <img className='h-[270px] w-[270px]' src='https://framerusercontent.com/images/lOXf7O0V57KOYVY785AjrDqfHE.svg' alt='images' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
