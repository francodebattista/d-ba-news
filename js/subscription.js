

    var space =" ";
window.onload = function() {
    // ***** check full name *****
   /* var inputName = document.getElementById("new-name");
    inputName.addEventListener('blur', checkName);
    inputName.addEventListener('blur', checkSpaceName);
    function checkName (a) {
        a.preventDefault;
        var name = inputName.value;
        if(name.length < 6){
            return document.getElementById("nameError").classList.remove("no-error");
        }
        return true
    }
    function checkSpaceName () {
        var name =inputName.value;
        var myRegex = /\s/;
        var result = myRegex.test(name);
        if (result != true) {
            return document.getElementById("nameError").classList.remove("no-error");
        }
    }
    inputName.addEventListener('focus', checkNameFocus);
    inputName.addEventListener('focus', checkSpaceNameFocus);
    function checkNameFocus (a) {
        a.preventDefault
        var name = inputName.value;
        if(name.length < 6){
            return document.getElementById("nameError").classList.add("no-error")
        }
        return true
    }
    function checkSpaceNameFocus () {
        var name =inputName.value
        var myRegex = /\s/
        var result = myRegex.test(name);
        if (result != true) {
            return document.getElementById("nameError").classList.add("no-error")
        } else {
        }
    }
*/

    // ***** check email *****
    // VARIABLE A CAMBIAR email
    var inputEmail = document.getElementById("email");
    inputEmail.addEventListener("blur",checkEmailName)
    inputEmail.addEventListener("blur",checkMailArroba)
    function checkEmailName () {
        var mail =inputEmail.value;
        var myRegex = /\s/;
        var result = myRegex.test(mail);
        if (result == true) {
            return document.getElementById("emailerror").classList.remove("no-error")
        }
    }
    function checkMailArroba () {
        var mail =inputEmail.value
        var myRegex = /@/
        var myRegexOne = /.com/
        var result = myRegex.test(mail);
        var resultOne = myRegexOne.test(mail);
        if (result != true) {
            return document.getElementById("emailerror").classList.remove("no-error")
        }
        if (resultOne != true) {
            return document.getElementById("emailerror").classList.remove("no-error")
        }
    }
    inputEmail.addEventListener("focus",checkEmailNameOne)
    inputEmail.addEventListener("focus",checkMailArrobaOne)
    function checkMailArrobaOne () {
        var mail =inputEmail.value
        var myRegex = /@/
        var myRegexTwo = /.com/
        var result = myRegex.test(mail);
        var resultTwo = myRegexTwo.test(mail)
        if (result != true) {
            return document.getElementById("emailerror").classList.add("no-error")
        }
        if (resultTwo != true) {
            return document.getElementById("emailerror").classList.add("no-error")
        }
    }
    function checkEmailNameOne () {
        var mail =inputEmail.value;
        var myRegex = /\s/;
        var result = myRegex.test(mail);
        if (result == true) {
            return document.getElementById("emailerror").classList.add("no-error");
        }
    }

    // ***** check pasword *****
    // VARIABLE to change pasword
    var inputPassword = document.getElementById("password");
    inputPassword.addEventListener("blur",passwordCheckNumbers)
    function passwordCheckNumbers(a){
        var password = inputPassword.value;
        var myRegex = /[0-9]/;
        var myRegexOne = /[a-z]/ig;
        var myRegexTwo = /\s/;
        var result = myRegex.test(password);
        var resultOne = myRegexOne.test(password);
        var resultTwo = myRegexTwo.test(password)
        if (password.length < 8){
            return document.getElementById("passwordError").classList.remove("no-error")
        }
        if (result!=true) {
            return document.getElementById("passwordError").classList.remove("no-error")        
        }
        if (resultOne!=true) {
            return document.getElementById("passwordError").classList.remove("no-error")        
        }
        if (resultTwo==true) {
            return document.getElementById("passwordError").classList.remove("no-error")        
        }
    }

    inputPassword.addEventListener("focus",passwordCheckNumbersOne)
    function passwordCheckNumbersOne(a){
        var password = inputPassword.value;
        var myRegex = /[0-9]/;
        var myRegexOne = /[a-z]/ig;
        var myRegexTwo = /\s/;
        var result = myRegex.test(password);
        var resultOne = myRegexOne.test(password);
        var resultTwo = myRegexTwo.test(password)
        if (password.length < 8){
            return document.getElementById("passwordError").classList.add("no-error")
        }
        if (result!=true) {
            return document.getElementById("passwordError").classList.add("no-error")        
        }
        if (resultOne!=true) {
            return document.getElementById("passwordError").classList.add("no-error")        
        }
        if (resultTwo==true) {
            return document.getElementById("passwordError").classList.add("no-error")        
        }
    }

    // ***** check repeatPasword *****
    // VARIABLE to change repeatPasword
    var inputRepeatPassword = document.getElementById("repeatPassword")
    inputRepeatPassword.addEventListener("blur",checkPassword)
    function checkPassword (a) {
        var password = inputPassword.value;
        var RepeatPassword = inputRepeatPassword.value;
        if( password != RepeatPassword) {
            return document.getElementById("repeatPasswordError").classList.remove("no-error")         
        }
    }
    inputRepeatPassword.addEventListener("focus",checkPasswordOne)
    function checkPasswordOne (a) {
        var password = inputPassword.value;
        var RepeatPassword = inputRepeatPassword.value
        if( password != RepeatPassword) {
            return document.getElementById("repeatPasswordError").classList.add("no-error")         
        }
    }

}
/*
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
*/