import Euler from './euler.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



function handleForm(e){
  e.preventDefault();
  const input = parseInt(document.querySelector("#number").value);
  const newNumber = new Euler(input);
  const output = document.querySelector("#output");
  output.innerText = newNumber.sumAllNumbers();
}

const form = document.querySelector("form");
form.addEventListener("submit", handleForm);