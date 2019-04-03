function sellersvalue(){
  var selleramount = [0,0,0,0]
    $.ajax({
      url:"http://157.230.17.132:4022/sales/",
      method: "GET",
      success: function(data){
        for (var i = 0; i < data.length; i++) {
            var salesitem = data[i]
            var amount = salesitem.amount;
            var salesman = salesitem.salesman;
            console.log(salesman);
            var salesnumber=0;

            switch (salesman) {
              case "Riccardo":
                  salesnumber = 0;
              break;
              case "Giuseppe":
                  salesnumber = 1;
              break;
              case "Marco":
                  salesnumber = 2;
              break;
              case "Roberto":
                  salesnumber = 3;
              break;


            }


            selleramount[salesnumber] += Number(amount);

        }
        console.log(selleramount);
        canvasseller(selleramount);
      }
    })
}
function monthvalue(){
var monthAmount = [0,0,0,0,0,0,0,0,0,0,0,0]
  $.ajax({
    url:"http://157.230.17.132:4022/sales/",
    method: "GET",
    success: function(data){
      for (var i = 0; i < data.length; i++) {
          var salesitem = data[i]
          var amount = salesitem.amount;
          var date = salesitem.date;
          var mese = Number(date.substr(3, 2));

          monthAmount[mese-1] += Number(amount);

      }
      console.log(monthAmount);
      canvas(monthAmount);
    }
  })

}
function canvasseller(selleramount){

  var ctx = document.getElementById('sellerChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Riccardo", "Giuseppe", "Marco", "Roberto"],
        datasets: [{
            label: '# of Votes',
            data: selleramount,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
myChart.canvas.parentNode.style.height = '600px';
myChart.canvas.parentNode.style.width = '600px';
}


function canvas(monthAmount){

  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno','luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
        datasets: [{
            label: '# of Votes',
            data: monthAmount,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
myChart.canvas.parentNode.style.height = '600px';
myChart.canvas.parentNode.style.width = '600px';
}

function init(){
monthvalue();
sellersvalue();



}
$(document).ready(init)
