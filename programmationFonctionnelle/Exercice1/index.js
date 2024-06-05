        function calculerPourboire(montantTotal, service) {
    const ratings = {
      "terrible": 0,
      "poor": 0.05,
      "good": 0.10,
      "great": 0.15,
      "excellent": 0.20
    };
  
    service = service.toLowerCase(); 
    if (!ratings[service]) {
      return "Rating not recognised";
    }
  
    const pourboire = montantTotal * ratings[service];
    return Math.ceil(pourboire);
  }
  
  console.log(calculerPourboire(100, "Good"));
  console.log(calculerPourboire(50, "EXCELLENT"));
  console.log(calculerPourboire(200, "Poor"));
  console.log(calculerPourboire(150, "Unknown"));