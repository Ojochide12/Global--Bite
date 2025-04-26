function sub() {
    const fullname = document.getElementById('fullName').value;
    const email= document.getElementById('email').value;
    const number = Number(document.getElementById('number').value);
    const message = document.getElementById('message').value;

    if(fullname === "" || email === "" || number === "" || message === "") {
        alert('Plese fill the form correctly')
    }else {
        alert('Thank You Contacting Us')
    }
}