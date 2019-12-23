window.onload= function(){

    var y = new Date().getFullYear()+1;
    var newDay = y+'/1/1 00:00:00';
    var countDate = new Date(newDay);
    
    function newYear() {
      var now = new Date().getTime();
      gap = countDate - now;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var d = Math.floor(gap / day);
      var h = Math.floor((gap % day) / hour);
      var m = Math.floor((gap % hour) / minute);
      var s = Math.floor((gap % minute) / second);
      
      // 此处可删除
      d = addZero(d);
      h = addZero(h);
      m = addZero(m);
      s = addZero(s);
      // func end
      // 显示的年
      document.getElementById('year').innerText = y;
      // 倒计时
      document.getElementById('day').innerText = d;
      document.getElementById('hour').innerText = h;
      document.getElementById('minute').innerText = m;
      document.getElementById('second').innerText = s;
    }
    // 数字小于10前面就加0
    function addZero(num) { 
      return num<10?'0'+num:num
    }
    setInterval(() => {
      newYear()
    }, 1000)
}