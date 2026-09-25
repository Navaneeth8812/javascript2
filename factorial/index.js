let i=0;
function fact(n){
    if(n==0 || n==1){
        return 1
    }
    else if(n<0){
        console.log("the value must be greater than 0")
        return false
    }
    else{
        return n*fact(n-1);
    }
}
result = fact(9)
console.log(result)




