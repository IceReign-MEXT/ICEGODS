const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying IceGods Empire to Base Mainnet...");
  
  const IceGods = await hre.ethers.deployContract("IceGodsEmpire");
  await IceGods.waitForDeployment();

  console.log("💎 SUCCESS! Contract Address:", await IceGods.getAddress());
  console.log("💰 30 Billion $ICEG tokens are now in your control.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
