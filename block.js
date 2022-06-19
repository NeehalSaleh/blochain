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


 }
}
export default block;
