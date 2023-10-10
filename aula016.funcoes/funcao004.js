function fatorial(n) {
    let fat = 1 
    for(let c = n; c>1; c --){//contador começa em(n)se for maior que 1 perde -- um numero até chegar no 1
        fat *=c // fatorial recebe fatorial * o contador 
    }
    return fat

}
    console.log(fatorial (5))

//5! = 5 x 4 x 3 x 2 x 1