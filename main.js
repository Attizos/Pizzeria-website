
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const shadowHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)





const scrollUp = () => {
    const scrollUpElement = document.getElementById('scroll-up');

    window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll')
        : scrollUpElement.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (index >= slides.length) { slideIndex = 0 }
    else if (index < 0) { slideIndex = slides.length - 1 }
    else { slideIndex = index }
    slides[slideIndex].style.display = "block";
}

document.getElementById('prev').addEventListener('click', function () {
    showSlide(slideIndex - 1);
});

document.getElementById('next').addEventListener('click', function () {
    showSlide(slideIndex + 1);
});


function searchFunction() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase(); 
    const normalFilter = document.getElementById('filtr-normal').checked; 
    const vegeFilter = document.getElementById('filtr-vege').checked; 
    const products = document.querySelectorAll('.products__card'); 

    products.forEach(product => {
        const productName = product.querySelector('.products__name').textContent.toLowerCase(); 
        const productCategory = product.getAttribute('data-category'); 

        
        const matchesSearch = searchInput === '' || productName.includes(searchInput); 
        const matchesCategory = 
            (normalFilter && productCategory === 'normal') || 
            (vegeFilter && productCategory === 'vege') || 
            (!normalFilter && !vegeFilter); 

        if (matchesSearch && matchesCategory) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
}












