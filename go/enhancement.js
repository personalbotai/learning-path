// enhancement.js — Premium interactions v2 (compatible with new layout)
(function(){
  // Light/dark preference
  const KEY='theme';
  function applyTheme(t){
    document.body.classList.toggle('light', t==='light');
    const icon=document.getElementById('themeToggleIcon');
    if(icon) icon.className = t==='light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem(KEY,t);
  }
  function initTheme(){
    const saved=localStorage.getItem(KEY);
    if(saved) applyTheme(saved);
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) applyTheme('light');
  }
  function toggleTheme(){
    const isLight=document.body.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  }

  function init(){
    initTheme();
    const btn=document.getElementById('themeToggle');
    if(btn) btn.addEventListener('click', toggleTheme);
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',e=>{
        const href=a.getAttribute('href');
        if(href.length>1){
          const t=document.querySelector(href);
          if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
        }
      });
    });
    // Add fade-in observer for cards
    if('IntersectionObserver' in window){
      const obs=new IntersectionObserver(ents=>{
        ents.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in-view'); });
      },{threshold:.1});
      document.querySelectorAll('.mini-card,.panel').forEach(el=>obs.observe(el));
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // Expose for debugging
  window.__goThemeToggle=toggleTheme;
})();
