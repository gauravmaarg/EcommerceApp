import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51J9XfqSInwcTtPInXr5oPXSVJI8PyH4WjMs481r7bnHDOK0DR29pYcWbjkEYx8fiGY11pmDxuBQK8Ee8FicSOYUu00om8u0JJD';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='SHOP CART LTD.'
        billingAddress
        shippingAddress
        // image='https://svgshare.com/i/CUz.svg'
        image= 'https://mma.prnewswire.com/media/1232343/Coforge_Logo.jpg?p=publish&w=200'
        description ={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;