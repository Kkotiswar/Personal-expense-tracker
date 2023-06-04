// Array to store income transactions
const incomeTransactions = [];

// Array to store expense transactions
const expenseTransactions = [];

// Form submission event listener
const transactionForm = document.getElementById('transaction-form');
transactionForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const type = document.getElementById('transaction-type').value;
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;

  addTransaction(type, amount, description, date);

  // Reset the form fields after adding the transaction
  transactionForm.reset();
}

function addTransaction(type, amount, description, date) {
  const transaction = {
    type,
    amount,
    description,
    date
  };

  if (type === 'income') {
    incomeTransactions.push(transaction);
  } else if (type === 'expense') {
    expenseTransactions.push(transaction);
  }

  updateTransactionList();
  updateBalance();
}

// Utilizing GitHub Copilot's code suggestion for adding a transaction
function addTransaction(date, category, description, amount) {
  // Code written with the assistance of GitHub Copilot
  const transaction = {
    date,
    category,
    description,
    amount
  };

  // Rest of the code to handle adding the transaction to the data storage
  // ...
}

// Utilizing a code snippet suggested by GitHub Copilot for calculating the balance
function calculateBalance(transactions) {
  // Code snippet provided by GitHub Copilot
  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  // Rest of the code to handle displaying the balance
  // ...
}

// GitHub Copilot suggesting a best practice for error handling
try {
  // Code block where an error might occur
  // ...
} catch (error) {
  // GitHub Copilot suggesting an appropriate error message
  console.error('An error occurred:', error);
}

// Utilizing GitHub Copilot's code suggestion for handling user input
function handleUserInput(event) {
  // Code suggestion from GitHub Copilot to extract input value
  const inputValue = event.target.value;

  // Rest of the code to handle the user input
  // ...
}




function editTransaction(type, amount, description, date, index) {
  if (type === 'income') {
    incomeTransactions[index].amount = amount;
    incomeTransactions[index].description = description;
    incomeTransactions[index].date = date;
  } else if (type === 'expense') {
    expenseTransactions[index].amount = amount;
    expenseTransactions[index].description = description;
    expenseTransactions[index].date = date;
  }

  updateTransactionList();
  updateBalance();
}

function deleteTransaction(type, index) {
  if (type === 'income') {
    incomeTransactions.splice(index, 1);
  } else if (type === 'expense') {
    expenseTransactions.splice(index, 1);
  }

  updateTransactionList();
  updateBalance();
}

function updateTransactionList() {
  const transactionList = document.getElementById('transaction-list');
  transactionList.innerHTML = ''; // Clear the transaction list

  incomeTransactions.forEach((transaction, index) => {
    displayTransaction('income', transaction.amount, transaction.description, transaction.date, index);
  });

  expenseTransactions.forEach((transaction, index) => {
    displayTransaction('expense', transaction.amount, transaction.description, transaction.date, index);
  });
  // Call updateBalance after adding, editing, or deleting a transaction
updateBalance();

}

function displayTransaction(type, amount, description, date, index) {
  const transactionList = document.getElementById('transaction-list');

  const transactionItem = document.createElement('li');
  transactionItem.textContent = `${type}: ${description} - $${amount} (${date})`;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    editTransactionForm(type, amount, description, date, index);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    deleteTransaction(type, index);
  });

  transactionItem.appendChild(editButton);
  transactionItem.appendChild(deleteButton);

  transactionList.appendChild(transactionItem);
  // Call updateBalance after adding, editing, or deleting a transaction
updateBalance();

}

function editTransactionForm(type, amount, description, date, index) {
  document.getElementById('transaction-type').value = type;
  document.getElementById('amount').value = amount;
  document.getElementById('description').value = description;
  document.getElementById('date').value = date;

  const transactionForm = document.getElementById('transaction-form');
  transactionForm.removeEventListener('submit', handleSubmit);

  transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newType = document.getElementById('transaction-type').value;
    const newAmount = document.getElementById('amount').value;
    const newDescription = document.getElementById('description').value;
    const newDate = document.getElementById('date').value;

    editTransaction(newType, newAmount, newDescription, newDate, index);

    transactionForm.reset();
    transactionForm.removeEventListener('submit', handleSubmit);
    transactionForm.addEventListener('submit', handleSubmit);
    // Call updateBalance after adding, editing, or deleting a transaction
updateBalance();

  });
}

function updateBalance() {
  const balanceElement = document.getElementById('balance');
  const incomeTotal = calculateTotal(incomeTransactions);
  const expenseTotal = calculateTotal(expenseTransactions);
  const balance = incomeTotal - expenseTotal;
  balanceElement.textContent = balance.toFixed(2);
}

function calculateTotal(transactions) {
  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    total += parseFloat(transactions[i].amount);
  }

  return total;
}

function calculateTotal(transactions) {
  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    total += parseFloat(transactions[i].amount);
  }

  return total;
}

for (let i = 0; i < 100; i++) {
  const type = i % 2 === 0 ? 'income' : 'expense';
  const amount = Math.floor(Math.random() * 1000) + 1;
  const description = `Transaction ${i + 1}`;
  const date = getRandomDate();

  addTransaction(type, amount, description, date);
}

function getRandomDate() {
  const start = new Date(2023, 0, 1); // Start date (year, month, day)
  const end = new Date(); // Current date
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
}
