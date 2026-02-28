const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 });

const bars = document.querySelectorAll('.progress-line');
bars.forEach((el) => observer.observe(el));

//for ever other element left
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInFromLeft');
        } else {
            entry.target.classList.remove('fadeInFromLeft');
        }
    });
}, { threshold: 0.5 });

const bars1 = document.querySelectorAll('.fadeFromLeft');
bars1.forEach((el) => observer1.observe(el));

//for ever other element right
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInFromRight');
        } else {
            entry.target.classList.remove('fadeInFromRight');
        }
    });
}, { threshold: 0.5 });

const bars2 = document.querySelectorAll('.fadeFromRight');
bars2.forEach((el) => observer2.observe(el));

//for ever other element bottom
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInFromBottom');
        } else {
            entry.target.classList.remove('fadeInFromBottom');
        }
    });
}, { threshold: 0.5 });

const bars3 = document.querySelectorAll('.fadeFromBottom');
bars3.forEach((el) => observer3.observe(el));