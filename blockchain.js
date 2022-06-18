import block from './block.js'
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
neehal.addBlock(new block(1, "16/06/2022", { amount :4}));

console.log('mining block 2:');
neehal.addBlock(new block(2, "17/06/2022", {amoun :60}));

console.log('mining block 3:');
neehal.addBlock(new block(1, "18/06/2022", { amount :90}));

console.log('mining block 4:');
neehal.addBlock(new block(2, "19/06/2022", {amoun :10000}));

console.log('mining block 5:');
neehal.addBlock(new block(1, "20/06/2022", { amount :200}));

console.log('mining block 6:');
neehal.addBlock(new block(2, "21/06/2022", {amoun :8900}));

console.log('mining block 7:');
neehal.addBlock(new block(1, "22/06/2022", { amount :9820}));

console.log('mining block 8:');
neehal.addBlock(new block(2, "23/06/2022", {amoun :900}));

console.log('mining block 9:');
neehal.addBlock(new block(1, "24/06/2022", { amount :8887}));

console.log('mining block 10:');
neehal.addBlock(new block(2, "25/06/2022", {amoun :8908}));
console.log('is our neehal Blockchain valid or not?'+ neehal.isValid());
console.log(neehal.genesis());