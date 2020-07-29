

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000) .then(() => alert('runs after 3 seconds'));
 
  
  
  function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
  }
  
  delay(3000) .then(() => alert('runs after 3 seconds'));



  var red = setTimeout(john, 3000)


  function john(){
      alert("works")
  }
  