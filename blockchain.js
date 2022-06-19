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
   //  نبدا من 1 لان مايحتاج نشيك على الجينسس لأن اول واحد مسوي السلسة متأكد منها اكيدس
    for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = blockchain.chain[i];
        const prevHash = blockchain.chain[i-1];

 
        if (currentBlock.hash !== currentBlock.calchash() ) {
            return false;
        }
        //يتأكد اذا متصلة او لا
        if(currentBlock.prevHash !== prevHash.hash){
            return false;
        }
        
    }

    return true;


}

}

let neehal = new blockchain();

neehal.addBlock(new block(1, "16/06/2022", { amount :4}));

neehal.addBlock(new block(2, "17/06/2022", {amoun :60}));

neehal.addBlock(new block(1, "18/06/2022", { amount :90}));

neehal.addBlock(new block(2, "19/06/2022", {amoun :10000}));

neehal.addBlock(new block(1, "20/06/2022", { amount :200}));

neehal.addBlock(new block(2, "21/06/2022", {amoun :8900}));

neehal.addBlock(new block(1, "22/06/2022", { amount :9820}));

neehal.addBlock(new block(2, "23/06/2022", {amoun :900}));

neehal.addBlock(new block(1, "24/06/2022", { amount :8887}));

neehal.addBlock(new block(2, "25/06/2022", {amoun :8908}));

console.log('is our neehal Blockchain valid or not?'+ neehal.isValid());

console.log(neehal.genesis());

console.log(JSON.stringify(neehal, null , 4));