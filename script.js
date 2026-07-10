const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealElements = document.querySelectorAll('.reveal');
const flow = document.querySelector('.data-flow');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((el) => observer.observe(el));

  if (flow) {
    const flowObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          flow.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    flowObserver.observe(flow);
  }
} else {
  revealElements.forEach((el) => el.classList.add('in-view'));
  if (flow) flow.classList.add('in-view');
}

const tooltip = document.querySelector('.tooltip');
const nodes = document.querySelectorAll('.flow-node');

if (tooltip && nodes.length) {
  nodes.forEach((node) => {
    const showTip = (event) => {
      const tip = node.dataset.tip;
      if (!tip) return;
      tooltip.textContent = tip;
      tooltip.style.display = 'block';
      const rect = flow.getBoundingClientRect();
      const x = (event.clientX || rect.left + 40) - rect.left + 12;
      const y = (event.clientY || rect.top + 40) - rect.top + 12;
      tooltip.style.left = `${Math.min(x, rect.width - 260)}px`;
      tooltip.style.top = `${Math.max(12, y)}px`;
    };
    const hideTip = () => {
      tooltip.style.display = 'none';
      tooltip.textContent = '';
    };
    node.addEventListener('mousemove', showTip);
    node.addEventListener('mouseenter', showTip);
    node.addEventListener('mouseleave', hideTip);
    node.addEventListener('focus', showTip);
    node.addEventListener('blur', hideTip);
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
  });
}
