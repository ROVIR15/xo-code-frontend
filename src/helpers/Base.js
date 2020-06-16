export default class Base {

    async createOpt(web3, sender, contractAddress, instance, comp = 0){
        let bytecode = instance.encodeABI();
        let nonce = await web3.eth.getTransactionCount(sender)+comp;
        let gas = await instance.estimateGas({from: sender,  gas: 3000000});
        console.log(contractAddress)
        if(!contractAddress) new Error('contract address not detected');
        this.opt = {
            from: sender, 
            to: contractAddress,
            nonce: nonce,
            gas: gas+20000,
            gasPrice: web3.utils.toWei('2', 'gwei'),
            data: bytecode
        }
        console.log(this.opt)
        return this.opt;
    }

    async call(contractMethods){
        return await contractMethods.call();
    }

    async send(contractMethods){
        return contractMethods.send();
    }
    
    async signTransaction(web3, privateKey){
        return await web3.eth.accounts.signTransaction(this.opt, privateKey);
    }

    async sendSignedTransaction(web3, rawTx){
        return await web3.eth.sendSignedTransaction(rawTx)
    }
}