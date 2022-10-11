const ethers = require("ethers");

const INFURA_ID = "12e5f8dbb209428a801f6e4a7770fdb8";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ADDRESS = "0x28C6c06298d514Db089934071355E5743bf21d60";

const main = async () => {
  const balance = await provider.getBalance(ADDRESS);
  console.log(
    `\nETH Balance of ${ADDRESS} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
};

main();
