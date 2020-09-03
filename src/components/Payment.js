import React, { Component } from "react";
import PayPalBtn from "./PaymentButton";

class PaymentScreen extends Component {
  paymentHandler = (details, data) => {
    /** Here you can call your backend API
        endpoint and update the database */
    console.log(details, data);
  };
  render() {
    return (
      <div>
        <div>Online Payment Demo</div>
        <PayPalBtn
          amount={200}
          currency={"USD"}
          onSuccess={this.paymentHandler}
        />
      </div>
    );
  }
}

export default PaymentScreen;
