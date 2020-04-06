import {parse} from '@babel/parser';

function getParse(fn) {
    const code = fn.toString()
    const ast = parse(code,{sourceType: "module"});
    return ast
}
export default getParse