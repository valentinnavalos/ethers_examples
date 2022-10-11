const ethers = require("ethers");

const INFURA_ID = "12e5f8dbb209428a801f6e4a7770fdb8";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract

const addressToGet = "0x2feb1512183545f48f6b9c5b4ebfcaf49cfca6f3";

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();
  console.log("name: ", name, "\nsymbol:", symbol);
  console.log(`Total Supply: ${totalSupply}`);

  const addressBalance = await contract.balanceOf(addressToGet);
  console.log(`Balance de la cuenta: ${ethers.utils.formatEther(addressBalance)}`);
};

main();
