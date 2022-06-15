class block {


        constructor( Nonce ,hash, prevHash, timestamp = "", data = [], hight) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.prevHash = prevHash; 
        this.hight=hight;
        this.Nonce=Nonce;
        
    }
}
