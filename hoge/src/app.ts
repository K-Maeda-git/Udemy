class Check {
    isSkip:boolean;
    minutes:number;
    now:Date;
    now_ms:number;
    now_mm:number;
    set:Date;
    set_ms:number;
    set_mm:number;
    constructor() {
        this.isSkip = false;
        this.minutes = 1000 * 60;
        this.now = new Date();
        this.now_ms = this.now.getTime();
        this.now_mm = this.now_ms / this.minutes;
        this.set = new Date(2020, 6, 20, 16, 45);
        this.set_ms = this.set.getTime();
        this.set_mm = this.set_ms / this.minutes;
    }

    logcheck(){
        console.log(this.isSkip);
        console.log(this.minutes);
        console.log(this.now);
        console.log(this.now_ms);
        console.log(this.now_mm);
        console.log(this.set);
        console.log(this.set_ms);
        console.log(this.set_mm);
    }
    
}
let hoge:Check
hoge = new Check();
hoge.logcheck();