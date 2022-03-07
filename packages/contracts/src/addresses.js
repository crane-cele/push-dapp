// This address points to a dummy ERC20 contract deployed on Ethereum Mainnet,
// Goerli, Kovan, Rinkeby and Ropsten. Replace it with your smart contracts.
const addresses = {
  ceaErc20: "0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815",
  epnscore: "0x628E3191dE173d40b9fcDc171557958267c475a6",
  epnsEthComm: "0x99047d328496C14016222a998564B334A4A5723f", // the ropsten core contract
  epnsPolyComm: "0xD2ee1e96e3592d5945dDc1808834d7EE67400823", // the ploygon comm contract
  dai: "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd", //address for dai
  aDai: "0xcB1Fe6F440c49E9290c3eb7f158534c2dC374201",
  staking: "0xd9218bb2a7Ff0131555A9b6F179fF5103a27a286",
  yieldFarmPUSH: "0xFe0bcF750d4042480943CC8bA818CA3482DDf691",
  yieldFarmLP: "0xE65fE4a8BCEB8A71D6A8D06dF2D91a9637081c61",
  epnsToken: "0x38c4A4C7fa26eA48E34C45a9F6bDb5DA3f599c55",
  epnsLPToken: "0x69E12FfD1170d851c096FfEC6A8eF27D26D96c0f",
  rockstar: "0xCD1B6C8DDB9A735AA5961Ab4aa5B513fba23A3a3", //ropsten address
  batchMintNFT: "0x9A20272669BBAa6254358ba4BB0520fFc813691C", //ropsten address
  NFTRewards: "0x1f4CA0b2B0541b942A440A3f6673883eEacb2cb3", //ropsten address
  distributor: "0x4Cd9Fe2E0acb9BC28fA51106b99825bd7a02309e", //ropsten address
  uniswapV2Router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  WETHAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // mainnet address
  USDTAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7", // mainnet address
};
export default addresses;