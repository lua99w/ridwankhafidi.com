// Efek mengetik
const namaElement = document.getElementById('nama');
const deskripsiElement = document.getElementById('deskripsi');

const typingEffect = (element, text, delay) => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
};

// Memanggil efek mengetik
typingEffect(namaElement, "Nama Lengkap Anda", 100);
typingEffect(deskripsiElement, "Siswa SMK | Web Developer Pemula", 100);

// Efek masuk saat menggulir
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
};

const fadeInObserver = new IntersectionObserver(fadeInObserverCallback, fadeInObserverOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Penanganan navigasi halus
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Menambahkan event listener untuk mouseover dan mouseout pada pop-up
    const popups = document.querySelectorAll('.popup');

    popups.forEach(popup => {
        const parentLi = popup.parentElement;

        parentLi.addEventListener('mouseenter', () => {
            popup.style.display = 'block'; // Tampilkan pop-up
        });

        parentLi.addEventListener('mouseleave', () => {
            popup.style.display = 'none'; // Sembunyikan pop-up
        });
    });

    // Mengambil semua kotak
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        // Menambahkan event listener untuk animasi klik
        box.addEventListener('click', () => {
            box.classList.add('clicked');
            
            // Hapus class setelah beberapa detik untuk animasi
            setTimeout(() => {
                box.classList.remove('clicked');
            }, 200); // Waktu animasi klik
        });
    });
});

// Efek muncul saat footer muncul di layar
const footer = document.querySelector('.footer');

const footerObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const footerObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footer.classList.add('visible');
        }
    });
};

const footerObserver = new IntersectionObserver(footerObserverCallback, footerObserverOptions);
footerObserver.observe(footer);