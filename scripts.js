function mobileMenu() {
  var navbar = document.getElementById("navID");
  var extraMenu = document.getElementById("exMenu");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    extraMenu.style.display = "none";
  } else {
    navbar.style.display = "block";
    extraMenu.style.display = "block";
  }
}
function desktopMenu() {
  var moreButt = document.getElementById("moreButton");
  var extraMenu = document.getElementById("exMenu");
  if (extraMenu.style.display === "block") {
    extraMenu.style.display = "none";
    moreButt.innerHTML="More &#9654;";
  } else {
    extraMenu.style.display = "block";
    moreButt.innerHTML="Less &#9660;";
  }
}

function searchEncore(){
     var encoreBaseURLInput,encoreBaseURL, searchInput, scopeInput, searchString, scopeString, locationHref, charRegExString, base64Regex;
    /*base64_encoding_map includes special characters that need to be
     encoded using base64 - these chars are "=","/", "\", "?"
     character : base64 encoded */
     var base64_encoding_map = {"=":"PQ==", "/": "Lw==", "\\":"XA==", "?":"Pw=="};

     var escapeRegExp = function(string) {
         return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
     }
    encoreBaseURLInput = document.getElementById("encoreBase");
    searchInput = document.getElementById("encoreSearchInput");

     if (searchInput && encoreBaseURLInput) {
         encoreBaseURL = encoreBaseURLInput.value;
         searchString = searchInput.value;
         for(var specialChar in base64_encoding_map) {
             charRegExString = escapeRegExp(specialChar);
             base64Regex = new RegExp(charRegExString, "g");
             searchString = searchString.replace(base64Regex, base64_encoding_map[specialChar])
         }
         searchString = encodeURIComponent(searchString);

         scopeInput = document.getElementById('encoreSearchLocation');


if (!searchString) {
alert("Please input a search term and search again.");
      return false;
}


         if (scopeInput) {
             scopeString = scopeInput.value;
         }

         if (scopeString) {
             scopeString = encodeURIComponent(scopeString);
             locationHref = encoreBaseURL + "C__S" + searchString + scopeString +  "__Orightresult__U";
         } else {
locationHref = encoreBaseURL + "C__S" + searchString + "__Orightresult__U";

         }

         languageSetting = document.getElementById("encoreLanguage");

         if (languageSetting) {
             locationHref = locationHref + "?lang=" + languageSetting.value;
         }

         window.location.href = locationHref;
     }
     return false;
 }
