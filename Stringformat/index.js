function cleanText(text){
    return text.trim()
}
function capTex(text){
    return text.toUpperCase()
}
function disName(first_name, last_name){
    cleanText(first_name, last_name);
    capTex(first_name, last_name);
}
console.log(disName('navaneeth'))

