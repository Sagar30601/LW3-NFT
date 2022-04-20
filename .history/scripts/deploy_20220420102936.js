const {ethers} = require("hardhat");

async function main() {
    const nftContract = await ethers.getContractFactory("GameItem");
    const deployedNFTContract = await nftContract.deploy();

    console.log("NFT Contract ");
}