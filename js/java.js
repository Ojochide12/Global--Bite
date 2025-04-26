const bar = document.getElementById('bar');
const navLinks = document.getElementById('navLinks');

if(bar) {
    bar.addEventListener('click', () => {
        navLinks.classList.add('active');
        bar.style.display = "none"
        close.style.display = "flex"
    })
   
}
const close = document.getElementById('close');

if(close) {
    close.addEventListener('click', () => {
        navLinks.classList.remove('active');
        bar.style.display = "flex"
        close.style.display = "none"
    })
}