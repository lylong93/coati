//解析模板
const regexStart = /\<(?!\/).*?\>/
const regexEnd = /<\/.*?>/

const nomel = /.*?(?=\<)/

const arr:Array<string> = []

function discern(params: any): Object {
    console.log('oooo',params)
    let body: any = params.body.pop()
    let s: string = body.body.body.pop().argument.value
    console.log(s)
    let html = s.replace(/\n/g, "")

    const len = html.length
    let match = html.match(regexStart)

    function step(num: number) {
        html = html.substring(num)
    }
    function tan() {
        while (html) {
            if (html.match(regexStart) && html.match(regexStart).index === 0) {
                arr.push(html.match(regexStart)[0])
                step(html.match(regexStart)[0].length)
                continue
            }

            if (html.match(regexEnd) && html.match(regexEnd).index === 0) {
                arr.push(html.match(regexEnd)[0])
                step(html.match(regexEnd)[0].length)
                continue
            }

            if (html.match(nomel) && html.match(nomel).index === 0) {
                arr.push(html.match(nomel)[0])
                step(html.match(nomel)[0].length)
                continue
            }
        }
    }
    tan()

    console.log('arr',arr)
    return {}
}



export default discern