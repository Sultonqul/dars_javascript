class Timer {
    start(){
        this.a = setInterval(() => {
            console.clear()
            let data = new Date()
            let y = data.getUTCFullYear()
            let yy = data.getMonth()
            let yyy = data.getDay()
            let d = data.getHours()
            let dd = data.getMinutes()
            let ddd = data.getSeconds()
            console.log(`${y}-${yy}-${yyy}  ${d}:${dd}:${ddd}`);
        }, 1000);
    }
    notify(x,y){
            let id = setInterval( ()=>{
                console.clear()
                let data = new Date()
                let d = data.getHours()
                let dd = data.getMinutes()
                let ddd = data.getSeconds()
                console.log(`${d}:${dd}:${ddd}`);
                if(x == `${d}:${dd}`){
                    console.log(y);
                    clearInterval(id)
                    clearInterval(this.a)
                }
                else if( x < `${d}:${dd}`){
                    console.log("Kechikdiz oka");
                    clearInterval(id)
                    clearInterval(this.a)
                }
            },1000)

    }
}
let timer = new Timer()

console.log(timer.start());
console.log(timer.notify('22:5',"tanafus tugadi"));