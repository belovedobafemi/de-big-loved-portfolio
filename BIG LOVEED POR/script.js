// CUSTOM CURSOR TRAIL
const dot = document.getElementById('dot');
const outline = document.getElementById('outline');

if (dot && outline) {
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.style.left = e.clientX + 'px';
    outline.style.top = e.clientY + 'px';
  });
}

// NAVIGATION SYSTEM
function showPage(pageId) {
  const targetSection = document.getElementById(pageId);
  const targetNav = document.getElementById('nav-' + pageId);

  if (!targetSection || !targetNav) return;

  document.querySelectorAll('section').forEach(s => s.classList.remove('active-section'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

  targetSection.classList.add('active-section');
  targetNav.classList.add('active');
  window.scrollTo(0, 0);
}

// PHOTO FILTER ENGINE
function applyFilters() {
  const brightInput = document.getElementById('bright');
  const contrastInput = document.getElementById('contrast');
  const hueInput = document.getElementById('hue');
  const targetPhoto = document.getElementById('target-photo');

  if (!brightInput || !contrastInput || !hueInput || !targetPhoto) return;

  const b = brightInput.value;
  const c = contrastInput.value;
  const h = hueInput.value;

  const brightLabel = document.getElementById('val-bright');
  const contrastLabel = document.getElementById('val-contrast');
  const hueLabel = document.getElementById('val-hue');

  if (brightLabel) brightLabel.innerText = b + '%';
  if (contrastLabel) contrastLabel.innerText = c + '%';
  if (hueLabel) hueLabel.innerText = h + 'deg';

  targetPhoto.style.filter = `brightness(${b}%) contrast(${c}%) hue-rotate(${h}deg)`;
}

function resetFilters() {
  const brightInput = document.getElementById('bright');
  const contrastInput = document.getElementById('contrast');
  const hueInput = document.getElementById('hue');

  if (!brightInput || !contrastInput || !hueInput) return;

  brightInput.value = 100;
  contrastInput.value = 100;
  hueInput.value = 0;
  applyFilters();
}

// AI CHATBOT SYSTEM (FULL PROFESSIONAL & PERSONAL PROFILE)
function toggleChat() {
  const w = document.getElementById('aiWindow');
  if (!w) return;
  w.style.display = (w.style.display === 'flex') ? 'none' : 'flex';
}

function sendMsg() {
  const input = document.getElementById('aiInput');
  const body = document.getElementById('chatBody');

  if (!input || !body) return;

  const rawText = input.value.trim();
  const text = rawText.toLowerCase();

  if (!rawText) return;

  // Display user message
  const userBubble = document.createElement('div');
  userBubble.className = 'bubble user';
  userBubble.innerText = rawText;
  body.appendChild(userBubble);
  input.value = '';
  body.scrollTop = body.scrollHeight;

  // Comprehensive AI response logic
  setTimeout(() => {
    const botBubble = document.createElement('div');
    botBubble.className = 'bubble bot';

    let responseText = "";
    let showProfilePic = false;

    if (text.includes('who') || text.includes('about') || text.includes('loved') || text.includes('tell me') || text.includes('bio')) {
      responseText = "Hello! I am the official AI Assistant for DË BÎG LØVËD (Obafemi Beloved Jesulayomi).\n\n" +
                     "De Big Loved is a creative digital architect, graphic designer, and web developer from Kabba, Kogi State, Nigeria.\n\n" +
                     "He graduated from Evangel College, Ayetẹju, Kabba, and is currently processing his admission to KSU Kabba University. " +
                     "With 4 years of hands-on experience in video editing, photo retouching, and graphic design, alongside 2 years in web development, " +
                     "he delivers high-end visual solutions and interactive web platforms.";
      showProfilePic = true;
    }
    else if (text.includes('education') || text.includes('school') || text.includes('university') || text.includes('ksu') || text.includes('evangel')) {
      responseText = "De Big Loved completed his secondary education at Evangel College, Ayetẹju, Kabba, Kogi State. " +
                     "He is currently processing his admission to KSU Kabba University while actively working on freelance web development, media post-production, and branding projects.";
    }
    else if (text.includes('skills') || text.includes('do') || text.includes('service') || text.includes('offer') || text.includes('graphic')) {
      responseText = "De Big Loved offers an extensive digital toolkit:\n\n" +
                     "• Web Development (2 Yrs): HTML, CSS, JavaScript, PHP, API integration, and custom web interfaces.\n" +
                     "• Photo Retouching & Design (4 Yrs): Photoshop & Lightroom mastery, color correction, studio background manipulation, image sharpening, and 3D logo design.\n" +
                     "• Video Production (4 Yrs): Timeline editing, cinematic cuts, color grading, and motion graphics.\n" +
                     "• Brand Visuals & Media Systems: High-impact digital assets, branding layouts, and promotional design.";
      showProfilePic = true;
    }
    else if (text.includes('experience') || text.includes('years') || text.includes('how long')) {
      responseText = "De Big Loved brings a solid track record across multiple disciplines:\n\n" +
                     "• 4 Years in Graphic Design, Photo Editing (Photoshop/Lightroom), and Video Production.\n" +
                     "• 4 Years in Brand Direction and Visual Design (BIGLOVED GRAPHICS / @biglovedshot).\n" +
                     "• 2 Years in Full Web Development (HTML/CSS/JS/PHP).";
      showProfilePic = true;
    }
    else if (text.includes('church') || text.includes('mfm') || text.includes('design work')) {
      responseText = "De Big Loved has extensive experience producing high-profile church designs and media content. " +
                     "He has executed media assets for Mountain of Fire and Miracles Ministries (MFM North Central Regional HQ, Kabba), " +
                     "including promotional designs for Praise Sunday, special programmes like 'THE BELOVED', sermons, and choir ministrations.";
    }
    else if (text.includes('brand') || text.includes('bigloved') || text.includes('logo') || text.includes('watermark')) {
      responseText = "His primary creative branding operates under BIGLOVED GRAPHICS (stylized as ᴅË ʙÎɢ ʟØᴠËD) and @biglovedshot. " +
                     "His signature design aesthetic emphasizes clean typography, dark high-contrast red/white/ash palettes, sharp background removals, and studio-grade retouching without distorting natural features.";
      showProfilePic = true;
    }
    else if (text.includes('web') || text.includes('code') || text.includes('php') || text.includes('dev')) {
      responseText = "In web engineering (2 Years Experience), he constructs front-end and back-end web applications using HTML, CSS, JavaScript, and PHP. " +
                     "He has engineered custom UI interactive platforms, dynamic API connections, theme engines, and application interfaces.";
    }
    else if (text.includes('contact') || text.includes('hire') || text.includes('phone') || text.includes('email') || text.includes('whatsapp')) {
      responseText = "Direct channels to connect with Obafemibeloved Jesulayomi (De Big Loved):\n\n" +
                     "• WhatsApp Direct: +234 708 907 4147\n" +
                     "• Direct Call: +234 805 275 5232\n" +
                     "• Email: obafemibelovedjesulayomi@gmail.com\n" +
                     "• Socials: Facebook (@BIG LOVED AI), TikTok (@De_Big_Loved), Instagram (@De_Big_Loved)\n" +
                     "• Location: Kabba, Kogi State, Nigeria";
    }
    else {
      responseText = "Welcome! I am De Big Loved's AI collaborator. I can provide details about his:\n\n" +
                     "• Background (Evangel College graduate, KSU Kabba University candidate)\n" +
                     "• Skills (Photoshop, Lightroom, HTML/CSS/JS/PHP, Video Editing)\n" +
                     "• Brands (BIGLOVED GRAPHICS / @biglovedshot)\n" +
                     "• Visual Design & Freelance Portfolio\n\n" +
                     "What would you like to know?";
    }

    // Attach profile picture when describing profile/services
    if (showProfilePic) {
      const img = document.createElement('img');
      img.src = 'image-5.jpg';
      img.alt = 'De Big Loved Profile';
      img.style.width = '100%';
      img.style.borderRadius = '8px';
      img.style.marginBottom = '10px';
      img.style.display = 'block';
      botBubble.appendChild(img);
    }

    const textSpan = document.createElement('span');
    textSpan.innerText = responseText;
    textSpan.style.whiteSpace = 'pre-wrap';
    botBubble.appendChild(textSpan);

    body.appendChild(botBubble);
    body.scrollTop = body.scrollHeight;
  }, 100);
}

// WHATSAPP DIRECT REDIRECT
function sendToWhatsApp(event) {
  event.preventDefault();

  const nameInput = document.getElementById('clientName');
  const emailInput = document.getElementById('clientEmail');
  const messageInput = document.getElementById('clientMessage');

  if (!nameInput || !emailInput || !messageInput) return;

  const phoneNumber = "2347089074147";
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const formattedText = `Hello De Big Loved!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Project Description:* ${encodeURIComponent(message)}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedText}`;

  window.open(whatsappUrl, '_blank');
}