import React from 'react'
import Hero from './Hero';
import AccountTypes from './AccountTypes';
import DematAccount from './DematAccount';
import InvestmentOptions from './InvestmentOptions';

function Signup() {
    return ( 
        <>
        <Hero />
        <InvestmentOptions />
        <DematAccount />
        <AccountTypes/>
        </>
     );
}

export default Signup;