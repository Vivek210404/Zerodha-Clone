import React from 'react'
import Hero from './Hero';
import AccountTypes from './AccountTypes';
import DematAccount from './DematAccount';
import InvestmentOptions from './InvestmentOptions';
import DematBenefits from './DematBenefits';
import FAQs from './FAQ';

function Signup() {
    return ( 
        <>
        <Hero />
        <InvestmentOptions />
        <DematAccount />
        <DematBenefits />
        <AccountTypes/>
        <FAQs />
        </>
     );
}

export default Signup;