function palindrom(x){
  let xReverse = x.toString().split('').reverse().join('')
return  x == xReverse ? true : false
}


palindrom(121)