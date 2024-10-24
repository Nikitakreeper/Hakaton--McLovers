document.getElementById('check').addEventListener('click', function(){
    let checks = false;
    document.querySelectorAll('.sphere_input').forEach(element => {
        if (element.checked){
            checks = true
        }
    });
    if (checks == true) window.location.href="./job.html"
    else alert("Выберите хотябы один пункт")
});