document.addEventListener('DOMContentLoaded', function(){
  setTimeout(()=>{
    const splash = document.getElementById('splash');
    if (splash){
      splash.animate(
        [{transform:'translateY(0)'},{transform:'translateY(-2px)'},{transform:'translateY(0)'}],
        {duration:300, iterations:1}
      );
      splash.classList.add('fade-out');
      splash.addEventListener('animationend', ()=>{
        splash.style.display='none';
        const app = document.getElementById('app');
        if (app){
          app.classList.add('visible');
          app.removeAttribute('aria-hidden');
        }
      }, {once:true});
    }
  },1500);

  if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
});