import React from 'react';

export default function BulletproofingInvestments() {
  return (
    <div className='my-12 md:px-[140px] px-4' id='security'>
      <p className='md:pt-12 text-4xl md:text-5xl font-normal lg:w-[40%]'>Bulletproofing Your Crypto Investments</p>

      <div className='grid lg:grid-cols-3 gap-6 mt-12'>
        <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
          <p className='text-[#0f0f0f] text-3xl'>Decentralized Security Measures</p>
          <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/IJreUfRciR0qQh1X0QTcC2XU.svg' alt='images' />
          <p className='text-[#4b4b4b]'>Our decentralized security spreads responsibilities, reducing single points of failure and bolstering resilience.</p>
        </div>
        <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
          <p className='text-[#0f0f0f] text-3xl'>Fortified Access Management</p>
          <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/xKXbKve3CJlg6oKudT7sSIRII4.svg' alt='images' />
          <p className='text-[#4b4b4b]'>Through multi-tiered access controls, we fortify your account against unauthorized access attempts.</p>
        </div>
        <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl p-4 md:p-8'>
          <p className='text-[#0f0f0f] text-3xl'>Secure Backup Solutions</p>
          <img className='h-[250px] w-[250px] mx-auto my-8' src='https://framerusercontent.com/images/T223LXqOvKqD1gaxhtyAiG0wc1U.svg' alt='images' />
          <p className='text-[#4b4b4b]'>We offer secure backups to ensure data and asset protection, even in the event of hardware failure or loss.</p>
        </div>
        <div className='lg:col-span-3 bg-[#fdbc45] rounded-2xl p-4 md:p-8 xl:flex justify-between flex-wrapa'>
          <div className='xl:w-[50%] mt-4'>
            <p className='text-[#0f0f0f] text-4xl font-normal lg:w-[60%]'>CoinUp's Unrivaled Security Features</p>
            <p className='text-[#4b4b4b] mt-12 lg:w-[70%]'>Protect your investments with CoinUp's security measures. From robust encryption protocols to multi-factor authentication and continuous monitoring, our platform ensures the safety for your digital assets.</p>
            <a href='#downloads'><button className='bg-[black] text-white font-semibold px-4 py-2 rounded-lg mt-12'>Download Wallet</button></a>
          </div>
          <div className='flex'>
            <div className='border border-2 border-[grey] p-10 rounded-full mx-auto mt-8 xl:mt-0'>
              <img className='h-[270px] w-[270px]' src='https://framerusercontent.com/images/8eBh1l9vLYc5zAmnp2N2rBzrW0.svg' alt='images' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
