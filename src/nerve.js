import Rember from './rember'
import Joint from './joint'
class Nerve {
    constructor(stber) {
        this.taget = stber
        this.cell
       
    }
    create() {
        console.log(Rember)
        const {state} = this.taget
        const handler = {
            get:()=>{
                console.log('get')
            },
            set:(value,tar,neValue)=>{
                console.log(neValue)
                let t = Rember.extract()
                Joint.chageVal(t,neValue)
                return value
            }
        }
        this.cell = new Proxy(state, handler);
    }
    change() {
        this.cell.abc=456
    }
}


export default Nerve