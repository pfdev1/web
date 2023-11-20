<script type="application/javascript">
   function getIP(json) {
        if (json && json.region) {
            document.body.innerHTML = document.body.innerHTML.replace("America", json.region);
        }
   }
</script>
<script type="application/javascript" src="https://api.ipdata.co?api-key=37bd42ba38ae036c438a02ad99db73d3af47ffe552a1217cd2961a2d&callback=getIP"></script>
