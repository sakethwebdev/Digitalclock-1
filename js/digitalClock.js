
window.onload = function(){
    getTime()
}
function getTime(){
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    var ms = today.getMilliseconds()
    var da=today.getDate()
    var day=today.getMonth()
    var year=today.getFullYear()
    var month=day+1
   
    h = chckePrependZero(h)
    m = chckePrependZero(m)
    s = chckePrependZero(s)
    ms = chckePrependZero(ms)

    var timezone = function(h){

        if(h<12)
            return "AM"
        else
        return "PM"

    }

    document.getElementById('clockDisplayId').innerHTML = h+":"+m+":"+s+" "+timezone()
    document.getElementById('clockDisplayDate').innerHTML = da+"/"+month+"/"+year
}
setInterval("getTime()", 100)

var chckePrependZero = function(value){
    if(value<10)
        return "0"+value    
    else
        return value    
}


