const PaymentDetails = artifacts.require('PaymentDetails');

contract.only('PaymentDetails', (accounts) => {
  it('should set the payment information properly and receive response', async () => {
    const PaymentDetailsInstance = await PaymentDetails.deployed();
    const responseData = await PaymentDetailsInstance.createPayment(
      '0x1234567890123456789012345678901234567890',
      42000,
      { from: accounts[0] }
    );

    console.log(responseData.paymentId);

    // assert.equal(storedData, 42, 'Payment was not set correctly');
  });
});
