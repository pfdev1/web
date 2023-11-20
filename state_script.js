(function getIP(json) {
     if (json && json.region) {
         document.body.innerHTML = document.body.innerHTML.replace("America", json.region);
     }
})();
