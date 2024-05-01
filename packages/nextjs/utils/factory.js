import web3 from './web3';
import DocuChainApprove from '../../hardhat/artifacts/contracts/DocuChainApprove.sol/DocuChainApprove.json';

const instance = new web3.eth.Contract(
    DocuChainApprove.abi,
    '0x18ef7f2f2d36362fd5e141e13bd1c56de60caff9'
);

export default instance;