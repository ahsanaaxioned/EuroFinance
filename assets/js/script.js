// global variable declaration start here
const hamburger = document.querySelector(".hamburger"),
    navbar = document.querySelector(".navbar"),
    html = document.querySelector('html'),
    firstName = document.querySelector(".first"),
    lastName= document.querySelector(".last")
    inputGroup = document.querySelector(".input-group")
input = document.querySelector(".input");
nameRegex = /^([a-zA-Z]){3,12}$/;
let counter = 0;
// global variable declaration start here
// hambuger function  start here
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    html.classList.toggle("html")
});
// hambuger function  end here
function validation(inputName,regex){
    const str = inputName.value;
if(str ==""){
    spanError.classList.add("input-span");
    spanError.innerText="please eneter a name"
}
else if(!regex.test(str) && str.length<3){
    spanError.classList.add("input-span");
    spanError.innerText="please eneter a valid name and it should be atleast 3 caharacter"
}
else{
    spanError.classList.remove("input-span");
    spanError.innerText=""
}

}
firstName.addEventListener("blur",function(){
    validation(firstName,nameRegex);
});

lastName.addEventListener("blur",function(){
    validation(lastName,nameRegex);
});











// // let parentEle = input.parentElement
// // inputGroup.forEach(function(element,index){
// //     console.log(element.children);
// // })
// function validation(input, errorMsg, regax) {
//     let spanError;
//     if (input.value == "" || !regax.test(input.value)) {
//         const err = document.querySelector('.input-span')
//         if (!err) {

//             spanError = document.createElement("span")
//             spanError.innerText = errorMsg
//             inputGroup.appendChild(spanError);
//             spanError.classList.add("input-span")
//         }

//     } else {
//         spanError.innerText='someting bad input'
//     }


// }


// firstName.addEventListener("focus", function (e) {
//     e.preventDefault()
//     validation(firstName, "*plese eneter a valid first name", nameRegex);
//     // console.warn('focus triger',firstName)
//     // firstName.parentElement
// });
// // console.log( inputt.parentELement);








































