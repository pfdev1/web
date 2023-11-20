function getIP(json) {
     if (json && json.region_code && json.city) {
       const x = json.city + ', ' + json.region_code;
       document.getElementById(title).innerHTML = document.getElementById(title).innerHTML.replace("America", x);
     }
}
let script = document.createElement("script");
script.type = "application/javascript";
script.src = "https://api.ipdata.co?api-key=37bd42ba38ae036c438a02ad99db73d3af47ffe552a1217cd2961a2d&callback=getIP";
document.head.appendChild(script);
