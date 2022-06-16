import sha256 from 'crypto-js/sha256.js';
class block {


    constructor( hight,timestamp, data, prevHash='') {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calchash();
    this.prevHash = prevHash; 
    this.hight=hight;
    this.nonce=0;
    this.numberOfGuesses = 0; 

}

calchash(){
    return  sha256(this.hight+ this.prevHash+ this.timestamp+ JSON.stringify(this.data)+this.nonce).toString();
}
mine(difficult) {


    while (this.hash.substring(0, difficult)!=="".padStart(difficult, "0")) {
        this.nonce++;
     this.numberOfGuesses++;
        this.hash = this.calchash();
    }
    console.log("block mined:" + this.hash);
 }
}

class blockchain{

constructor() {

    this.chain = [this.genesis()];
    this.difficult=4;
}
genesis(){
    return new block(0,"01/15/2022","this is the first block","0");
}

getLastBlock() {
    return this.chain[this.chain.length - 1];
}

addBlock(block) {

    block.prevHash = this.getLastBlock().hash;

    block.mine(this.difficult);
    this.chain.push(block);
}
isValid(blockchain = this) {
   
    for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = blockchain.chain[i];
        const prevHash = blockchain.chain[i-1];

 
        if (currentBlock.hash !== currentBlock.calchash() ) {
            return false;
        }
        if(currentBlock.prevHash !== prevHash.hash){
            return false;
        }
    }

    return true;


}

}


let neehal = new blockchain();
console.log('mining block 1:');
neehal.addBlock(new block(1, "1/6/8888", { amount :4}));
console.log('mining block 2:');
neehal.addBlock(new block(2, "1/6/8888", {amoun :60}));
console.log();
