const {ethers} = require("hardhat");

async function main() {
    const nftContract = await ethers.getContractFactory("GameItem");
    const https://eth-rinkeby.alchemyapi.io/v2/_HemJOX7GLAZS3T737zCTWhLW7wtG9ol = await nftContract.deploy();

    console.log("NFT Contract Address:", deployed);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })