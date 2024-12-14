// Simulated user data (userId, name, and balance)
const users = {
    "123456": { name: "Muskan Ghaffar", balance: 101500 },
    "678910": { name: "Iqra naz", balance: 112000 },
    "111222": { name: "Zoya Khan", balance: 50500 },
  };
  
  let currentUser = null;  // To store the current user after inserting the card
  
  // Function to insert the card and show the ATM functions
  function insertCard() {
    const cardNumber = document.getElementById("cardNumber").value;
  
    // Check if the card number exists in the user database
    if (users[cardNumber]) {
      currentUser = users[cardNumber];
      document.getElementById("screen").innerText = `Welcome, ${currentUser.name}!`;
      document.getElementById("atm-functions").style.display = "block";
      document.getElementById("user-info").innerHTML = `Hello, ${currentUser.name}. Your current balance is $${currentUser.balance}`;
      document.getElementById("cardNumber").disabled = true;
      document.querySelector("button").disabled = true;  // Disable the insert card button
    } else {
      document.getElementById("screen").innerText = "Invalid card number. Please try again.";
    }
  }
  
  // Function to check balance
  function checkBalance() {
    document.getElementById("screen").innerText = "Checking balance...";
    setTimeout(() => {
      document.getElementById("screen").innerText = `Your current balance is: $${currentUser.balance}`;
    }, 1000);
  }
  
  // Function to withdraw money
  function withdrawMoney() {
    const amount = parseFloat(document.getElementById("amount").value);
    
    if (amount && amount <= currentUser.balance) {
      currentUser.balance -= amount;
      document.getElementById("screen").innerText = `Withdrawing $${amount}...`;
      setTimeout(() => {
        document.getElementById("screen").innerText = `Withdrawal Successful. Remaining balance: $${currentUser.balance}`;
        document.getElementById("remaining-balance-value").innerText = `$${currentUser.balance}`;
        document.getElementById("amount").value = "";  // Clear the input field
        document.getElementById("user-info").innerHTML = `Hello, ${currentUser.name}. Your current balance is $${currentUser.balance}`;
      }, 1000);
    } else if (amount > currentUser.balance) {
      document.getElementById("screen").innerText = "Insufficient balance!";
    } else {
      document.getElementById("screen").innerText = "Please enter a valid amount.";
    }
  }
  