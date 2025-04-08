// purecookie.js

// Defina as variáveis de texto para o aviso de cookies
var purecookieTitle = "Cookies.";
var purecookieDesc = "By using this website, you automatically accept that we use cookies.";
var purecookieLink = '<a href="https://www.cssscript.com/privacy-policy/" target="_blank">What for?</a>';
var purecookieButton = "Understood";

// Função para fazer um elemento HTML aparecer com um efeito de fade-in
function pureFadeIn(elementId, display) {
  var element = document.getElementById(elementId);
  element.style.opacity = 0;
  element.style.display = display || "block";

  function fadeInAnimation() {
    var opacity = parseFloat(element.style.opacity);
    if ((opacity += 0.02) > 1) {
      return;
    }
    element.style.opacity = opacity;
    requestAnimationFrame(fadeInAnimation);
  }

  fadeInAnimation();
}

// Função para fazer um elemento HTML desaparecer com um efeito de fade-out
function pureFadeOut(elementId) {
  var element = document.getElementById(elementId);
  element.style.opacity = 1;

  function fadeOutAnimation() {
    element.style.opacity -= 0.02;
    if (element.style.opacity < 0) {
      element.style.display = "none";
      return;
    }
    requestAnimationFrame(fadeOutAnimation);
  }

  fadeOutAnimation();
}

// Função para definir um cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para obter o valor de um cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Função para apagar um cookie
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Função principal para exibir o aviso de cookies se ele ainda não foi aceito
function cookieConsent() {
  if (!getCookie("purecookieDismiss")) {
    var cookieContainer = document.createElement('div');
    cookieContainer.className = 'cookieConsentContainer';
    cookieContainer.id = 'cookieConsentContainer';
    cookieContainer.innerHTML = `
      <div class="cookieTitle"><a>${purecookieTitle}</a></div>
      <div class="cookieDesc"><p>${purecookieDesc} ${purecookieLink}</p></div>
      <div class="cookieButton"><a onClick="purecookieDismiss();">${purecookieButton}</a></div>
    `;
    document.body.appendChild(cookieContainer);
    pureFadeIn("cookieConsentContainer");
  }
}

// Função para dispensar o aviso de cookies (definir o cookie de aceitação e fazer o aviso desaparecer)
function purecookieDismiss() {
  setCookie("purecookieDismiss", "1", 7); // Define o cookie para expirar em 7 dias
  pureFadeOut("cookieConsentContainer");
}

// Execute a função cookieConsent quando a página for totalmente carregada
window.onload = function() {
  cookieConsent();
};