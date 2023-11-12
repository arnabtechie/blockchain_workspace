const SimpleStorage = artifacts.require('SimpleStorage');
const SetName = artifacts.require('SetName');
const PaymentDetails = artifacts.require('PaymentDetails');

module.exports = (deployer) => {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SetName);
  deployer.deploy(PaymentDetails);
};
