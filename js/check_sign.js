function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
document.getElementById('yan').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    if (validateEmail(email) == true && document.getElementById('password').value != ""){
        window.location.href = './sphere.html'
    }
})