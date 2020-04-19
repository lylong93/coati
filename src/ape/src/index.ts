// 
// function to ast
//
import Ape from './ape'

let code  = 
`function app () { 
    return (<div></div>
}
`

// function app () {
//     return <div></div>
// }
// code = app.toString()
console.log(code)


let o  = new Ape(code).parse()

export default Ape 