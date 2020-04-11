// import acorn from 'acorn'
const acorn = requier('acorn')
class Parser {
    constructor (input) {
        this.input =  input
        this.step = 0
    }
    parse() {
        let code = 'const num =1 '
        let sta = acorn.parse(code)
        console.log(sta)
    }
}
export default Parser