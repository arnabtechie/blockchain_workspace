const express = require('express');
const { Web3 } = require('web3');
const cors = require('cors');
const simpleStorageArtifact = require('./build/contracts/SimpleStorage.json');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const web3 = new Web3('http://localhost:8545/');

const simpleStorageAddress = '0x5aAE43De9B894DE36944804f95B2fe7d7fb8d37F';

const simpleStorageABI = [...simpleStorageArtifact.abi];

const simpleStorageContract = new web3.eth.Contract(
  simpleStorageABI,
  simpleStorageAddress
);

app.get('/getSimpleStorageData', async (req, res) => {
  try {
    const data = await simpleStorageContract.methods.getData().call();
    return res.json({ data: data.toString() });
  } catch (error) {
    console.error('Error getting SimpleStorage data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/setSimpleStorageData', async (req, res) => {
  const { newData } = req.body;
  if (!newData) {
    return res.status(400).json({ error: 'Bad Request: newData is required' });
  }

  try {
    const accountAddress = '0x45FF2f74bA6401Fd4b0b1CbDbb45B7e6d8900603';
    const gas = await simpleStorageContract.methods
      .setData(newData)
      .estimateGas();

    const result = await simpleStorageContract.methods.setData(newData).send({
      from: accountAddress,
      gas,
      gasPrice: '1000000000',
    });

    return res.json({ success: true, transactionHash: result.transactionHash });
  } catch (error) {
    console.error('Error setting SimpleStorage data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
