const user ={
    user1: {name1""}
}




document.addEventListener("DOMContentLoaded", () => {
    // Display the current balance on the first page
    const currentBalanceElement = document.getElementById("currentBalance");
    let currentBalance = 1000; // Replace with real balance logic

    if (currentBalanceElement) {
        currentBalanceElement.textContent = `Current Balance: $${currentBalance.toFixed(2)}`;
    }

    const pinForm = document.getElementById("pinForm");
    if (pinForm) {
        pinForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const pin = document.getElementById("pin").value;
            if (pin.length !== 6) {
                alert("PIN must be 6 digits long.");
                return;
            }
            localStorage.setItem("pin", pin);
            localStorage.setItem("currentBalance", currentBalance);
            window.location.href = "index1.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const remainingBalanceElement = document.getElementById("remainingBalance");
    const remainingBalance = parseFloat(localStorage.getItem("remainingBalance")) || 0;

    if (remainingBalanceElement) {
        remainingBalanceElement.textContent = `Remaining Balance: $${remainingBalance.toFixed(2)}`;
    }
});





// Navigate to the next page and validate inputs
document.addEventListener("DOMContentLoaded", () => {
    const pinForm = document.getElementById("pinForm");
    const amountForm = document.getElementById("amountForm");
    const accountForm = document.getElementById("accountForm");

    if (pinForm) {
        pinForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const pin = document.getElementById("pin").value;
            if (pin.length !== 6) {
                alert("PIN must be 6 digits long.");
                return;
            }
            localStorage.setItem("pin", pin);
            window.location.href = "index1.html";
        });
    }

    if (amountForm) {
        amountForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const amount = document.getElementById("amount").value;
            if (!amount || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }
            localStorage.setItem("amount", amount);
            window.location.href = "index2.html";
        });
    }

    if (accountForm) {
        accountForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const account = document.getElementById("account").value;
            if (!account) {
                alert("Please enter a valid account number.");
                return;
            }
            localStorage.setItem("account", account);
            window.location.href = "succes.html";
        });
    }
});

