document.addEventListener('DOMContentLoaded', function() {
    initCoinFlip();
    initTypingTitle();
    initAccordion();
});

function initCoinFlip() {
    const coin = document.getElementById('coin');
    if (!coin) return;
    coin.addEventListener('click', () => {
        coin.classList.remove('flip');
        void coin.offsetWidth;
        coin.classList.add('flip');
    });
}

function initTypingTitle() {
    const titleElement = document.getElementById('title');
    if (!titleElement) return;
    const texts = {
        mobile: 'Olá!🤗<br>Eu sou<br>Rodrigo Cavalcante 😎',
        desktop: 'Olá!<br>Bem-Vindo(a)🤗<br>Eu sou<br>Rodrigo Cavalcante 😎'
    };
    let fullText = window.innerWidth < 768 ? texts.mobile : texts.desktop;
    let currentIndex = 0;
    function typeText() {
        if (currentIndex < fullText.length) {
            titleElement.innerHTML = fullText.substring(0, currentIndex + 1);
            currentIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                currentIndex = 0;
                titleElement.innerHTML = '';
                typeText();
            }, 5000);
        }
    }
    typeText();
    window.addEventListener('resize', function() {
        const newText = window.innerWidth < 768 ? texts.mobile : texts.desktop;
        if (newText !== fullText) {
            fullText = newText;
            currentIndex = 0;
            titleElement.innerHTML = '';
            typeText();
        }
    });
}

function initAccordion() {
    document.querySelectorAll('.acordeon .trigger').forEach(button => {
        button.addEventListener('click', () => {
            const acordeon = button.closest('.acordeon');
            acordeon.classList.toggle('open');
        });
    });
}