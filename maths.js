class Calculator{
    constructor(previousOperandTextElement,  currentOperandTextElement)
    {
       this.previousOperandTextElement = previousOperandTextElement
       this.currentOperandTextElement = currentOperandTextElement
    }
    clear(){

    }
    delete(){

    }

}








const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElementButton = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElementButton = document.querySelectorAll('[data-current-operand]')
