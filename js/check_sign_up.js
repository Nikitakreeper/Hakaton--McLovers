function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
document.getElementById('yan').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let nam = document.getElementById('imya').value;
    let fam = document.getElementById('fam').value;
    let region = document.getElementById('region').value;
    let tel = document.getElementById('tel').value;
    let password = document.getElementById('password').value;

    console.log(email, name, fam, region, tel, password);

    if (validateEmail(email) && nam !== "" && fam !== "" && password !== "" && region !== "" && tel !== "") {
        window.location.href = './sphere.html';
    }

    localStorage.setItem('region', region)
    localStorage.setItem('nam', nam)
    localStorage.setItem('fam', fam)
});