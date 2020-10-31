
//console.dir (document)
//console.log(document.title)
//document.title = 123
//console.log(document.head);
/*
function myFunction() {
    alert("Thank you for visiting W3Schools!");
  }
  */
 /*
window.onload = function() {
    var fullname = document.getElementById ("fullName")
    console.log(fullname.value);
}
*/

// VARIABLE A CAMBIAR NAME
var name = "Franco ";
// ***** check full name *****
var space =" ";
function checkName (a) {
    if(a.length < 6){
        return "Name: < 7 number";
    }
    for(i=0; i<a.length; i++){
        if (space.indexOf(a.charAt(i),0)!=-1){
           return "Name: Ok";
        }
     }
    return "Name: Have Space"
}
console.log(checkName(name))


// ***** check email *****
// VARIABLE A CAMBIAR email
var email = "fdebattista@gmail.com";
//console.log(email)

var mailArray = []

for (i = 0; i <= email.length-1; i++){
    mailArray.push(email[i]);
    var mailCheckArroba = mailArray.includes("@");
    var mailCheckSpace = mailArray.includes(" ");
}
//console.log(mailArray)

if (mailCheckArroba ===true){
    //console.log("formato mail válido");
} else {
    //console.log("mal formato mail");
}
if (mailCheckSpace ===true){
    //console.log("mal formato mail ");
} else {
    var mail1 = true
    //console.log("formato mail válido");
}
if (mailCheckArroba === mail1 === true){
    console.log("Mail: Correcto");
} else {
    console.log("Mail: Incorrecto");
}


// ***** check pasword *****
// VARIABLE to change pasword
var pasword = "Franco123";

if (pasword.length >= 8){
    var paswordLength = true
    console.log("Password: Ok Cant Carac");
}
    else {
    console.log("Password: must have at least 8 characters");
}

var numbers="0123456789";
function paswordCheckNumbers(a){
   for(i=0; i<a.length; i++){
      if (numbers.indexOf(a.charAt(i),0)!=-1){
         return "Password: Have numbers";
      }
   }
   return "Password: Have no numbers";
}
console.log(paswordCheckNumbers(pasword))


var letters="abcdefghyjklmnñopqrstuvwxyz";
function paswordCheckLetters(a){
    a = a.toLowerCase()
   for(i=0; i<a.length; i++){
      if (letters.indexOf(a.charAt(i),0)!=-1){
         return "Password: Have letters";
      }
   }
   return "Password: Have no letters";
}
console.log(paswordCheckLetters(pasword))


var passwordSpace =" ";
function paswordCheckSpaces(a){
   for(i=0; i<a.length; i++){
      if (passwordSpace.indexOf(a.charAt(i),0)!=-1){
         return "Password: Have Space";
      }
   }
   return "Password: Have no Space";
}
console.log(paswordCheckSpaces(pasword))

// ***** check repeatPasword *****
// VARIABLE to change repeatPasword
var repeatPassword = "Franco123"

function checkPassword (a) {
    pasword = pasword.toLowerCase; // should distingh distinguish upper and lower case?
    a = a.toLowerCase;
    if (a === pasword){
        return "repeatPassword: = Password";
    } else {
        return "repeatPassword: != Password";
    }
}
console.log(checkPassword(repeatPassword));


// ***** check Age *****
// VARIABLE to change Age
var age = 21;

function checkAge (a){
    if(a<18){
        return "Age: <18";
    }
    if (Number.isInteger(a)){
        return "Age: ok";
    }
    return "Age: is not integer";
}
console.log(checkAge(age))

// ***** check Phone Number *****
// VARIABLE to PhoneNumber
var phoneNumber = "451 7367";

function checkhPhoneNumber (a) {
    if(a.length<7){
        return "Phone Number: < 7 number"
    }
    var simbol="()[]{}-_) !·$%&/=?¿^*¨ç|@#¬¡º";
    for(i=0; i<a.length; i++){
        if (simbol.indexOf(a.charAt(i),0)!=-1){
           return "Phone Number: Have simbols";
        }
     }
     return "Phone Number:Ok";
}
console.log(checkhPhoneNumber(phoneNumber))

// ***** check Address *****
// VARIABLE to Address
var address = "Dorrego1 ";

function checkAddressNumbers(a){
   for(i=0; i<a.length; i++){
      if (numbers.indexOf(a.charAt(i),0)!=-1){
         return "Address: Have Numbers";
      }
   }
   return "Address: Have no numbers";
}
console.log(checkAddressNumbers(address))

function checkAddressLetters(a){
    a = a.toLowerCase()
   for(i=0; i<a.length; i++){
      if (letters.indexOf(a.charAt(i),0)!=-1){
         return "Address: Have letters";
      }
   }
   return "Address: Have no letters";
}
console.log(checkAddressLetters(address))



function checkAddressSpace(a){
   for(i=0; i<a.length; i++){
      if (space.indexOf(a.charAt(i),0)!=-1){
         return "Address: Have Space";
      }
   }
   return "Address: Have no Space";
}
console.log(checkAddressSpace(address)); // Check split 

// ***** check City / Town *****
// VARIABLE to city
var city = "Rosario";

function checkCity (a) {
    if(a.length<3){
        return "City / Town: < 3 number";
    }
    return "City / Town: Ok"
}
console.log(checkCity(city))

// ***** check Postal Code *****
// VARIABLE to postalCode
var postalCode = "2000";

function checkPostalCode (a) {
    if(a.length<3){
        return "Postal Code: < 3 number";
    }
    return "Postal Code: Ok"
}
console.log(checkPostalCode(postalCode))

// ***** check DNI *****
// VARIABLE to dni
var dni = "123456789";

function checkDni (a) {
    if(a.length < 7){
        return "DNI: < 7 number";
    }
    if(a.length >8){
        return "DNI: > 8 number";
    }
    return "DNI: Ok"
}
console.log(checkDni(dni))
