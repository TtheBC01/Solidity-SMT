import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  contractSizer: {
    runOnCompile: true, // Optional: Run contract sizing automatically on compile
  },
  gasReporter: {
    currency: 'USD',
    L1: "base",
  },
};

export default config;
