// 
// function to ast
//

import Ape from './ape'

const code  = 
`   
let a = 123

function app () {
    let abc 
    return abc
}
`
let o  = new Ape(code).parse()
console.log('o',o)

// export default Ape