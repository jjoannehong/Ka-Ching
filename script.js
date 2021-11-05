
function budgetCalc(){
  var total = document.getElementById("total").value;
  var h = document.getElementById("h").value;
  var u = document.getElementById("u").value;
  var f = document.getElementById("f").value;
  var p = document.getElementById("p").value;
  var t = document.getElementById("t").value;
  var d = document.getElementById("d").value;
  var s = document.getElementById("s").value;
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  
  one.innerHTML = "$" + total, 
  two.innerHTML = "$" + h,
  three.innerHTML = "$" + u,
  four.innerHTML =  "$" + f,
  five.innerHTML = "$" + p,
  six.innerHTML = "$" + t,
  seven.innerHTML = "$" + d,
  eight.innerHTML = "$" + s;

}

 function newElement() {
  var spent = document.getElementById("spent").value;
  var date = document.getElementById("date").value;
  var type = document.getElementById("type").value;
  var table = document.getElementById("spendingtable");
  

  if (spent === ''|| date === '' || type === '') {
    alert("You must fill out the form!");
  } else {
    var tr = table.insertRow();
    var td = tr.insertCell();
    var td2 = tr.insertCell();
    var td3 = tr.insertCell();
    var typetext = document.createTextNode(type);
    var spenttext = document.createTextNode("$" + spent);
    var datetext = document.createTextNode(date);
    td.appendChild(typetext);
    td2.appendChild(spenttext);
    td3.appendChild(datetext);
    td.className = "spendtype";
    td2.className = "spendprice";
    td3.className = "spenddate";
    tr.className = "spendrow";
    document.getElementById("spent").value = "";
    document.getElementById("date").value = "";
    document.getElementById("type").value = "";
      if (type == "H") {
        var two = document.getElementById("two");
        var h = document.getElementById("h").value;
        var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        one.innerHTML = "$" + total,
        h = h - spent,
        two.innerHTML = "$" + h;
      }
      if (type == "U") {
        var three = document.getElementById("three");
        var u = document.getElementById("u").value;
        var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        total.innerHTML = "$" + total,
        u = u - spent,
        three.innerHTML = "$" + u;
      }
      if (type == "F") {
        var four = document.getElementById("four");
        var f = document.getElementById("f").value;
        var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        one.innerHTML = "$" + total,
        f = f - spent,
        four.innerHTML = "$" + f;
      }
      if (type == "P") {
        var five = document.getElementById("five");
        var p = document.getElementById("p").value;
        var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        one.innerHTML = "$" + total,
        p = p - spent,
        five.innerHTML = "$" + p;
      }
      if (type == "T") {
        var six = document.getElementById("six");
        var t = document.getElementById("t").value;
       var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        one.innerHTML = "$" + total,
        t = t - spent,
        six.innerHTML = "$" + t;
      }
      if (type == "D") {
        var seven = document.getElementById("seven");
        var d = document.getElementById("d").value;
        var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        one.innerHTML = "$" + total,
        d = d - spent,
        seven.innerHTML = "$" + d;
      }
      if (type == "S") {
        var eight = document.getElementById("eight");
        var s = document.getElementById("s").value;
       var one = document.getElementById("one");
        var total = document.getElementById("one").innerHTML.slice(1);
        total = total - spent,
        one.innerHTML = "$" + total,
        s = s - spent,
        eight.innerHTML = "$" + s;
      }

  }
  
}


// fact generator //
var facts = [
	"The average American household with at least one credit card has nearly $10,700 in credit-card debt.",
	"Credit card interest costs Americans $1,300 every year.",
	"22% of people have more credit card debt than savings.",
	"According to the New York Federal Reserve Bank, Americans have $1.31 trillion in student loan debt.",
	"12% of Americans expect to die in debt.",
	"Although an iPhone can cost you anywhere from $400-$1200, when you factor in monthly service plans and other costs, the true cost of owning an iPhone is likely to cost between $1,000 and $2,500 per year on top of it’s purchase price.",
	"The average American will pay more than $600,000 in interest over the course of a lifetime, according to the website CreditLoan.com.",
	"Only 14% of American workers say that they are 'very confident' that they will have enough money to live comfortably in retirement, according to a 2012 Employee Benefit Research Institute survey.",
	"According to a 2012 Employee Benefit Research Institute survey, 30% of workers said they have less than $1,000 in savings and investments.",
]

function newFact(){
	var randomNumber = Math.floor(Math.random() * (facts.length));document.getElementById('factGen').innerHTML = facts[randomNumber];
 }


// login/signup form

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});