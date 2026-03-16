const balance = document.getElementById("balance")
const money_plus = document.getElementById("money-plus")
const money_minus = document.getElementById("money-minus")
const list = document.getElementById("list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")

let transactions = []

function updateValues(){

const amounts = transactions.map(t => t.amount)

const total = amounts.reduce((acc,item)=>acc+item,0)

const income = amounts
.filter(item => item>0)
.reduce((acc,item)=>acc+item,0)

const expense = amounts
.filter(item => item<0)
.reduce((acc,item)=>acc+item,0)

balance.innerText = `$${total}`
money_plus.innerText = `$${income}`
money_minus.innerText = `$${expense}`
}

function addTransaction(e){

e.preventDefault()

const transaction = {
text:text.value,
amount:+amount.value
}

transactions.push(transaction)

addTransactionDOM(transaction)

updateValues()

text.value=""
amount.value=""
}

function addTransactionDOM(transaction){

const li = document.createElement("li")

li.innerHTML = `
${transaction.text}
<span>${transaction.amount}</span>
`

list.appendChild(li)
}

form.addEventListener("submit",addTransaction)