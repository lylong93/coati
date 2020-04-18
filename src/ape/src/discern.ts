//解析模板
let regexStart=/\<(?!\/).*?\>/
let regexEnd  =/<\/.*?>/

let nomel = /.*?(?=\<)/

let arr =[]
function discern (params:string) :Object{
    let html = params.replace(/\n/g,"")
    console.log(html)
    console.log(html.match(nomel))
    // return 
    const len = html.length
    let match  = html.match(regexStart)
    // console.log(match[0],match.index)
    function step(num:number) {
        html  = html.substring(num)
    }


    while (html) {
        debugger
        if(html.match(regexStart) && html.match(regexStart).index === 0 ) {
            arr.push(html.match(regexStart)[0])
            step(html.match(regexStart)[0].length)
            continue
        }

        if(html.match(regexEnd) && html.match(regexEnd).index === 0) {
            arr.push(html.match(regexEnd)[0])
            step(html.match(regexEnd)[0].length)
            continue
        }

        if(html.match(nomel)  && html.match(nomel).index === 0) {
            arr.push(html.match(nomel)[0])
            step(html.match(nomel)[0].length)
            continue
        }
    }
    return {}
}



export default discern