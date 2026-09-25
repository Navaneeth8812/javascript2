let data = {
    name:'navaneeth',
    age:21
}
let jsonString = JSON.stringify(data)
let parsed = JSON.parse(jsonString)
console.log(parsed)