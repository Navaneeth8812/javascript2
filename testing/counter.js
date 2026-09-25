let i=1;
function numDiv(n){
    for(i;i<100; i++){
        if(n%5==0 && n%3==0){
            console.log("FizzBuzz")
        }
        else if(n%3==0){
            console.log("Fizz")
        }else if(n%5==0){
            console.log("buzz")
        }
    }
}
console.log(numDiv(20))
