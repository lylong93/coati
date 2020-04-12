
import Proto from './proto'

class Ape {
    input:any
    step:any
    constructor (input:any) {
        this.input  =  input
        this.step = 0
    }
    parse() {
        return Proto.parse(this.input)
    }
}
export default Ape