import React from 'react';

export default function Footer() {
    return (
        <div className='md:px-12 px-4 pt-12'>
            <div className='bg-[#272727] p-6 md:p-12 rounded-3xl'>
                <div className='xl:px-[70px]'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                        <div>
                            <p className='uppercase text-white text-sm'>MENU</p>
                            <div className='mt-6'>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2' href='#hero'>Home</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2' href='#features'>Features</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2' href='#about'>About Wallet</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2' href='#supported-chains'>Supported Coins</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2' href='#security'>Security</a>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase text-white text-sm'>DOWNLOAD</p>
                            <div className='mt-6'>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>IOS App ↗</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>Android App ↗</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>Chrome Extension ↗</a>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase text-white text-sm'>RESOURCES</p>
                            <div className='mt-6'>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>Whitepaper ↗</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>Developer Portal ↗</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>CoinUP Foundation ↗</a>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase text-white text-sm'>SUPPORT</p>
                            <div className='mt-6'>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>General Support</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>Discord Community</a>
                                <a className='text-[#cfcfcf] hover:text-white duration-300 cursor-pointer block mt-2'>Telegram Chat</a>
                            </div>
                        </div>
                    </div>
                    <p className='text-[#878787] text-sm text-center border-t border-[#ffffff12] pt-6'>© 2024, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
