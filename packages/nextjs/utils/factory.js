import web3 from './web3';
import DocuChainApprove from '../../hardhat/artifacts/contracts/DocuChainApprove.sol/DocuChainApprove.json';

const instance = new web3.eth.Contract(
    DocuChainApprove.abi,
    '0xec79e3175b63a295fe1df2f2d5c8454a66fabcf6'
);

export default instance;