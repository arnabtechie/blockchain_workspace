const SimpleStorage = artifacts.require('SimpleStorage');
const SetName = artifacts.require('SetName');
const PaymentDetails = artifacts.require('PaymentDetails');
const NFT = artifacts.require('NFT');

module.exports = (deployer) => {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SetName);
  deployer.deploy(PaymentDetails);
  deployer.deploy(NFT);
};
