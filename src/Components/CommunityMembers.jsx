import React from 'react';

export default function CommunityMembers() {

    const data = [
        { profilePicture: '/Assets/Images/user-1.jpg', name: 'John Anderson', username: '@john.anderson', review: `CoinUp has completely transformed my crypto experience. With their user-friendly interface and top-notch security features, I feel confident managing my investments. I couldn't be happier with my decision to trust CoinUp with my digital assets.`, date: 'Apr 1, 2024' },
        { profilePicture: '/Assets/Images/user-2.jpg', name: 'Michael Smith', username: '@msmith', review: `I've tried several crypto platforms in the past, but none compare to CoinUp. The platform's security measures give me peace of mind knowing that my assets are safe. Plus, the intuitive design makes it easy for me to navigate and execute transactions.`, date: 'Mar 24, 2024' },
        { profilePicture: '/Assets/Images/user-3.jpg', name: 'Emily Chen', username: '@e.chen', review: `CoinUp has exceeded all my expectations. Customer support is excellent. Whenever I've had an issue or a question, the support team has been quick to respond and incredibly helpful. CoinUp has made managing my crypto portfolio a breeze.`, date: 'Mar 16, 2024' },
    ];

    return (
        <div className='md:px-12 px-4 pt-12'>
            <div className='bg-[#272727] p-4 md:p-12 rounded-3xl'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='bg-[#ffffff08] rounded-lg border border-[#ffffff12] h-[40px] w-[40px] flex justify-center items-center cursor-pointer'>
                        <img src='https://framerusercontent.com/images/8A1f9MYFvAuEOKVrNbUIkwc.svg' className='h-5' alt='icon' />
                    </div>
                    <div className='bg-[#ffffff08] rounded-lg border border-[#ffffff12] h-[50px] w-[50px] flex justify-center items-center cursor-pointer'>
                        <img src='https://framerusercontent.com/images/rSLToOxwrWZgiPoNYVB4BhN8.svg' className='h-6' alt='icon' />
                    </div>
                    <div className='bg-[#ffffff08] rounded-lg border border-[#ffffff12] h-[40px] w-[40px] flex justify-center items-center cursor-pointer'>
                        <img src='https://framerusercontent.com/images/8A1f9MYFvAuEOKVrNbUIkwc.svg' className='h-5' alt='icon' />
                    </div>
                </div>

                <p className='mx-auto lg:w-[50%] text-white text-center text-4xl md:text-6xl font-normal mt-8'>Hear from Our Valued Community Members</p>
                <p className='text-[#cfcfcf] lg:w-[45%] mx-auto text-center mt-8'>Discover what our valued community members have to say about their experiences with CoinUp. Read firsthand testimonials that highlight the benefits and satisfaction our platform brings to users.</p>

                <div className='grid lg:grid-cols-3 gap-5 mt-12 lg:mx-8'>
                    {
                        data?.map((item, index) => (
                            <div key={index} className='border border-[#ffffff12] rounded-xl bg-[#ffffff08] p-4 lg:p-8'>
                                <div className='flex justify-between item-start mb-4'>
                                    <div className='flex items-center'>
                                        <img src={item?.profilePicture} className='h-[44px] w-[44px] rounded-full mr-4' alt='icon' />
                                        <div>
                                            <p className='text-white'>{item?.name}</p>
                                            <p className='text-[#878787]'>{item?.username}</p>
                                        </div>
                                    </div>
                                    <img className='opacity-50 hover:opacity-100 duration-300 cursor-pointer h-5 w-5' src='https://framerusercontent.com/images/WLDIglKhbCQZaFLdgtIubYs1NxE.svg' alt='icons' />
                                </div>
                                <p className='text-white'>{item?.review}</p>
                                <p className='text-[#878787] mt-6'>{item?.date}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
