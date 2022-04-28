class Moshina{
    #nomi
    #rangi
    #narxi
    #tezlik
    constructor(n,r,nr,t) {
        this.#nomi = n
        this.#rangi = r
        this.#narxi = nr
        this.#tezlik = t
    }
    get getFullName(){
        return this.#nomi + ' ' + this.#rangi + ' ' + this.#narxi + ' ' + this.#tezlik
    }
    set setFullName(arr){
        this.#nomi = arr[0]
        this.#rangi = arr[1]
        this.#narxi = arr[2]
        this.#tezlik = arr[3]
    }
}

let nexia = new Moshina('nexia','oq',200,360)
console.log(nexia);
nexia.setFullName = ['Malibu','black','$40000', 360]
console.log(nexia.getFullName);