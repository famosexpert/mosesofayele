/* ===== EDIT YOUR CONTENT HERE (shared by every page) ===== */
// ===== EDIT YOUR CONTENT HERE (one place) =====
const site = {
  name: "MOSES O FAYELE",
  title: "TECHNOLOGY & DIGITAL SOLUTIONS",
  headline: "Ideas into Digital Solutions.",
  intro: "I'm a technology enthusiast interested in building useful digital experiences, exploring emerging tools and solving everyday problems through technology.",
  photo: "photo.jpg", // put your portrait in /public as photo.jpg
  aboutTitle: "Driven by Curiosity. Focused on Solutions.",
  about: [
    "I'm a technology enthusiast interested in building useful digital experiences, exploring emerging tools and solving everyday problems through technology.",
    "I am passionate about technology and the difference it can make in everyday life. My interests span web development, graphic design, computer networking, artificial intelligence, automation and IT support.",
    "I enjoy learning new tools, understanding how things work and turning ideas into practical digital solutions. I am committed to continuous learning and to growing my skills one project at a time."
  ],
  email: "fayelemoses@gmail.com",
  whatsappLabel: "+234 912 093 7093",
  whatsapp: "https://wa.me/2349120937093",
};
const nav = [["Home",""],["About","about"],["Services","services"],["Skills","skills"],["Portfolio","portfolio"],["Contact","contact"]]; // [label, page]
const icons = {
  web:"M16 18l6-6-6-6M8 6l-6 6 6 6", design:"M12 19l7-7 3 3-7 7zM2 2l7.6 7.6M18 13l-1.5-7.5L2 2l3.5 14.5z",
  net:"M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
  ai:"M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z", it:"M2 4h20v12H2zM8 20h8M12 16v4", zap:"M13 2L3 14h9l-1 8 10-12h-9z",
  mkt:"M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12",
  shop:"M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6M9 21h.01M20 21h.01"
};
const services = [
  {icon:"web",title:"Web Design & Development",text:"Clean, responsive websites that are easy to use and quick to load."},
  {icon:"design",title:"Graphic Design",text:"Visual designs and layouts that communicate ideas clearly."},
  {icon:"net",title:"Computer Networking",text:"Exploring how devices connect, communicate and stay secure."},
  {icon:"ai",title:"AI & Automation",text:"Using AI tools and automation to save time and simplify tasks."},
  {icon:"it",title:"Software & IT Support",text:"Practical help with software, devices and everyday tech problems."},
  {icon:"mkt",title:"Digital Marketing",text:"Promoting brands and ideas online through social media, content and clear digital messaging."},
  {icon:"shop",title:"E-commerce",text:"Setting up and presenting online stores that make it simple to showcase and sell products."},
  {icon:"zap",title:"Technology & Digital Solutions",text:"Turning everyday problems into simple, useful digital solutions."},
];
const skills = ["Web Design","HTML and CSS","Graphic Design","Computer Networking","Artificial Intelligence Tools","IT Support","Problem Solving","Digital Technology"];
const socials = [
  {name:"Facebook",icon:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",url:"https://facebook.com/mosesofayele"},
  {name:"Instagram",icon:"M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37zM17.5 6.5h.01",url:"https://instagram.com/mosesofayele"},
  {name:"TikTok",icon:"M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",url:"https://tiktok.com/@mosesofayele"},
  {name:"LinkedIn",icon:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",url:"https://linkedin.com/in/mosesofayele"},
];

// Hero illustration (inline SVG, edit or replace freely)
const heroArt = `<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="210" cy="170" r="160" fill="#e8f2fc"/><rect x="95" y="60" width="230" height="150" rx="10" fill="#0b1f3a"/><rect x="107" y="72" width="206" height="126" rx="4" fill="#f5f9fd"/><circle cx="119" cy="83" r="3" fill="#4a9fe0"/><circle cx="130" cy="83" r="3" fill="#0b1f3a"/><rect x="122" y="104" width="70" height="8" rx="4" fill="#4a9fe0"/><rect x="122" y="122" width="110" height="8" rx="4" fill="#0b1f3a"/><rect x="138" y="140" width="90" height="8" rx="4" fill="#9cc9ee"/><rect x="122" y="158" width="100" height="8" rx="4" fill="#0b1f3a"/><path d="M262 112l-14 14 14 14M290 112l14 14-14 14M282 108l-10 36" fill="none" stroke="#4a9fe0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="195" y="210" width="30" height="26" fill="#0b1f3a"/><rect x="165" y="236" width="90" height="8" rx="4" fill="#0b1f3a"/><rect x="24" y="200" width="118" height="76" rx="6" fill="#0b1f3a"/><rect x="32" y="208" width="102" height="60" rx="3" fill="#e8f2fc"/><rect x="42" y="220" width="44" height="6" rx="3" fill="#0b1f3a"/><rect x="42" y="234" width="72" height="6" rx="3" fill="#4a9fe0"/><rect x="42" y="248" width="56" height="6" rx="3" fill="#0b1f3a"/><rect x="10" y="276" width="146" height="10" rx="5" fill="#4a9fe0"/><rect x="338" y="170" width="58" height="106" rx="11" fill="#0b1f3a"/><rect x="344" y="182" width="46" height="82" rx="4" fill="#e8f2fc"/><circle cx="367" cy="206" r="11" fill="#4a9fe0"/><rect x="351" y="228" width="32" height="6" rx="3" fill="#0b1f3a"/><rect x="351" y="241" width="22" height="6" rx="3" fill="#9cc9ee"/><rect x="180" y="296" width="110" height="22" rx="7" fill="#0b1f3a"/><circle cx="198" cy="307" r="3" fill="#4a9fe0"/><circle cx="210" cy="307" r="3" fill="#4a9fe0"/><path d="M222 280a18 18 0 0 1 26 0M214 271a30 30 0 0 1 42 0" fill="none" stroke="#4a9fe0" stroke-width="4" stroke-linecap="round"/><circle cx="235" cy="288" r="3.5" fill="#4a9fe0"/><path transform="translate(40 24) scale(1.9)" d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill="#4a9fe0"/><path d="M352 50l36 36M352 50l-14 52M388 86l-50 16" fill="none" stroke="#9cc9ee" stroke-width="3"/><circle cx="352" cy="50" r="8" fill="#0b1f3a"/><circle cx="388" cy="86" r="8" fill="#4a9fe0"/><circle cx="338" cy="102" r="8" fill="#0b1f3a"/></svg>`;

// Portfolio: replace these placeholders with your real work (image e.g. "projects/one.jpg" in /public/projects)
const projects = [
  {title:"Project Title One",category:"Web Design",text:"Short description of this project. Replace with your own work.",image:"",link:""},
  {title:"Project Title Two",category:"Graphic Design",text:"Short description of this project. Replace with your own work.",image:"",link:""},
  {title:"Project Title Three",category:"AI & Automation",text:"Short description of this project. Replace with your own work.",image:"",link:""},
];

/* ===== PAGE RENDERING (no need to edit) ===== */
const slug=document.body.dataset.page||"";
const url=s=>s?s+".html":"index.html";
const ic=d=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
const links=()=>nav.map(([l,s])=>`<a href="${url(s)}"${s===slug?' class="active"':''}>${l}</a>`).join("");
const soc=()=>`<div class="social">${socials.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${ic(s.icon)}${s.name}</a>`).join("")}</div>`;
const grid=a=>`<div class="grid">${a.map(s=>`<div class="card reveal"><div class="ic">${ic(icons[s.icon])}</div><h3>${s.title}</h3><p>${s.text}</p></div>`).join("")}</div>`;
const head=(k,t,l="")=>`<section class="pagehead"><div class="wrap reveal"><div class="kicker">${k}</div><h1>${t}</h1>${l?`<p class="lead">${l}</p>`:""}</div></section>`;
const sec=(alt,k,t,c)=>`<section class="${alt?"alt":""}"><div class="wrap reveal"><div class="kicker">${k}</div><h2>${t}</h2>${c}</div></section>`;
const plain=c=>`<section><div class="wrap reveal">${c}</div></section>`;
const cta=()=>`<section><div class="wrap"><div class="cta reveal"><h2>Have an idea? Let's build something useful.</h2><p>Tell me what you have in mind and let's talk.</p><a class="btn" href="contact.html">Contact Me</a></div></div></section>`;
const photo=`<div class="photo">MF<img src="${site.photo}" alt="Portrait of ${site.name}" width="300" height="375" loading="lazy" onerror="this.style.display='none'"></div>`;
const pages={
"":()=>`<section class="hero"><div class="wrap"><div><div class="eyebrow">${site.title}</div><h1>${site.name}</h1><p style="font-size:1.4rem;font-weight:600">${site.headline}</p><p class="lead" style="margin-top:12px">${site.intro}</p><div class="btns"><a class="btn fill" href="portfolio.html">Explore My Work</a><a class="btn line" href="contact.html">Contact Me</a></div></div><div class="hero-art" role="img" aria-label="Illustration of a computer, laptop, phone and network">${heroArt}</div></div></section>`
 +sec(1,"WHAT I DO","Services & Interests",grid(services.slice(0,4))+`<a class="more" href="services.html">View all services</a>`)
 +sec(0,"ABOUT ME",site.aboutTitle,`<div class="about"><p>${site.about[1]}</p></div><a class="more" href="about.html">More about me</a>`)+cta(),
about:()=>head("ABOUT ME",site.aboutTitle)+plain(`<div class="about-grid">${photo}<div class="about">${site.about.map(p=>`<p>${p}</p>`).join("")}</div></div>`)+cta(),
services:()=>head("SERVICES & INTERESTS","What I Work On","The areas I work in and keep learning about.")+plain(grid(services))+cta(),
skills:()=>head("SKILLS & LEARNING","Always Learning","Skills I am building and growing.")+plain(`<div class="chips" style="margin-top:0">${skills.map(s=>`<span class="chip">${s}</span>`).join("")}</div>`)+cta(),
portfolio:()=>head("PORTFOLIO","Selected Projects","My work will appear here as I complete and add projects.")+plain(`<div class="grid">${projects.map(p=>`<div class="card reveal"><div class="thumb">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy">`:"Project image placeholder"}</div><div class="tag">${p.category}</div><h3>${p.title}</h3><p>${p.text}</p>${p.link?`<a class="more" href="${p.link}">View details</a>`:""}</div>`).join("")}</div>`),
contact:()=>head("CONTACT","Let's Talk","Have an idea or a question? Reach out on any of these, or send a message.")+plain(`<div class="cwrap"><div><a class="card" href="mailto:${site.email}"><h3>Email</h3><p>${site.email}</p></a><a class="card" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer"><h3>WhatsApp</h3><p>${site.whatsappLabel}</p></a>${soc()}</div><form class="cform" id="cf"><label>Name<input name="n" required></label><label>Email<input type="email" name="e" required></label><label>Message<textarea name="m" rows="5" required></textarea></label><button class="btn fill" type="submit">Send Message</button></form></div>`)
};
document.getElementById("app").innerHTML=`<header><div class="wrap"><a href="index.html" class="logo">MOF</a><button class="menu" aria-label="Toggle menu" aria-expanded="false">${ic("M3 6h18M3 12h18M3 18h18")}</button><nav id="nav">${links()}</nav></div></header><main>${(pages[slug]||pages[""])()}</main><footer><div class="wrap"><nav>${links()}</nav><p style="margin-top:18px">© 2026 ${site.name}. All Rights Reserved.</p></div></footer>`;
const n=document.getElementById("nav"),m=document.querySelector(".menu");
m.onclick=()=>{m.setAttribute("aria-expanded",n.classList.toggle("open"))};n.onclick=()=>n.classList.remove("open");
const cf=document.getElementById("cf");
if(cf)cf.onsubmit=e=>{e.preventDefault();const f=new FormData(cf);location.href=`mailto:${site.email}?subject=${encodeURIComponent("Message from "+f.get("n"))}&body=${encodeURIComponent(f.get("m")+"\n\n"+f.get("n")+" ("+f.get("e")+")")}`};
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
