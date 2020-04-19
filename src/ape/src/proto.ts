import {Parser} from 'acorn'
import discern from './discern'
//acorn 注入插件
function acornApe(Parser:any): any{
    return class extends Parser {
        parse() {
            const ast = super.parse()
            return this.combine(ast)   
        }
        combine(ast:string) {
            discern(ast)
            return ast
        }
    }
  }

export default Parser.extend(acornApe)