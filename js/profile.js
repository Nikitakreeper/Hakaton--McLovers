let nam = localStorage.getItem('nam')
let fam = localStorage.getItem('fam')
let region = localStorage.getItem('region')
let sex = localStorage.getItem('sex')
let job = localStorage.getItem('job')
let post = localStorage.getItem('post')

document.getElementById('nam').value = nam;
document.getElementById('fam').value = fam;
document.getElementById('region').value = region;
document.getElementById('sex').value = sex;
document.getElementById('job').value = job;
document.getElementById('post').value = post;

document.getElementById('save').addEventListener('click', function(){
    let new_nam = document.getElementById('nam').value
    let new_fam = document.getElementById('fam').value
    let new_region = document.getElementById('region').value
    let new_sex = document.getElementById('sex').value
    let new_job = document.getElementById('job').value
    let new_post = document.getElementById('post').value
    localStorage.setItem('nam', new_nam)
    localStorage.setItem('fam', new_fam)
    localStorage.setItem('region', new_region)
    localStorage.setItem('sex', new_sex)
    localStorage.setItem('job', new_job)
    localStorage.setItem('post', new_post)
    window.location.href = './profile.html'
})