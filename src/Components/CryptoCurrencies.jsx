import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CryptoCurrencies() {

    const RowOne = [
        { icon: '/Assets/Icons/avalanche.png', title: 'Avalanche', symbol: 'AVAX' },
        { icon: '/Assets/Icons/bnb.png', title: 'BNB', symbol: 'BNB' },
        { icon: '/Assets/Icons/btc.png', title: 'USDC', symbol: 'USDC' },
        { icon: '/Assets/Icons/ehereum.png', title: 'Ethereum', symbol: 'ETH' },
        { icon: '/Assets/Icons/polkadot.png', title: 'Polkadot', symbol: 'DOT' },
        { icon: '/Assets/Icons/polygon.png', title: 'Polygon', symbol: 'MATIC' },
    ];
    const RowTwo = [
        { icon: '/Assets/Icons/solana.png', title: 'Solana', symbol: 'SOL' },
        { icon: '/Assets/Icons/graph.png', title: 'The Graph', symbol: 'GRT' },
        { icon: '/Assets/Icons/tether.png', title: 'Tether', symbol: 'USDC' },
        { icon: '/Assets/Icons/xrp.jpg', title: 'XRP', symbol: 'XRP' },
        { icon: '/Assets/Icons/chainlink.png', title: 'Chainlink', symbol: 'LINK' },
        { icon: '/Assets/Icons/shiba.png', title: 'Shiba Inu', symbol: 'SHIB' },
        { icon: '/Assets/Icons/optimism.png', title: 'Optimism', symbol: 'OP' },
    ];
    const RowThree = [
        { icon: '/Assets/Icons/aptos.jpg', title: 'Aptos', symbol: 'APT' },
        { icon: '/Assets/Icons/injective.png', title: 'Injective', symbol: 'INJ' },
        { icon: '/Assets/Icons/pepe.png', title: 'Pepe', symbol: 'PEPE' },
        { icon: '/Assets/Icons/render.png', title: 'Render', symbol: 'RNDR' },
        { icon: '/Assets/Icons/dai.png', title: 'Dai', symbol: 'DAI' },
        { icon: '/Assets/Icons/tron.png', title: 'TRON', symbol: 'TRX' },
        { icon: '/Assets/Icons/celestia.jpg', title: 'Celestia', symbol: 'TIA' },
    ];
    const RowFour = [
        { icon: '/Assets/Icons/stellar.png', title: 'Stellar', symbol: 'XLM' },
        { icon: '/Assets/Icons/cosmos.png', title: 'Cosmos', symbol: 'ATOM' },
        { icon: '/Assets/Icons/immutable.jpg', title: 'Immutable', symbol: 'IMX' },
        { icon: '/Assets/Icons/litecoin.jpg', title: 'Litecoin', symbol: 'LTC' },
        { icon: '/Assets/Icons/uniswap.png', title: 'Uniswap', symbol: 'UNI' },
        { icon: '/Assets/Icons/vechain.png', title: 'VeChain', symbol: 'VET' },
    ];
    const RowFive = [
        { icon: '/Assets/Icons/filecoin.png', title: 'Filecoin', symbol: 'FIL' },
        { icon: '/Assets/Icons/lido.png', title: 'Lido DAO', symbol: 'LDO' },
        { icon: '/Assets/Icons/okb.png', title: 'OKB', symbol: 'OKB' },
        { icon: '/Assets/Icons/thorchain.png', title: 'THORChain', symbol: 'RUNE' },
        { icon: '/Assets/Icons/toncoin.png', title: 'Toncoin', symbol: 'TON' },
        { icon: '/Assets/Icons/hedera.png', title: 'Hedera', symbol: 'HBAR' },
    ];

    const settingsLTR = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        variableWidth: true,
        arrows: false,
        rtl: true
    };

    const settingsRTL = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className='md:px-12 px-4' id='currencies'>
            <div className='bg-[#fafafa] border border-[#f3f3f3] rounded-2xl py-12'>
                <p className='text-4xl md:text-5xl text-center font-medium'>Accepted<br /> Cryptocurrencies</p>
                <p className='text-[#4b4b4b] mt-8 text-center md:w-[40%] mx-auto'>Array of cryptocurrencies integrated into the CoinUp platform. Explore accepted digital assets for storing and transacting with ease.</p>

                <div className='slider-wrapper my-12'>
                    <div class="slider">
                        <Slider {...settingsRTL} className='my-6'>
                            {RowOne.map((item, index) => (
                                <div className='px-3'>
                                    <div key={index} className='bg-white border border-[#f3f3f3] rounded-xl p-4 md:p-6 flex min-w-[210px]'>
                                        <img src={item?.icon} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                        <div>
                                            <p className=''>{item?.title}</p>
                                            <p className='text-[#878787] uppercase'>{item?.symbol}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <Slider {...settingsLTR} className='my-6'>
                            {RowTwo.map((item, index) => (
                                <div className='px-4'>
                                    <div key={index} className='bg-white border border-[#f3f3f3] rounded-xl p-4 md:p-6 flex min-w-[210px]'>
                                        <img src={item?.icon} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                        <div>
                                            <p className=''>{item?.title}</p>
                                            <p className='text-[#878787] uppercase'>{item?.symbol}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <Slider {...settingsRTL} className='my-6'>
                            {RowThree.map((item, index) => (
                                <div className='px-3'>
                                    <div key={index} className='bg-white border border-[#f3f3f3] rounded-xl p-4 md:p-6 flex min-w-[210px]'>
                                        <img src={item?.icon} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                        <div>
                                            <p className=''>{item?.title}</p>
                                            <p className='text-[#878787] uppercase'>{item?.symbol}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <Slider {...settingsLTR} className='my-6'>
                            {RowFour.map((item, index) => (
                                <div className='px-4'>
                                    <div key={index} className='bg-white border border-[#f3f3f3] rounded-xl p-4 md:p-6 flex min-w-[210px]'>
                                        <img src={item?.icon} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                        <div>
                                            <p className=''>{item?.title}</p>
                                            <p className='text-[#878787] uppercase'>{item?.symbol}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <Slider {...settingsRTL} className='my-6'>
                            {RowFive.map((item, index) => (
                                <div className='px-3'>
                                    <div key={index} className='bg-white border border-[#f3f3f3] rounded-xl p-4 md:p-6 flex min-w-[210px]'>
                                        <img src={item?.icon} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                        <div>
                                            <p className=''>{item?.title}</p>
                                            <p className='text-[#878787] uppercase'>{item?.symbol}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className='py-12'>
                    <p className='text-center mx-auto lg:w-[50%] text-4xl md:text-5xl'>And a Treasure Trove of Thousands More!</p>
                </div>
            </div>
        </div>
    )
}
