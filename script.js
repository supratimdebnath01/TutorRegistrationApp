
function onPressUsernameHandler() {
    document.getElementById('desiredUsername').classList.remove('is-invalid');
    document.getElementById('usernameError').innerHTML = "";
}
function onPressPasswordHandler() {
    document.getElementById('choosePassword').classList.remove('is-invalid');
    document.getElementById('passwordError').innerHTML = "";
}
function onPressNameHandler(){
    document.getElementById('name').classList.remove('is-invalid');
    document.getElementById('nameError').innerHTML = "";
}
function onPressZipHandler() {
    document.getElementById('zipCode').classList.remove('is-invalid');
    document.getElementById('zipError').innerHTML = "";
}
function onPressAreaHandler() {
    document.getElementById('area').classList.remove('is-invalid');
    document.getElementById('areaError').innerHTML = "";
}
function onPressAddressHandler() {
    document.getElementById('presentAddress').classList.remove('is-invalid');
    document.getElementById('addError').innerHTML = "";
}
function onPressContactHandler() {
    document.getElementById('contactNo').classList.remove('is-invalid');
    document.getElementById('contactError').innerHTML = "";
}
function onPressEmailHandler() {
    document.getElementById('email').classList.remove('is-invalid');
    document.getElementById('emailError').innerHTML = "";
}
function onSelectGenderHandler() {
    document.getElementById('gender').classList.remove('is-invalid');
    document.getElementById('genderError').innerHTML = "";
}
function onSelectAgeHandler() {
     document.getElementById('age').classList.remove('is-invalid');
     document.getElementById('ageError').innerHTML = "";
}
function onSelectLocationHandler() {
    document.getElementById('location').classList.remove('is-invalid');
    document.getElementById('locationError').innerHTML = "";
}
function onClickPhotoHandler() {
    document.getElementById('uploadPhoto').classList.remove('is-invalid');
    document.getElementById('photoError').innerHTML = "";
}


function clearErrorMessages() {
     onPressUsernameHandler();
     onPressPasswordHandler();
     onPressNameHandler();
     onPressZipHandler();
     onPressAreaHandler();
     onPressAddressHandler();
     onPressContactHandler();
     onPressEmailHandler();
     onSelectGenderHandler();
     onSelectAgeHandler();
     onSelectLocationHandler();
     onClickPhotoHandler();
}

// Photo validation 

function fileUploadHandler() {
    onClickPhotoHandler();
    var upload = document.getElementById('uploadPhoto');
    if (upload.value === "") {
        document.getElementById('photoError').append('Please select the image.');
        document.getElementById('uploadPhoto').classList.add('is-invalid');
    } else {
    var uploadPath = upload.value;
    var allowedFileTypes = /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.gif|\.GIF)$/ 
    var fileSize = upload.files[0].size / 1024 / 1024 ;  
   
    if (!allowedFileTypes.exec(uploadPath)) {
        document.getElementById('photoError').append('Invalid file type.');
        document.getElementById('uploadPhoto').classList.add('is-invalid');
        uploadPath = '';
        return;
    }
    if (fileSize > 2) {
        document.getElementById('photoError').append('File size is more than 2 MB.');
        document.getElementById('uploadPhoto').classList.add('is-invalid');
        uploadPath = '';
        return;
    }
   }
    
}

function submitHandler() {
    var userName = document.getElementById('desiredUsername').value;
    var password = document.getElementById('choosePassword').value;
    var secretQuestion = document.getElementById('secretQuestion').value;
    var answer = document.getElementById('answer').value;
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
    var country = document.getElementById('country').value;
    var location = document.getElementById('location').value;
    var postalZip = document.getElementById('zipCode').value;
    var area = document.getElementById('area').value;
    var presentAddress = document.getElementById('presentAddress').value;
    var contactNumber = document.getElementById('contactNo').value;
    var emailId = document.getElementById('email').value;
    var upload = document.getElementById('uploadPhoto').value;
     clearErrorMessages();
    
    // Validating Username
    if (userName === "") {
        document.getElementById('usernameError').append('This field is required.');
        document.getElementById('desiredUsername').classList.add('is-invalid');
    } else {
       const isBig = (userName.length > 20);
       const pattern = /[^a-zA-Z0-9]/;
       const patternTest = pattern.test(userName);

       if (isBig || patternTest) {
           document.getElementById('usernameError').append('User name cannot exceed 20 characters and cannot contain special characters.');
           document.getElementById('desiredUsername').classList.add('is-invalid');
       }
    }

    // Validating Password
    if (password === "") {
        document.getElementById('passwordError').append('The password cannot be empty.');
        document.getElementById('choosePassword').classList.add('is-invalid');
    } else {
        const minMax = (password.length > 8) && (password.length < 20);
        const pattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        const patternTest = pattern.test(password);
        
       if (!minMax || !patternTest) {
           document.getElementById('passwordError').append('1) Your password must be between 8 and 20 characters, 2) One special character, 3) one upper case, 4) one lower case, 5) one number, 6) Not have space character.');
           document.getElementById('choosePassword').classList.add('is-invalid');
        }  
    } 
    
    // Validating Name
    if (name === "") {
        document.getElementById('nameError').append('Please enter the name.');
        document.getElementById('name').classList.add('is-invalid');
    } else {
        const pattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/
        const patternTest = pattern.test(name);
        
        if (!patternTest) {
            document.getElementById('nameError').append('Please enter a valid name.');
            document.getElementById('name').classList.add('is-invalid');
        } 
    } 
    
    // Validating Gender 
    if (gender === "Default") {
        document.getElementById('genderError').append('Please select.');
        document.getElementById('gender').classList.add('is-invalid');
    } 

    // Validating Age
    if (age === "Default") {
        document.getElementById('ageError').append('Please select.');
        document.getElementById('age').classList.add('is-invalid');
    }

    // Validating Location
     if (location === "default") {
         document.getElementById('locationError').append('Please select your location.');
         document.getElementById('location').classList.add('is-invalid');
     }
     
    // Validating Postal || Zip Code
    if (postalZip === "") {
        document.getElementById('zipError').append('Please enter postal code.');
        document.getElementById('zipCode').classList.add('is-invalid');
    } else {
        const isValid = (postalZip.length === 6);
        const pattern = /^[1-9][0-9]{5}$/
        const patternTest = pattern.test(postalZip);
       
        if (!isValid || !patternTest) {
            document.getElementById('zipError').append('Postal code must be 6 digit number without space.');
            document.getElementById('zipCode').classList.add('is-invalid');
        }
    }
    
    // Validating Area
    if (area === "") {
        document.getElementById('areaError').append('Please enter this field.');
        document.getElementById('area').classList.add('is-invalid');
    } else {
        const pattern = /^[a-zA-Z0-9 ]*$/
        const patternTest = pattern.test(area);
      
        if (!patternTest) {
          document.getElementById('areaError').append('Area should not contain any special character.');
          document.getElementById('area').classList.add('is-invalid');
      }  
    }

    // Validating Address
    if (presentAddress === "") {
        document.getElementById('addError').append('This field is required.');
        document.getElementById('presentAddress').classList.add('is-invalid');
    } 

    // Validating Contact Number
    if (contactNumber === "") {
        document.getElementById('contactError').append('Please enter your phone number.');
        document.getElementById('contactNo').classList.add('is-invalid');
    } else {
        const isNum = (contactNumber.length === 10);
        const pattern = /^[0-9]*$/
        const patternTest = pattern.test(contactNumber);
       
       if (!isNum || !patternTest) {
           document.getElementById('contactError').append('Please enter your 10 digit number without space.');
           document.getElementById('contactNo').classList.add('is-invalid');
       } 
    }

    //Validating Email
    if (emailId === "") {
        document.getElementById('emailError').append('Please enter your email.');
        document.getElementById('email').classList.add('is-invalid');
    } else {
        const pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const patternTest = pattern.test(emailId);
        
       if (!patternTest) {
            document.getElementById('emailError').append('You have entered an invalid email address!');
            document.getElementById('email').classList.add('is-invalid');
       } 
    }

    // Empty photo upload

    fileUploadHandler(); 
    
}