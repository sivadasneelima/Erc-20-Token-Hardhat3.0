import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

//wei
const DEFAULT_SUPPLY = 1_000_000n * 10n ** 18n; // 1 million tokens with 18 decimals


const MyTokenModule = buildModule("MyTokenModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", DEFAULT_SUPPLY);
  const token = m.contract("MyToken", [initialSupply]);
  return {token};

});

export default MyTokenModule;
