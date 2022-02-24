
type Operator = '+' | '-' | '*' | '/';

function main():void{

   
}

function calculate(firstNum: number, operator: Operator, secondNum: number){
    switch(operator){
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    } //because of Operator type i don't need default
}


function isOperator(operator: string): boolean{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true

        default: return false;
    }
}

function isNumber( str: string): boolean{
    const maybeNum = parseInt(str);
    const isNum:boolean = !isNaN(maybeNum); 
    return isNum;
}


main();