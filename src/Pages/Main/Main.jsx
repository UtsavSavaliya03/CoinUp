import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import SafeguardComponent from '../../Components/SafeguardComponent.jsx';
import Features from '../../Components/Features.jsx';
import SupportedChains from '../../Components/SupportedChains.jsx';
import AboutApp from '../../Components/AboutApp.jsx';
import CryptoCurrencies from '../../Components/CryptoCurrencies.jsx';
import BulletproofingInvestments from '../../Components/BulletproofingInvestments.jsx';
import Partners from '../../Components/Partners.jsx';
import CommunityMembers from '../../Components/CommunityMembers.jsx';
import Faqs from '../../Components/Faqs.jsx';
import Downloads from '../../Components/Downloads.jsx';
import HelpAndAssistance from '../../Components/HelpAndAssistance.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

export default function MAin() {

  return (
    <div className='mb-12'>
      <Header />

      <SafeguardComponent />
      <Features />
      <SupportedChains />
      <AboutApp />
      <CryptoCurrencies />
      <BulletproofingInvestments />
      <Partners />
      <CommunityMembers />
      <Faqs />
      <Downloads />
      <HelpAndAssistance />

      <Footer />
    </div>
  )
}
