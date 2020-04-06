class Rember {
    constructor() {
        this.bers = []
    }
    save(stber) {
        this.bers.push(stber)
    }
    extract(){
        return 'test'
    }
}

export default new Rember()