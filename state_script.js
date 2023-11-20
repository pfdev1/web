let script = document.createElement("script");
script.type = "application/javascript";
script.src = "https://api.ipdata.co?api-key=37bd42ba38ae036c438a02ad99db73d3af47ffe552a1217cd2961a2d&callback=getIP";
document.head.appendChild(script);

script.addEventListener('load', function getIP(json) {
     console.log(json);
     if (json && json.region) {
         document.body.innerHTML = document.body.innerHTML.replace("America", json.region);
     }
});
