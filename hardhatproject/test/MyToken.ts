import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { getCreateAddress } from "viem";
import {
  createPublicClient,
  createWalletClient,
  http,
  parseUnits,
  getContract,
  getAddress,
} from 'viem';


describe("MyToken", async function () {

  const { viem,networkHelpers} = await network.connect()
  async function deployTokenFixture() {
    const [owner, alice, bob] = await viem.getWalletClients();
    const initialSupply = parseUnits("1000000", 18);

    const Token = await viem.deployContract("MyToken", [initialSupply]);
    //const token = await Token.getPublicClient(initialSupply);

    //await token.waitForDeployment();
    return { Token, owner, alice, bob, initialSupply };

  }

  describe("Deployment", function () {
    it("Sets name, symbol, and decimals correctly", async function () {
      const { Token, owner, initialSupply } = await networkHelpers.loadFixture(deployTokenFixture);
      //console.log(token);

      assert.equal(await Token.read.totalSupply(), initialSupply);
    });
  });
});