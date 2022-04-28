class RGB {
    R
    G 
    B 
    constructor(red, green, blue){
        this.R = red
        this.G = green
        this.B = blue 
    }
    get qizil(){
        let obj = {R:this.R}
        return obj
    }
    get yashil(){
        let obj = {G:this.G}
        return obj
    }
    get kok(){
        let obj = {B:this.B}
        return obj
    }
    get getColors(){
        return {R:this.R,G:this.G,B:this.B}
    }
    set red(newRed){
        this.R = newRed <= 255 ? newRed : 0
    }
    set green(newRed){
        this.G = newRed <= 255 ? newRed : 0
    }
    set blue(newRed){
        this.B = newRed <= 255 ? newRed : 0
    }
    set setColors(arr){
        this.R = arr[0] <= 255 ? arr[0] : 0
        this.G = arr[1] <= 255 ? arr[1] : 0
        this.B = arr[2] <= 255 ? arr[2] : 0
    }
}

let color = new RGB(124,50,200)
console.log(color);
color.setColors = [120, 50, 256]
console.log(color);
console.log(color.getColors);
console.log(color.qizil);
console.log(color.yashil);
console.log(color.kok);
color.red = 255
console.log(color);
color.green = 155
console.log(color);
color.blue = 355
console.log(color);
