class Joint {
    constructor() {

    }
    chageVal(t,value) {
        console.log(t)
        document.getElementById(t).innerHTML = value
    }
}

export default new Joint()