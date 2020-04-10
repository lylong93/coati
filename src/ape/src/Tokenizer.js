class Token {
    constructor() {
        this.start
        this.end
        this.type
        this.value
    }
}


class Tokenizer {
    constructor() {
        this.tokens = []
    }
    next() {

    }
    pushToken() {
        this.tokens.push(new Token())
    }
}

export default Tokenizer