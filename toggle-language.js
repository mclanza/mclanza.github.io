// toggle-language.js
function goTo(lang){
  // lang: 'es' or 'en'
  if(lang === 'es'){
    // if already on spanish just return
    if(location.pathname.endsWith('index-es.html') || location.pathname.endsWith('proyectos.html')) {
      // if current is projects, go to spanish projects
      if(location.pathname.endsWith('projects.html')) location.href = 'proyectos.html';
      else location.href = 'index-es.html';
    } else {
      location.href = 'index-es.html';
    }
  } else {
    if(location.pathname.endsWith('index.html') || location.pathname.endsWith('projects.html')) {
      if(location.pathname.endsWith('proyectos.html')) location.href = 'projects.html';
      else location.href = 'index.html';
    } else {
      location.href = 'index.html';
    }
  }
}
