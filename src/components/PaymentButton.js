import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
  render() {
    const { amount, onSuccess, currency } = this.props;
    return (
      <PayPalButton
        amount={amount}
        onSuccess={(details, data) => {
          /*         setLoading(true);
          // save order
          saveOrder(details); */
          console.log(data);
        }}
        options={{
          clientId:
            "AWFuo1hpl90vHJPtdhwcbfVOTBBHVp_Q-5kKTokyMt1s_JrKP6jNLD0SrIdXPNyCwgRwYVvNsCXwkMw1",
          currency: "USD",
        }}
      />
    );
  }
}
export default PayPalBtn;
