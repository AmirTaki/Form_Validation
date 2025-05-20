var nameError = document.getElementById("name-error")
var phoneError = document.getElementById("phone-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")


const validateName = () => {
    var name = document.getElementById('contact-name').value
    if (name.lenght == 0){
        nameError.innerHTML = "Name is required"
        return false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"
        return false
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
    return true
}

const validatePhone = () => {
    var phone = document.getElementById('contact-phone').value

    if (phone.lenght == 0){
        phoneError.innerHTML = "Phone no is required"
        return false
    }

    if (phone.lenght < 10 && phone.lenght > 10){
        phoneError.innerHTML = "Phone no should be 10 digits"
        return false
    }

    if(!phone.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)){
        phoneError.innerHTML = "Only digits please."
        return false
    }


    phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
    return true
}