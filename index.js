const express = require("express");
const app = express();
const PORT = 8000;
const Web3 = require("web3");

function getWeb3() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:7545")
  );
  return web3;
}

async function getAccounts() {
  try {
    const accounts = await getWeb3().eth.getAccounts();
    console.log(accounts);
    return accounts;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function getGasPrise() {
  try {
    const getGasPrice = await getWeb3().eth.getGasPrice();
    console.log(getGasPrice);
    return getGasPrice;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function getBlock() {
  try {
    const getBlock = await getWeb3().eth.getBlock();
    console.log(getBlock);
    return getBlock;
  } catch (e) {
    console.log(e);
    return e;
  }
}

app.get("/", (req, res) => {
  getAccounts().then((accounts) => {
    res.send(accounts);
  });
});

app.get("/gasprice", (req, res) => {
  getGasPrise().then((gasPrice) => {
    res.send(gasPrice);
  });
});

app.get("/getblock", (req, res) => {
  getBlock().then((block) => {
    res.send(block);
  });
});

app.listen(PORT, () => {
  console.log(`server listen in PORT : ${PORT}`);
});
