function calculate(a, b, operator) {    
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                throw new Error("На ноль делить нельзя");
            }   else {
                return a / b;    
            }
         default: 
            throw new Error("Неизвестный оператор");
    }
    }

const result = calculate.apply(null, [2, 3, "+"]);
console.log(result);