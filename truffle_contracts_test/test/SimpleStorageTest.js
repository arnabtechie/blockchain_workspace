const SimpleStorage = artifacts.require('SimpleStorage');
const SetName = artifacts.require('SetName');

contract('SimpleStorage', (accounts) => {
  it('should set and get data', async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set data
    await simpleStorageInstance.setData(42, { from: accounts[0] });

    // Get data
    const storedData = await simpleStorageInstance.getData();

    assert.equal(storedData, 42, 'Data was not set correctly');
  });
});

contract('SetName', (accounts) => {
  it('should set and get any name', async () => {
    const setNameInstance = await SetName.deployed();

    // Set data
    await setNameInstance.setData('Arnab Banerjee', { from: accounts[0] });

    // Get data
    const storedData = await setNameInstance.getData();

    assert.equal(storedData, 'Arnab Banerjee', 'Data was not set correctly');
  });
});
