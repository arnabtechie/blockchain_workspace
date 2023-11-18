// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract PaymentDetails {
  struct Payment {
    string status;
    uint256 paymentId;
    address payer;
    uint256 amount;
    uint256 timestamp;
  }

  Payment[] public payments;

  event PaymentCreated(
    string status,
    uint256 paymentId,
    address payer,
    uint256 amount,
    uint256 timestamp
  );

  function createPayment(
    address _payer,
    uint256 _amount
  ) external returns (Payment memory) {
    uint256 paymentId = payments.length;
    uint256 timestamp = block.timestamp;

    payments.push(Payment('success', paymentId, _payer, _amount, timestamp));

    emit PaymentCreated('success', paymentId, _payer, _amount, timestamp);
    return
      Payment({
        status: 'success',
        paymentId: paymentId,
        payer: _payer,
        amount: _amount,
        timestamp: timestamp
      });
  }

  function getPayment(
    uint256 _paymentId
  ) external view returns (uint256, address, uint256, uint256) {
    require(_paymentId < payments.length, 'Payment ID does not exist');

    Payment memory payment = payments[_paymentId];
    return (
      payment.paymentId,
      payment.payer,
      payment.amount,
      payment.timestamp
    );
  }

  function updatePaymentAmount(
    uint256 _paymentId,
    uint256 _newAmount
  ) external {
    require(_paymentId < payments.length, 'Payment ID does not exist');
    require(_newAmount > 0, 'New amount must be greater than 0');

    payments[_paymentId].amount = _newAmount;
  }

  function deletePayment(uint256 _paymentId) external {
    require(_paymentId < payments.length, 'Payment ID does not exist');

    delete payments[_paymentId];
  }
}
