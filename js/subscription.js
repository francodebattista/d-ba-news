


window.onload = function() {
    // ***** check full name *****
    var inputName = document.getElementById("new-name");
    inputName.onblur = checkName;
    function checkName (a) {
        a.preventDefault;
        var name = inputName.value;
        var myRegex = /\s/;
        var result = myRegex.test(name);
        if(name.length < 6){
            return document.getElementById("nameError").classList.remove("no-error");
        }
        if (result != true) {
            return document.getElementById("nameError").classList.remove("no-error");
        }
    }
    inputName.onfocus = checkNameFocus
    function checkNameFocus (a) {
        var name = inputName.value;
        var myRegex = /\s/
        var result = myRegex.test(name);

        if(name.length < 6){
            return document.getElementById("nameError").classList.add("no-error")
        }
        if (result != true) {
            return document.getElementById("nameError").classList.add("no-error")
        }  
    }

    // ***** check email *****
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
    var inputPassword = document.getElementById("password");
    inputPassword.onblur = passwordCheckNumbers;
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
    inputPassword.onfocus = passwordCheckNumbersOne;
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
    var inputRepeatPassword = document.getElementById("repeatPassword")
    inputRepeatPassword.onblur = checkPassword
    function checkPassword (a) {
        var password = inputPassword.value;
        var RepeatPassword = inputRepeatPassword.value;
        if( password != RepeatPassword) {
            return document.getElementById("repeatPasswordError").classList.remove("no-error")         
        }
    }
    inputRepeatPassword.onfocus = checkPasswordOne
    function checkPasswordOne (a) {
        var password = inputPassword.value;
        var RepeatPassword = inputRepeatPassword.value
        if( password != RepeatPassword) {
            return document.getElementById("repeatPasswordError").classList.add("no-error")         
        }
    }



    // ***** check Age *****
    var inputAge = document.getElementById("age");
    inputAge.onblur = checkAge;
    function checkAge (){
        age = inputAge.value;
        if(age<18){
            return document.getElementById("ageError").classList.remove("no-error")         
        }
        if (age % 1 != 0) {
            return document.getElementById("ageError").classList.remove("no-error")         
        }
    }
    inputAge.onfocus = checkAgeOne
    function checkAgeOne (){
        age = inputAge.value;
        if(age<18){
            return document.getElementById("ageError").classList.add("no-error")         
        }
        if (age % 1 != 0) {
            return document.getElementById("ageError").classList.add("no-error")         
        }
    }


    // ***** check Phone Number *****
    var inputPhoneNumber = document.getElementById("phoneNumber");
    inputPhoneNumber.onblur = checkhPhoneNumber
    function checkhPhoneNumber (a) {
        var phoneNumber = inputPhoneNumber.value
        var myregexSimbol = /\W|[a-z]/ig;
        var result = myregexSimbol.test(phoneNumber)
        if(phoneNumber.length<7){
            return document.getElementById("phoneNumberError").classList.remove("no-error")         
        }
       if(result === true){
        return document.getElementById("phoneNumberError").classList.remove("no-error")         
       }
       
    }
    inputPhoneNumber.onfocus = checkhPhoneNumberOne
    function checkhPhoneNumberOne (a) {
        var phoneNumber = inputPhoneNumber.value
        var myregexSimbol = /\W|[a-z]/ig;
        var result = myregexSimbol.test(phoneNumber)
        if(phoneNumber.length<7){
            return document.getElementById("phoneNumberError").classList.add("no-error")         
        }
       if(result === true){
        return document.getElementById("phoneNumberError").classList.add("no-error")         
       }       
    }

    // ***** check Address *****
    var inputAddress = document.getElementById("address");
    inputAddress.onblur = checkAddres
    function checkAddres(){
        var address = inputAddress.value;
        var myRegex = /[0-9]/ig;
        var myRegexOne = /[a-z]/ig;
        var myRegexTwo = /\s/;
        var result = myRegex.test(address);
        var resultOne = myRegexOne.test(address);
        var resultTwo = myRegexTwo.test(address)
        if (address.length < 5){
            return document.getElementById("addressError").classList.remove("no-error")
        }
        if (result != true) {
            return document.getElementById("addressError").classList.remove("no-error")        
        }
        if (resultOne != true) {
            return document.getElementById("addressError").classList.remove("no-error")        
        }
        if (resultTwo != true) {
            return document.getElementById("addressError").classList.remove("no-error")        
        }
    }
    inputAddress.onfocus = checkAddresOne
    function checkAddresOne(){
        var address = inputAddress.value;
        var myRegex = /[0-9]/;
        var myRegexOne = /[a-z]/ig;
        var myRegexTwo = /\s/;
        var result = myRegex.test(address);
        var resultOne = myRegexOne.test(address);
        var resultTwo = myRegexTwo.test(address)
        if (address.length < 5){
            return document.getElementById("addressError").classList.add("no-error")
        }
        if (result!=true) {
            return document.getElementById("addressError").classList.add("no-error")        
        }
        if (resultOne!=true) {
            return document.getElementById("addressError").classList.add("no-error")        
        }
        if (resultTwo!=true) {
            return document.getElementById("addressError").classList.add("no-error")        
        }
    }

    // ***** check City / Town *****
    var inputCity = document.getElementById("city");
    inputCity.onblur = checkCity;
    
    function checkCity (a) {
        var city = inputCity.value;
        if(city.length < 3){
            return document.getElementById("cityError").classList.remove("no-error")        
        }
    }
    inputCity.onfocus = checkCityOne;

    function checkCityOne (a) {
        var city = inputCity.value;
        if(city.length < 3){
            return document.getElementById("cityError").classList.add("no-error")        
        }
    }

    // ***** check Postal Code *****
    var inputpostalCode = document.getElementById("postalCode");
    inputpostalCode.onblur = checkPostalCode
    function checkPostalCode () {
        var postalCode = inputpostalCode.value
        if(postalCode.length<3){
            return document.getElementById("postalCodeError").classList.remove("no-error")        
        }
    }
    inputpostalCode.onfocus = checkPostalCodeOne
    function checkPostalCodeOne () {
        var postalCode = inputpostalCode.value
        if(postalCode.length<3){
            return document.getElementById("postalCodeError").classList.add("no-error")        
        }
    }


    // ***** check DNI *****
    var inputDni = document.getElementById("dni");
    inputDni.onblur = checkDni
    function checkDni (a) {
        var dni = inputDni.value
        if(dni.length < 7){
            return document.getElementById("dniError").classList.remove("no-error")        
        }
        if(dni.length >8){
            return document.getElementById("dniError").classList.remove("no-error")        
        }
    }
    inputDni.onfocus = checkDniOne
    function checkDniOne (a) {
        var dni = inputDni.value
        if(dni.length < 7){
            return document.getElementById("dniError").classList.add("no-error")        
        }
        if(dni.length >8){
            return document.getElementById("dniError").classList.add("no-error")        
        }
    }

    var inputbutton = document.getElementById("send")
    inputbutton.onclick = sendInfo

    function sendInfo (e){
        e.preventDefault()
        alert("Full Name: " + inputName.value + 
        " Email:  " + inputEmail.value +
        " Password: " + inputPassword.value +
        " Repeat your password: " + inputRepeatPassword.value +
        " Age: " + inputAge.value +
        " Phone Number: " + inputPhoneNumber + 
        " Address: " + inputAddress.value +
        " City/Town: " + inputCity.value +
        " Postal Code: " + inputpostalCode.value + 
        " Dni: " + inputDni.value
        )
    }

}