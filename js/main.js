function TimeLife(){
    var name = document.getElementById("in1").value;
    var date = document.getElementById("in2").value;
    
    var ndate=["", "", ""];
    var snd=0;
    for(var i=0; i<date.length; i++){
        if(date[i]!='.'){
            ndate[snd]+=date[i];
        }else snd++;
    }
    
    var d= new Date();
    
    if(d.getDay()>=ndate[0]){
    var day=d.getDay() - parseInt(ndate[0],10);
    }else day= (Date.prototype.getDaysInMonth()-parseInt(ndate[0],10))+d.getDay();
    
    if(d.getMonth()>=ndate[1]){
        var month =d.getMonth() - parseInt(ndate[1],10);
    } else  month =d.getMonth() - parseInt(ndate[1],10)+12;
    
    if(d.getMonth()<=ndate[1]){
        var year = d.getFullYear() - parseInt(ndate[2],10)-1 ;
    }else year = d.getFullYear() - parseInt(ndate[2],10);
    
var startTimeOfCurrentYear = (new Date(d.getFullYear()-1, parseInt(ndate[1])-1,parseInt(ndate[0]))).getTime();
var currentTime = d.getTime();
var pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
var hourOfMillisecs = 3600000;
var hoursOfOneWeek = 168;

    
    alert(name + " прожил: " + year +"year "+ month +"month "+ (pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek).toFixed()+"week " +day +"day " + d.getHours() +"hours " + d.getMinutes()+"minutes");
}

Date.prototype.getDaysInMonth = function ()
{
    var l = new Date;
    var here = new Date(l.getTime());
    here.setDate(32);
    return 32 - here.getDate();
};




