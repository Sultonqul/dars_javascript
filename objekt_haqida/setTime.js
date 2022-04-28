let timer = {
    start(){
        this.interval = setInterval(() => {
            console.clear()
            const date1 = new Date();
            let d = date1.getHours()
            let dd = date1.getMinutes()
            let ddd = date1.getSeconds()
            console.log(`${d}:${dd}:${ddd}`);
            }, 1000);
    },
    stop(a){
        setTimeout(() => {
            clearInterval( this.interval )
        }, a);
    }
}
timer.start()
timer.stop(4000)