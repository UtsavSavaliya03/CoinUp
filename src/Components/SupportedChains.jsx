import React from 'react';

export default function SupportedChains() {

    const data = [
        { chain: 'BNB Smart Chain (BNB)', icon: '/Assets/Icons/bnb.png', buy: true, sell: true, swap: true, earn: true },
        { chain: 'Ethereum (ETH)', icon: '/Assets/Icons/ehereum.png', buy: true, sell: true, swap: true, earn: false },
        { chain: 'Bitcoin (BTC)', icon: '/Assets/Icons/btc.png', buy: true, sell: true, swap: false, earn: false },
        { chain: 'Solana (SOL)', icon: '/Assets/Icons/solana.png', buy: true, sell: true, swap: true, earn: true },
        { chain: 'Avalanche (AVAX)', icon: '/Assets/Icons/avalanche.png', buy: true, sell: true, swap: false, earn: true },
        { chain: 'Polygon (MATIC)', icon: '/Assets/Icons/polygon.png', buy: true, sell: true, swap: true, earn: true },
        { chain: 'Polkadot (DOT)', icon: '/Assets/Icons/polkadot.png', buy: true, sell: true, swap: true, earn: false },
    ];

    return (
        <div className='md:px-12 px-4 pt-12' id='supported-chains'>
            <div className='bg-[#272727] p-4 md:p-12 rounded-3xl'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='bg-[#ffffff08] rounded-lg border border-[#ffffff12] h-[40px] w-[40px] flex justify-center items-center cursor-pointer'>
                        <img src='https://framerusercontent.com/images/NSHfDxjR4kh9jXZVRoihYTTpQ.svg' className='h-5' alt='icon' />
                    </div>
                    <div className='bg-[#ffffff08] rounded-lg border border-[#ffffff12] h-[50px] w-[50px] flex justify-center items-center cursor-pointer'>
                        <img src='https://framerusercontent.com/images/s0Fljg3nN33tggKw8umQheRw8.svg' className='h-6' alt='icon' />
                    </div>
                    <div className='bg-[#ffffff08] rounded-lg border border-[#ffffff12] h-[40px] w-[40px] flex justify-center items-center cursor-pointer'>
                        <img src='https://framerusercontent.com/images/NSHfDxjR4kh9jXZVRoihYTTpQ.svg' className='h-5' alt='icon' />
                    </div>
                </div>

                <p className='mx-auto lg:w-[50%] text-white text-center text-4xl md:text-6xl font-normal mt-8'>Wide Range of Supported Chains</p>
                <p className='text-[#cfcfcf] lg:w-[45%] mx-auto text-center mt-8'>Our app supports a diverse selection of blockchain networks, empowering you to manage various cryptocurrencies with ease and flexibility.</p>

                <div className='my-12 lg:mx-12 overflow-x-auto rounded-2xl'>
                    <table className='table-auto w-full'>
                        <thead>
                            <tr className='text-left text-[#878787] bg-[#2e2e2e]'>
                                <td className='p-6'>Chain</td>
                                <td className='p-6'>Buy</td>
                                <td className='p-6'>Sell</td>
                                <td className='p-6'>Swap</td>
                                <td className='p-6'>Earn</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, index) => (
                                    <tr key={index} className={`${index % 2 == 0 ? 'bg-[#353535]' : 'bg-[#2e2e2e]'}`}>
                                        <td className='flex items-center p-4 text-white'>
                                            <img src={item?.icon} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                            {item?.chain}
                                        </td>
                                        <td className='p-4'>{item?.buy ? (<div className='bg-[#4ceb9f26] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-4' src='https://framerusercontent.com/images/AG18Df69ZqxKsH4HR6wTsvLVk.svg' alt='icon' /></div>) : (<div className='bg-[#ffffff12] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-3' src='https://framerusercontent.com/images/oQuzY0PtXbElIO6ItfLzZNO7w.svg' alt='icon' /></div>)}</td>
                                        <td className='p-4'>{item?.sell ? (<div className='bg-[#4ceb9f26] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-4' src='https://framerusercontent.com/images/AG18Df69ZqxKsH4HR6wTsvLVk.svg' alt='icon' /></div>) : (<div className='bg-[#ffffff12] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-3' src='https://framerusercontent.com/images/oQuzY0PtXbElIO6ItfLzZNO7w.svg' alt='icon' /></div>)}</td>
                                        <td className='p-4'>{item?.swap ? (<div className='bg-[#4ceb9f26] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-4' src='https://framerusercontent.com/images/AG18Df69ZqxKsH4HR6wTsvLVk.svg' alt='icon' /></div>) : (<div className='bg-[#ffffff12] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-3' src='https://framerusercontent.com/images/oQuzY0PtXbElIO6ItfLzZNO7w.svg' alt='icon' /></div>)}</td>
                                        <td className='p-4'>{item?.earn ? (<div className='bg-[#4ceb9f26] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-4' src='https://framerusercontent.com/images/AG18Df69ZqxKsH4HR6wTsvLVk.svg' alt='icon' /></div>) : (<div className='bg-[#ffffff12] h-[24px] w-[24px] rounded-full flex justify-center items-center'><img className='h-3' src='https://framerusercontent.com/images/oQuzY0PtXbElIO6ItfLzZNO7w.svg' alt='icon' /></div>)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
