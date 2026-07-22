---
permalink: /
title: ""
layout: home
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<!-- ===================== ABOUT / HERO ===================== -->
<section id="about" class="home-section home-hero">
  <div class="hero-inner">
    <div class="hero-avatar">
      <img src="{{ base_path }}/images/image_duyguvargun.png" alt="Duygu Vargun" width="130" height="165" style="width:130px;height:165px;object-fit:cover;border-radius:50%;display:block;flex:0 0 auto;" />
    </div>
    <div class="hero-text">
      <h1 class="hero-name">Duygu Vargun, Ph.D.</h1>
      <p class="hero-role">Postdoctoral Research Associate · Rice University</p>
      <p class="hero-bio">
        I am a postdoctoral research associate in the Computational Modeling of Porous Media
        group under the supervision of
        <a href="https://compm.rice.edu/people-2/beatrice-riviere/">Beatrice Riviere</a>
        at Rice University. Previously, I was a postdoctoral associate in the Multiscale
        Methods and Dynamics Group at Oak Ridge National Laboratory. I earned my Ph.D. in
        computational mathematics from Clemson University under the supervision of
        <a href="https://www.math.clemson.edu/~rebholz/">Leo Rebholz</a> in 2023.
      </p>
      <div class="hero-actions">
        <a class="hero-btn hero-btn--primary" href="https://scholar.google.com/citations?user=cpB4pUUAAAAJ&hl=en" target="_blank" rel="noopener">
          <i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar
        </a>
        <a class="hero-btn" href="mailto:duygu.vargun@rice.edu">
          <i class="fas fa-envelope" aria-hidden="true"></i> Email
        </a>
        <a class="hero-btn" href="https://orcid.org/0000-0002-0734-467X" target="_blank" rel="noopener">
          <i class="ai ai-orcid" aria-hidden="true"></i> ORCID
        </a>
        <a class="hero-btn" href="https://www.linkedin.com/in/duygu-vargun-19b71a140" target="_blank" rel="noopener">
          <i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
        </a>
        <a class="hero-btn" href="https://github.com/dvargun" target="_blank" rel="noopener">
          <i class="fab fa-github" aria-hidden="true"></i> GitHub
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ===================== RESEARCH ===================== -->
<section id="research" class="home-section">
  <h2 class="section-title">Research</h2>
  <p class="section-lead">
    My research focuses on the rigorous mathematical analysis of numerical methods,
    the physical interpretation of partial differential equations, and validating those
    insights through comprehensive computational experiments.
  </p>
  <div class="research-grid">
    <div class="research-card">
      <h3>Numerical Analysis &amp; FEM</h3>
      <p>Finite element methods and rigorous numerical analysis for systems of nonlinear PDEs.</p>
    </div>
    <div class="research-card">
      <h3>Iterative &amp; Fixed-Point Methods</h3>
      <p>Nonlinear solvers, fixed-point iterations, and Anderson acceleration for improved convergence.</p>
    </div>
    <div class="research-card">
      <h3>Data Assimilation</h3>
      <p>Continuous data assimilation techniques for recovering and forecasting fluid flows.</p>
    </div>
    <div class="research-card">
      <h3>Complex Fluids &amp; Plasma Dynamics</h3>
      <p>Numerical methods for viscoelastic and viscoplastic fluids, plasma dynamics, and biomedical systems.</p>
    </div>
  </div>
</section>

<!-- ===================== TALKS ===================== -->
<section id="talks" class="home-section">
  <h2 class="section-title">Talks</h2>
  {% assign talks = site.talks | sort: "date" | reverse %}
  {% if talks.size > 0 %}
    <ul class="talk-list">
      {% for talk in talks %}
        <li class="talk-item">
          <div class="talk-main">
            <span class="talk-title">{{ talk.title }}</span>
            {% if talk.venue or talk.location %}
              <span class="talk-venue">
                {{ talk.venue }}{% if talk.venue and talk.location %}, {% endif %}{{ talk.location }}
              </span>
            {% endif %}
          </div>
          {% if talk.date %}
            <span class="talk-date">{{ talk.date | date: "%b %Y" }}</span>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p class="section-lead">Selected talks and presentations will be listed here soon.</p>
  {% endif %}
</section>

<!-- ===================== CONTACT ===================== -->
<section id="contact" class="home-section">
  <h2 class="section-title">Contact</h2>
  <p class="section-lead">
    I am always happy to connect about numerical analysis, scientific computing, and
    collaborations. The fastest way to reach me is by email.
  </p>
  <ul class="contact-list">
    <li><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:duygu.vargun@rice.edu">duygu.vargun@rice.edu</a></li>
    <li><i class="fas fa-location-dot" aria-hidden="true"></i> Rice University, Houston, TX</li>
    <li><i class="ai ai-google-scholar" aria-hidden="true"></i> <a href="https://scholar.google.com/citations?user=cpB4pUUAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></li>
    <li><i class="ai ai-orcid" aria-hidden="true"></i> <a href="https://orcid.org/0000-0002-0734-467X" target="_blank" rel="noopener">ORCID</a></li>
    <li><i class="fab fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/duygu-vargun-19b71a140" target="_blank" rel="noopener">LinkedIn</a></li>
    <li><i class="fab fa-github" aria-hidden="true"></i> <a href="https://github.com/dvargun" target="_blank" rel="noopener">GitHub</a></li>
  </ul>
</section>
