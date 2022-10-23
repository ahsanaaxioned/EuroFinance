// global variable declaration start here
const form = document.querySelector(".form")
    hamburger = document.querySelector(".hamburger"),
    navbar = document.querySelector(".navbar"),
    html = document.querySelector('html'),
    firstName = document.querySelector(".first"),
    lastName = document.querySelector(".last"),
    position = document.querySelector(".position"),
    company = document.querySelector(".company"),
    email = document.querySelector(".email"),
    choose = document.querySelector(".company-type"),
    country = document.querySelector(".country"),
    scrollTop = document.querySelector(".scrollTop-btn"),
    yes = document.querySelector(".yes"),
    no = document.querySelector(".no"),
    nameRegex = /^([a-zA-Z])/,
    emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
// global variable declaration start here
// hambuger function  start here
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    html.classList.toggle("html")
});
// hambuger function  end here
// form submit event start here
form.addEventListener("submit", function (e) {
    e.preventDefault();
    error = document.querySelectorAll(".fail");
    if ((firstName.value) && (lastName.value) && (position.value) && (company.value) && (choose.value) && (country.value) && (email.value) && (yes.checked || no.checked) && (error.length === 0)) {
        alert("Your form has been submitted successfully..!");
        firstName.value = "";
        lastName.value = "";
        position.value = "";
        company.value = "";
        choose.value = "";
        country.value = "";
        yes.checked = false;
        no.checked = false;
    } else {
        validation(firstName, nameRegex);
        validation(lastName, nameRegex);
        validation(position, nameRegex);
        validation(company, nameRegex);
        pick(choose);
        pick(country);
        validation(email, emailRegex);
        checkBox();
    }
});
// form submit event end here
// validation function start here
function validation(input, regex) {
    const inputGroup = input.parentElement,
        spanError = inputGroup.querySelector(".input-span"),
        str = input.value;
    if (str == "") {
        spanError.classList.add("fail");
        inputGroup.classList.add("error");
        spanError.innerText = "*please enter a valid " + input.name;
    }else if (!regex.test(str)) {
        spanError.classList.add("fail");
        inputGroup.classList.add("error");
        spanError.innerText = "*please eneter a valid " + input.name;
    }else if (str.length < 4) {
        spanError.classList.add("fail");
        inputGroup.classList.add("error");
        spanError.innerText = "*it must be atleast 4 character";
    }else {
        spanError.classList.remove("fail");
        inputGroup.classList.add("succes");
        inputGroup.classList.remove("error");
        pick(choose);
    }
};

function pick(optionInput) {
    const opt = optionInput.parentElement,
        spanError = opt.querySelector(".input-span");
    if (optionInput.value == "select") {
        spanError.classList.add("fail");
        spanError.innerText = "*please select a valid option";
    } else {
        spanError.classList.remove("fail");
    }
};
function checkBox() {
    spanError = document.querySelector(".yes-input");
    if ((yes.checked != true) && (no.checked != true)) {
        spanError.classList.add("fail");
        spanError.innerText = "*please select our T&C "
    } else {
        spanError.classList.remove("fail");
        spanError.innerText = "";
        console.log("HI CHECKBOX");
    }
};
// validation function end here
// input blur event start here
firstName.addEventListener("blur", function () {
    validation(firstName, nameRegex);
});

lastName.addEventListener("blur", function () {
    validation(lastName, nameRegex);
});

position.addEventListener("blur", function () {
    validation(position, nameRegex);
});

company.addEventListener("blur", function () {
    validation(company, nameRegex);
});

email.addEventListener("blur", function () {
    validation(email, emailRegex);
});

choose.addEventListener("blur", function () {
    pick(choose);
});

country.addEventListener("blur", function () {
    pick(country);
});
// input blur event start here
// scroll to the top start here
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// scroll to the top end here