export default class Euler{
  constructor(number){
    this.number = number;
  }


  sumAllNumbers() {
    let numbers = [];
    for(let i = 1; i <= this.number; i++){
      numbers.push(i);
    }
    return numbers;
  }
}

