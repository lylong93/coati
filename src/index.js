import Catoi  from './main'

function App() {
    this.state = {
        adc:123
    }
    this.methods = {
        click:() =>{
           this.state.abc = 456
           console.log(this.state.abc)
        }
    }
    return (
        '<div>{abc}</div>'
    )
}

let mydom = new App()

let app = document.getElementById('app')
let catoi = new Catoi({fn:App,el:app})

catoi.parse()

let obtn = document.getElementById('btn')
obtn.addEventListener('click',function () {
    // mydom.methods.click()//模拟点击
    catoi.nerve.change()
})