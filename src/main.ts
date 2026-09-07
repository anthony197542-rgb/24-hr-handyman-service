import './style.css'
import { createIcons, ArrowRight, CalendarDays, Check, Clock3, Menu, Phone, ShieldCheck, Star, Wrench, X } from 'lucide'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="24 HR Handyman Services home">
      <span class="brand-mark"><i data-lucide="wrench"></i></span>
      <span><strong>24 HR</strong><small>HANDYMAN SERVICES</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#about">Why us</a>
    </nav>
    <a class="header-phone" href="tel:5618921279"><i data-lucide="phone"></i><span>561-892-1279<small>Call for service</small></span></a>
      <button class="menu-button" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu"></i></button>
  </header>
    <nav class="mobile-nav" aria-label="Mobile navigation"><a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#about">Why us</a><a href="tel:5618921279">Call 561-892-1279</a></nav>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Palm Beach County's reliable repair team</p>
        <h1>Your home has a <em>to-do list.</em><br>We make it disappear.</h1>
        <p class="hero-text">From the first loose hinge to the final coat of paint, we handle the jobs that keep your home running beautifully.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#request">Book a handyman <i data-lucide="arrow-right"></i></a>
          <a class="text-link" href="tel:5618921279"><i data-lucide="phone"></i> Talk to a pro</a>
        </div>
        <div class="trust-row"><span><i data-lucide="shield-check"></i> Licensed & insured</span><span><i data-lucide="star"></i> 5-star local service</span></div>
      </div>
      <div class="hero-image-wrap">
        <img class="hero-image" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85" alt="Handyman making an interior home repair" />
        <div class="availability-card"><span class="status-dot"></span><div><strong>Available today</strong><small>Fast, friendly help when it matters</small></div><i data-lucide="clock-3"></i></div>
        <div class="hero-stat"><strong>10+</strong><span>Years serving<br>local homes</span></div>
      </div>
    </section>

    <section class="service-strip" id="services">
      <p>Small jobs. Big relief.</p>
      <div class="service-pills"><span>Repairs</span><span>Installations</span><span>Painting</span><span>Assembly</span><span>Maintenance</span></div>
    </section>

    <section class="services-section">
      <div class="section-heading"><p class="eyebrow">What we do</p><h2>The little things<br><em>make a big difference.</em></h2></div>
      <p class="section-intro">One trusted call for repairs, improvements, and the projects you have been putting off.</p>
      <div class="service-grid">
        <article><span class="service-number">01</span><i data-lucide="wrench"></i><h3>Repairs & fixes</h3><p>Doors, drywall, trim, fixtures, leaks, and all the small jobs that need a skilled hand.</p><a href="#request">Explore repairs <i data-lucide="arrow-right"></i></a></article>
        <article><span class="service-number">02</span><i data-lucide="calendar-days"></i><h3>Home refresh</h3><p>Painting, caulking, hardware updates, and practical changes that make spaces feel new.</p><a href="#request">Plan a refresh <i data-lucide="arrow-right"></i></a></article>
        <article><span class="service-number">03</span><i data-lucide="shield-check"></i><h3>Smart maintenance</h3><p>Stay ahead of wear and tear with proactive upkeep for the home you count on every day.</p><a href="#request">Keep it cared for <i data-lucide="arrow-right"></i></a></article>
      </div>
    </section>

    <section class="process" id="how-it-works">
      <div><p class="eyebrow">Simple by design</p><h2>Good help should<br>feel easy.</h2></div>
      <ol><li><span>1</span><div><strong>Tell us what needs doing</strong><p>Call or send a request with a few details.</p></div></li><li><span>2</span><div><strong>Get a clear plan</strong><p>We confirm the scope, timing, and next step.</p></div></li><li><span>3</span><div><strong>Enjoy a job well done</strong><p>We arrive ready to work and leave things better.</p></div></li></ol>
    </section>

    <section class="request-section" id="request">
      <div class="request-copy"><p class="eyebrow">Ready when you are</p><h2>Let’s take care of<br><em>that list.</em></h2><p>Tell us a bit about your project. We’ll get back to you quickly with the best next step.</p><a class="header-phone" href="tel:5618921279"><i data-lucide="phone"></i><span>561-892-1279<small>Prefer to call? We answer.</small></span></a></div>
      <form class="request-form"><label>Your name<input required name="name" placeholder="Name" /></label><label>Best phone number<input required name="phone" type="tel" placeholder="(000) 000-0000" /></label><label>What can we help with?<textarea required name="details" placeholder="A few details about the job..."></textarea></label><button class="button button-primary" type="submit">Send my request <i data-lucide="arrow-right"></i></button><p class="form-message" role="status"></p></form>
    </section>
  </main>

  <footer><a class="brand" href="#top"><span class="brand-mark"><i data-lucide="wrench"></i></span><span><strong>24 HR</strong><small>HANDYMAN SERVICES</small></span></a><p>Home repairs, done right.</p><span>© 2026 24 HR Handyman Services</span></footer>
`

createIcons({ icons: { ArrowRight, CalendarDays, Check, Clock3, Menu, Phone, ShieldCheck, Star, Wrench, X } })

const form = document.querySelector<HTMLFormElement>('.request-form')!
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const message = form.querySelector<HTMLParagraphElement>('.form-message')!
  message.innerHTML = '<i data-lucide="check"></i> Thanks! We will be in touch shortly.'
  createIcons({ icons: { Check } })
  form.reset()
})

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!
const mobileNav = document.querySelector<HTMLElement>('.mobile-nav')!
menuButton.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open')
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
  menuButton.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}"></i>`
  createIcons({ icons: { Menu, X } })
})

mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('is-open')
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.setAttribute('aria-label', 'Open menu')
  menuButton.innerHTML = '<i data-lucide="menu"></i>'
  createIcons({ icons: { Menu } })
}))
