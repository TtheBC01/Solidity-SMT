import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei, keccak256 } from "viem";

describe("SMT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySMT() {


    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const SMT = await hre.viem.deployContract("SMT", [4]);

    const publicClient = await hre.viem.getPublicClient();

    return {
      SMT,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should set a leaf", async function () {
      const { SMT, owner } = await loadFixture(deploySMT);
      await SMT.write.addLeaf(["Hello"]);
      await SMT.write.addLeaf(["World"]);
      await SMT.write.addLeaf(["!"]);
    });
  });

});
