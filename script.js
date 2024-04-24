numberOne = Number(prompt('Digite o primeiro número'))
numberTwo = Number(prompt('Digite o segundo número'))

if(!isNaN(numberOne) && !isNaN(numberTwo)) {
  const sum = numberOne + numberTwo
  const sub = numberOne - numberTwo
  const multi = numberOne * numberTwo
  const div = numberOne / numberTwo
  const rest = numberOne % numberTwo 

  alert(`O resultado da soma dos dois números é ${sum}`)
  alert(`O resultado da subtração dos dois números é ${sub}`)
  alert(`O resultado da multiplicação dos dois números é ${multi}`)
  alert(`O resultado da divisão dos dois números é ${div}`)
  alert(`O resto da divisão dos dois números é ${rest}`)

  if(sum % 2 !== 0) {
    alert(`A soma dos dois números (${sum}) é ímpar.`);
  }else {
    alert(`A soma dos dois números (${sum}) não é par.`);
  }
  if(numberOne === numberTwo) {
    alert(`Os dois números inseridos são iguais, número 01: ${numberOne} e número 02: ${numberTwo}`)
  }
} else {
  alert("Por favor, digite números válidos, atualize a página")
}