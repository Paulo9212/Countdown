//Gerando a data contador.
function randomDate() {
  var start = new Date();
  var end = new Date(2070, 0, 1);
  var timestamp = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return timestamp;
}

function contador() {
  const dead = randomDate();
  console.log('resto', dead);

  // var deadline = new Date('Jan 5, 2018 15:37:25').getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var time = dead - now;

    var years = Math.floor(time / (1000 * 60 * 60 * 24 * 360) / 12);
    var month = Math.floor(time / (1000 * 60 * 60 * 24 * 30) / 30);
    var days = Math.floor(time / (1000 * 60 * 60 * 24 * 24) / 30);
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById('demo').innerHTML = `
    <hr>
    <div id='contagem'>
    <h2>${years} <s style='font-size:20px;text-decoration: none;'>ANO(s)</s>
   ${month} <s style='font-size:20px;text-decoration: none;'>mês(s) </s> 
   ${days} <s style='font-size:20px;text-decoration: none;'>dia(s) </s> 
   ${minutes}<s style='font-size:20px;text-decoration: none;'>minutos  </s> 
   ${seconds}<s style='font-size:20px;text-decoration: none;'>segundos </s>  </h2><div>`;
    if (time < 0) {
      clearInterval(x);
      document.getElementById('demo').innerHTML = 'EXPIRED';
    }
  }, 1000);
  document.querySelector('.button').style.display = 'none';
  // console.log(randomDate());
}
