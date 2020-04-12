import {Parser} from 'acorn'

//acorn 注入插件
function acornApe(Parser:any): any{
    return class extends Parser {
        parse() {
            const ast = super.parse()
            console.log(ast.body)
            return this.combine(ast)   
        }
        combine(ast:Object) {
            return ast
        }
    }
  }

export default Parser.extend(acornApe)