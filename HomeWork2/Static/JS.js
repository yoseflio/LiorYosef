const activePage = window.location.pathname;
console.log(window);
console.log(window.location);
console.log(activePage);

const navLinks = document.querySelectorAll('a').forEach(link => {    
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
  });

  var slider = document.getElementById("TEMP");
  var outputTemp = document.getElementById("tempC");
  var outputTemp2 = document.getElementById("tempF");
  
  
  var outRest = document.getElementById("test");
  var outT = slider.value;
  var add = parseInt(outT);
  
  outRest.innerHTML = add;
  
  outputTemp.innerHTML = slider.value;
  
  outputTemp2.innerHTML = roundUp(CF(slider.value), 2);
  
  slider.oninput = function() {
    outputTemp.innerHTML = this.value;
    outputTemp2.innerHTML = roundUp(CF(this.value), 2);
    outT = this.value;
    outRest.innerHTML = parseInt(outT);
  }
  
  
  function CF(CF) {
    rest = (CF * (9 / 5)) + 32
    return rest
  }
  
  function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
  }
  
  function add(T, H) {
    rest = parseInt(T) + parseInt(H)
    return rest
  }

  
function submitBday() {
    var Q4A = "Your birthday is: ";
    var Bdate = document.getElementById('date').value;
    var Bday = +new Date(Bdate);
    Q4A += Bdate + ". You are " + ~~ ((Date.now() - Bday) / (31557600000));
    var theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}
