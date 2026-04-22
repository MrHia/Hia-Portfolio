// ============ ASSETS INITIALIZATION ============
// Initialize links from assets-data.js

document.addEventListener('DOMContentLoaded', () => {
  initLinksFromAssets();
  renderProjects();
});

function initLinksFromAssets() {
  // Social links - Home section
  document.querySelectorAll('.home .social-icons a').forEach(link => {
    const social = link.dataset.social;
    if (social && ASSETS.socialLinks[social]) {
      link.href = ASSETS.socialLinks[social];
    }
  });

  // Social links - Footer section
  document.querySelectorAll('.footer .social-icons a').forEach(link => {
    const social = link.dataset.social;
    if (social && ASSETS.socialLinks[social]) {
      link.href = ASSETS.socialLinks[social];
    }
  });

  // Download links
  document.querySelectorAll('[data-download="cv"]').forEach(link => {
    if (ASSETS.downloads.cv) {
      link.href = ASSETS.downloads.cv;
    }
  });

  // Image sources
  if (document.querySelector('.home-img img')) {
    document.querySelector('.home-img img').src = ASSETS.images.home;
  }
  if (document.querySelector('.about-img img')) {
    document.querySelector('.about-img img').src = ASSETS.images.about;
  }

  // Favicon
  const favicon = document.getElementById('favicon');
  if (favicon && ASSETS.images.favicon) {
    favicon.href = ASSETS.images.favicon;
  }
}
// ============ END ASSETS INITIALIZATION ============

// ============ PROJECT RENDERING ============
function renderProjects() {
  const projectsBox = document.querySelector('.projects-box');
  if (!projectsBox || typeof projects === 'undefined') return;

  projectsBox.innerHTML = projects.map(project => `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.link}" class="btn" target="_blank" rel="noopener noreferrer">Link Project</a>
    </div>
  `).join('');
}
// ============ END PROJECT RENDERING ============

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  };
});

document.getElementById('contact-btn').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
});

const form = document.querySelector('form');

const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  let isValid = true;

  emailError.textContent = "";
  phoneError.textContent = "";

  if (!email && !phone) {
    emailError.textContent = "Please provide at least an Email or a Phone number.";
    phoneError.textContent = "Please provide at least an Email or a Phone number.";
    isValid = false;
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Invalid email address format.";
    isValid = false;
  }

  if (phone && !/^[0-9]{8,15}$/.test(phone)) {
    phoneError.textContent = "Phone number must be between 8 and 15 digits.";
    isValid = false;
  }

  if (!isValid) return;

  try {
    const response = await fetch(ASSETS.services.formspree, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      showToast("Message sent successfully!", "success");
      form.reset();
    } else {
      showToast("Something went wrong. Please try again later.", "error");
    }
  } catch (error) {
    showToast("Network error. Please check your connection.", "error");
  }
});

[emailInput, phoneInput].forEach(input => {
  input.addEventListener("input", () => {
    document.getElementById(input.id + "-error").textContent = "";
  });
});

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = `toast ${type}`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}
