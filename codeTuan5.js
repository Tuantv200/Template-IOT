function on1() {
    let text= "Bật đèn ?"
    if( confirm(text) == true){
        document.getElementById('led1').src='bongdensang.jpg';
    }   
}
function off1() {
    let text= "Tắt đèn ?"
    if( confirm(text) == true){
        document.getElementById('led1').src='bongden.jpg';
    }   
}
function on2() {
    let text= "Turn on"
    if( confirm(text) == true){
        document.getElementById('led2').src='bongdensang.jpg';
    }   
}
function off2() {
    let text= " Turn off"
    if( confirm(text) == true){
        document.getElementById('led2').src='bongden.jpg';
    }   
}
const nds =[0,0,0,0,0,0,0,0,0,0,0,0];
const das =[0,0,0,0,0,0,0,0,0,0,0,0];
const ass =[0,0,0,0,0,0,0,0,0,0,0,0];
setInterval(function(){
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);   
    let z = Math.floor(Math.random()*100);
    
    
    function nhietDo() {    
        document.getElementById("text1").innerHTML = x + " °C";
        if( x >=0 && x < 32){
            document.getElementById("box1").style.backgroundImage = "linear-gradient(rgb(224, 238, 147),rgb(242, 182, 174))";
        }
        else if( x >= 32 && x < 60 ) {
            document.getElementById("box1").style.backgroundImage  = "linear-gradient(rgb(234, 251, 0),rgb(249, 74, 5))";
        }
        else {
            document.getElementById("box1").style.backgroundImage  =  "linear-gradient(rgb(242, 86, 86),rgb(251, 5, 5))";
        }
    }
    nhietDo();

    function doAm() {
        document.getElementById("text2").innerHTML =  y + " % ";
        if( y >=0 && y < 30) {
            document.getElementById("box2").style.backgroundImage = "linear-gradient(rgb(194, 176, 239),rgb(135, 92, 243))";
        }
        else if( y >= 31 && y < 60 ) {
            document.getElementById("box2").style.backgroundImage = "linear-gradient(rgb(132, 90, 238),rgb(102, 45, 247))";
        }
        else {
            document.getElementById("box2").style.backgroundImage = "linear-gradient(rgb(78, 84, 239),rgb(0, 8, 251))";
        }
    }
    doAm();

    function anhSang() {  
        document.getElementById("text3").innerHTML = z + " Lux";
        if( z >=0 && z < 20) {
            document.getElementById("box3").style.backgroundImage = "linear-gradient(rgb(249, 249, 222),rgb(245, 245, 124))";
        }
        else if( z >= 20 && z < 50 ) {
            document.getElementById("box3").style.backgroundImage = "linear-gradient(rgb(255, 245, 124),rgb(240, 240, 72))";
        }
        else {
            document.getElementById("box3").style.backgroundImage = "linear-gradient(yellow,red)";
        }
    }
    anhSang();

    function bieuDo(){
        nds.push(x); nds.shift();
        das.push(y); das.shift();
        ass.push(z); ass.shift();
    }
    bieuDo();

    Highcharts.chart('container', {
        title: {
          text: 'Biểu đồ thống kê dữ liệu cảm biến'
        },
  
        yAxis: {
            min:0,
            max:100
        },
        
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          
        },
        
        options: {
            scales: {
              y: {
                beginAtZero: true,     
            }
          },},
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
          
          }
        },
        
        series: [{
          name: 'Nhiệt độ',
          data: nds
        },{
          name: 'Độ ẩm',
          data: das
        }, {
          name: 'Ánh sáng',
          data: ass
        },],
        
        responsive: {
          rules: [{
            condition: {
              maxWidth: 100,
              minWidth:0
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
        
        });
},2000);
