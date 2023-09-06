    function nameCheck(name){
    return 'Hello ' + name ;
    }
    console.log(nameCheck('Alina'))

console.log('=========================')

    const numbers = [ 1, 2, 44, 12, 29, 5, 89, 9, 243,]

    function check (array) {
        for (let i = 0; i < array.length; i++){
            if (array[i] > 10){
                console.log(array[i])
            }
        }
    }   
    console.log(check(numbers))
console.log('=========================')    

    function calc (num1, num2, mark ){
        if(mark == '+' ){
            console.log ( num1 + num2 )
        }
        if(mark == '-' ){
            console.log ( num1 - num2 )
        }
        if(mark == '*' ){
            console.log ( num1 * num2 )
        }
        if(mark == '/' ){
            console.log ( num1 / num2 )
        }
    }




    calc (10, 2, '/')



