function getIP(json) {
     if (json && json.region) {
        const states = ["Colorado", "Utah", "California", "Florida", "Georgia", "Alabama"];
        const shuffle = states.sort(() => 0.5 - Math.random());
        const x = json.region + ", " + shuffle.slice(0, 2).join(", ");
        document.body.innerHTML = document.body.innerHTML.replace("America", x);
     }
}
let script = document.createElement("script");
script.type = "application/javascript";
script.src = "https://api.ipdata.co?api-key=37bd42ba38ae036c438a02ad99db73d3af47ffe552a1217cd2961a2d&callback=getIP";
document.head.appendChild(script);
