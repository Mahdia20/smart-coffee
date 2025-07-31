
setTimeout(() => {
  let username = prompt("Enter your username (admin or user):");
  let password = prompt("Enter your password:");

  if ((username === "admin" || username === "user") && password === "1234") {
    alert("Login successful!");

    let name = prompt("What's your name?");
    let age = parseInt(prompt("How old are you?"));
    let coffeeType = prompt("Choose coffee type: espresso, latte, or cappuccino").toLowerCase();
    let quantity = parseInt(prompt("How many cups do you want?"));

    let pricePerCup;
    if (coffeeType === "espresso") pricePerCup = 2.5;
    else if (coffeeType === "latte") pricePerCup = 3.5;
    else if (coffeeType === "cappuccino") pricePerCup = 4.0;
    else {
      alert("Invalid coffee type. Please refresh and try again.");
      throw "Invalid coffee type";
    }

    let originalTotal = pricePerCup * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
    let finalTotal = originalTotal - discount;

    alert(
      "Hello " + name + "!\n" +
      "You ordered " + quantity + " " + coffeeType + "(s).\n" +
      "Original total: $" + originalTotal.toFixed(2) + "\n" +
      "Discount: $" + discount.toFixed(2) + "\n" +
      "Total after discount: $" + finalTotal.toFixed(2)
    );

    let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));

    let tipAmount = (finalTotal * tipPercent) / 100;
    let totalWithTip = finalTotal + tipAmount;
    let eachPays = totalWithTip / people;

    alert(
      "Tip: $" + tipAmount.toFixed(2) + "\n" +
      "Total with Tip: $" + totalWithTip.toFixed(2) + "\n" +
      "Split between " + people + " people: $" + eachPays.toFixed(2) + " each"
    );

  } else {
    alert("Invalid credentials. Access denied.");
  }
}, 4500);