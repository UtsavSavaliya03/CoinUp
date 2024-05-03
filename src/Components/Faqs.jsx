import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function Faqs() {

    const data = [
        { id: '0', question: 'Is my personal information safe with CoinUp?', answer: `Absolutely. At CoinUp, we take the security and privacy of our users' personal information very seriously. We employ advanced encryption techniques to protect your data and adhere to strict security protocols to ensure it remains confidential at all times.` },
        { id: '1', question: 'What cryptocurrencies does CoinUp support?', answer: `CoinUp supports a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and many more. You can find a full list of supported cryptocurrencies in your CoinUp account dashboard.` },
        { id: '2', question: 'How can I deposit funds into my CoinUp account?', answer: `To deposit funds into your CoinUp account, simply navigate to the "Receive" section of your account dashboard and follow the instructions provided. You can deposit funds using various methods, including bank transfers, credit/debit cards, and cryptocurrency transfers.` },
        { id: '3', question: 'Can I withdraw my funds from CoinUp at any time?', answer: `Yes, you can withdraw your funds from CoinUp at any time. Simply navigate to the "Send" section of your account dashboard, select the desired withdrawal method, and follow the prompts to initiate the withdrawal process. Please note that withdrawal processing times may vary depending on the chosen method.` },
        { id: '4', question: 'Does CoinUp charge any fees for transactions?', answer: `CoinUp may charge fees for certain transactions, such as deposits, withdrawals, and trades. These fees help cover the costs associated with maintaining our platform and providing you with the best possible service. You can find detailed information about our fees in the "Fees" section of your account dashboard.` },
        { id: '5', question: 'Can I use CoinUp on my mobile device?', answer: `Yes, CoinUp is fully compatible with mobile devices. You can access our platform through your mobile browser or download our mobile app from the App Store or Google Play Store. With CoinUp mobile, you can manage your investments and stay connected to the crypto market on the go.` },
    ];

    const customExpandIcon = ({ isActive }) => (
        <span>
            <div className='w-[30px] h-[30px] rounded-lg bg-black flex justify-center items-center'>
                <img className={`h-4 duration-300 ${isActive ? 'rotate-45' : ''}`} src='https://framerusercontent.com/images/JP915yBZOLgBpZPVNt6EZWidY.svg' alt='icon' />
            </div>
        </span>
    );

    return (
        <div className='my-12 md:py-12 md:px-[140px] px-4'>
            <img className='h-16 mx-auto mb-6' src='https://framerusercontent.com/images/yqBvjq5LkcChWh97DFg9kKbEE1s.svg' alt='img' />
            <p className='text-4xl md:text-5xl text-center font-medium lg:w-[50%] mx-auto'>Your Burning Crypto Questions Answered</p>
            <p className='text-[#4b4b4b] mt-8 text-center lg:w-[45%] mx-auto'>Explore our comprehensive FAQ section to find answers to all your burning questions about cryptocurrency and the CoinUp platform.</p>

            <div className='mt-12 lg:w-[60%] mx-auto'>
                <Collapse bordered={false} expandIcon={customExpandIcon}>
                    {data?.map((faq) => (
                        <Panel header={faq?.question} key={faq?.id} className="custom-panel">
                            <p>{faq?.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    )
}
