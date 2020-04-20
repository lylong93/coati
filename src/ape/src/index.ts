// 
// function to ast
//
import Ape from './ape'

let code  = 
`function app () { 
    return (<div></div>
}
`

console.log(code)


let o  = new Ape(code).parse()

export default Ape 