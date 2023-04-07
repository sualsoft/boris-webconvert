$(document).ready(function () {
if (getCookie("Les-Meilleurs-Belgique") != "true") {
  setTimeout(function() {
      $("#cookieConsent").fadeIn(200);
  }, 1000);
}


$("#footer_privacy_container_button, .footer_privacy_button").click(function() {
  setCookie('Les-Meilleurs-Belgique', 'true', 365);
  $("#cookieConsent").fadeOut(200);
});

});


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

