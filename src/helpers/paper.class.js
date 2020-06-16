import Base from './Base';
import PaperArifacts from '../artifacts/Paper.json'


export default class Paper extends Base{

	  constructor (web3, contract, sender, privateKey){
        super();
        this.sender = sender;
        this.web3 = web3;
        this.privateKey = privateKey;
        this.abi = PaperArifacts.abi;
        this.paper = new web3.eth.Contract(this.abi, contract);	
   	}

   	async getPersonGrade(){
   		return await new Promise(async (resolve) => {
   			const Paper = this.paper;
   			const instance = await Paper.methods.current();
   			let date = await Base.prototype.call(instance);
        const getValue = await Paper.methods.grades(date);
        let res = Base.prototype.call(getValue);
   			resolve(res);
   		})
   	}

   	async getGradeFromDate(date){
   		return await new Promise(async (resolve) => {
   			const instance = await this.paper.methods.grades(date);
   			let res = await Base.prototype.call(instance);
   			resolve(res);
   		})
   	}

   	setChanges(date, _W, _L, _R){
      console.log(date)
   		return new Promise(async (resolve) => {
   			const instance = await this.paper.methods.setChanges(date, _W, _L, _R);
        await Base.prototype.createOpt(this.web3, this.sender, this.paper.options.address, instance);
        let sign = await Base.prototype.signTransaction(this.web3, this.privateKey);
        Base.prototype.sendSignedTransaction(this.web3, sign.rawTransaction)
        resolve({txHash: sign.transactionHash});
   		})
   	}
}