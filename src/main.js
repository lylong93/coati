import getParse from './parse'
import Rember from './rember'
import Nerve from './nerve'
class Catoi {
    constructor(obj) {
        const {fn,el} = obj
        this.fn = fn
        this.el = el
        this.ast = {}
        this.Rember
        this.Nerve
    }
    parse() {
        let ast = getParse(this.fn)
        this.ast = ast
        // console.log(this.ast)
        let stber  = {
            state:{
                adc:123
            },
            vms:'test',
        }
        //记忆
        this.Rember = Rember
        this.Rember.save(stber)
        //神经
        this.nerve = new Nerve(stber)
        this.nerve.create()
        //挂载
        this.mount() 
        this.watch() 
    }
    mount() {
        let odiv = document.createElement('div')
        odiv.id ='test'
        odiv.innerHTML = '123'
        this.el.appendChild(odiv)
    }
    watch() {
        console.log(this)
    }
}

export default Catoi