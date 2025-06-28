   document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('click', () => {
        const details = project.querySelector('.project-details');
        details.classList.toggle('active');
      });
    });

    const toggleButton = document.getElementById('mode-toggle');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      toggleButton.textContent = storedTheme === 'dark' ? '☀️' : '🌙';

      document.body.classList.add(`${storedTheme}-theme`);
    }

toggleButton.addEventListener('click', () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
  toggleButton.textContent = targetTheme === 'dark' ? '☀️' : '🌙';

  // ✅ Update body class for animated gradient
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${targetTheme}-theme`);
});

    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 300);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTop");
  const modeToggle = document.getElementById("mode-toggle");

  const fadeElements = document.querySelectorAll(".fade-in, .fade-up, .slide-in, .skill-card, .tool-item, .cert-card");


  fadeElements.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.01}s`;
});


  // Observer to trigger animations when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe each element only once
  fadeElements.forEach(el => observer.observe(el));
});



    // Typed Text Animation
    const typedText = document.getElementById('typed-text');
    const phrases = ["Cloud Operations Engineer", "Automation Expert", "Future Data Scientist", "Open-Source Contributor"];
    let i = 0, j = 0, currentPhrase = [], isDeleting = false;

    function loop() {
      typedText.innerHTML = currentPhrase.join('');
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j++]);
      } else if (isDeleting && j > 0) {
        currentPhrase.pop();
        j--;
      }
      if (j === phrases[i].length) isDeleting = true;
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
      }
      setTimeout(loop, isDeleting ? 50 : 100);
    }
    loop();

    // Project Filtering
function filterProjects(tag) {
  document.querySelectorAll('.filter button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.project').forEach(proj => {
    const tags = proj.getAttribute('data-tags');
    proj.style.display = (tag === 'all' || tags.includes(tag)) ? 'block' : 'none';
  });
}