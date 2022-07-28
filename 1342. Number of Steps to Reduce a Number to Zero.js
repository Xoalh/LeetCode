function reduceToZero(n){
    if(n == 0){return 0}
    let count = 0

do { 
if(n % 2 == 0){n = n / 2}
else{ n = n - 1}
count++
} while ( n > 0)

return count
}


reduceToZero(123)      //   Output: 12)

 
