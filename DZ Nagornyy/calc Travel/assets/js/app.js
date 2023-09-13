    
    let square = document.getElementById("square");
  
    let floor = document.getElementById("floor");
    
    let materialType = document.getElementById("materialType");
      
    let cost = 0;

    function calculateCost(){
        console.log('calc cost')
        switch(Number(document.getElementById('materialType').value)) {
            case 0: cost = 0; break;
            case 1: cost = 205; break;
            case 2: cost = 200; break;
            case 3: cost = 1444; break;
            case 4: cost = 1830; break;
            case 5: cost = 5200; break;
            case 6: cost = 1333; break;
            case 7: cost = 720; break;
            case 8: cost = 41; break;
            
        }
        
        function makeMoney(n){
            return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1");
        }
    
        totalCost = cost*Number(document.getElementById('floor').value)/100*55;
        saleCost = totalCost/Number(document.getElementById('square').value)
        timeCost = cost/66

        // document.getElementById('totalCost').innerHTML = totalCost;
        document.getElementById('totalCost').innerHTML = makeMoney(totalCost);
        document.getElementById('saleCost').innerHTML = makeMoney(saleCost);
        document.getElementById('timeCost').innerHTML = makeMoney(timeCost);
    }
    


     





