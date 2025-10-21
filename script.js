// script.js
document.addEventListener('DOMContentLoaded', function(){
  setTimeout(()=>{
    const s = document.getElementById('splash');
    // small vibration + fade
    s.animate([{transform:'translateY(0)'},{transform:'translateY(-2px)'},{transform:'translateY(0)'}], {duration:300, iterations:1});
    s.classList.add('fade-out');
    s.addEventListener('animationend', ()=>{
      s.style.display='none';
      const app = document.getElementById('app');
      app.classList.add('visible');
      app.removeAttribute('aria-hidden');
    }, {once:true});
  }, 2000);
  // register SW (optional)
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
});