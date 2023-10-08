function showModal()
{
    document.querySelector('.overlay-modal').classList.add('show-overlay-modal');
    document.querySelector('.login-form-home').classList.add('show-login-form');

}
function closeModal()
{
    document.querySelector('.overlay-modal').classList.remove('show-overlay-modal');
    document.querySelector('.login-form-home').classList.remove('show-login-form');

}

const txt1 = document.getElementById('username');
const btnLogin = document.getElementById('btnLogin');
const out1 = document.getElementById('output1');
const txt2 = document.getElementById('designation');
const out2 = document.getElementById('output2');

function fun1()
{
    out1.innerHTML = txt1.value;
    out2.innerHTML = txt2.value;
}

btnLogin.addEventListener('click', fun1);

function transfer() {
    location.href = "output.html?name="+document.getElementById("output1").value;
}