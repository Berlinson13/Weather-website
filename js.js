    
    document.querySelector(".drobtn").addEventListener("click",function(){
        document.getElementById("myDropdown").classList.toggle("show");
    })
    document.body.addEventListener("click",function(){
        document.getElementById("myDropdown").classList.remove("show");
    },true)


      
    let divTownName=document.querySelector("#townName"); 
class NameTowm{
    constructor(name){
        this.name=name;
        divTownName.innerHTML=this.name;
    }  
}
function getActualTime(seconds){
    let date = String(seconds);
            date+="000";
           return Number(date); 
   }
   console.dir(document.getElementById("information"))


function makeTamplate(res,background){
    let template = document.querySelector("#template").innerHTML;
            let rendered = Mustache.render(template, { wind: res.wind.deg, name: new Date(getActualTime(res.dt)).toISOString().substr(0,10),temp:res.main.temp, icon:res.weather[0].icon,
            cloud:res.weather[0].main,speed:res.wind.speed,pressure: res.main.pressure, eastTime:new Date(getActualTime(res.sys.sunrise)).toISOString().substr(11,11), westTime:new Date(getActualTime(res.sys.sunset)).toISOString().substr(11,11)});
            document.getElementById("information").innerHTML =rendered;
            document.querySelector("#townPictures").style.backgroundImage = background;
  } 

function makeFetch(url,background){
    this.url=url;
    checkUnit();
    fetch(this.url)
    .then(resObj=>resObj.json())
    .then(res=>{new NameTowm(res.name);console.log(res);
        makeTamplate(res,background);
        })       
    }
    
function checkUnit(){
    let typeMetrix=document.querySelectorAll("[name='typeMetrix']");
    let unit;
    for(i=0;i<typeMetrix.length;i++){
    if(typeMetrix[i].checked){
         unit= typeMetrix[i].value;
    }   
}
return unit;
}

let urlLink;
    let kievItem= document.querySelector("#kyivClick").addEventListener("click",function(){
    let u =checkUnit();
    makeFetch(`http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=${u}`,'url(/pictures/Kyiv.jpg)')
    });
    let newYorkClick= document.querySelector("#newYorkClick").addEventListener("click",function(){
        let u =checkUnit();
        makeFetch(`http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=${u}`,'url(/pictures/NewYork.jpg)')
    });
    let londonClick= document.querySelector("#londonClick").addEventListener("click",function(){
        let u =checkUnit();
        makeFetch(`http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=${u}`,'url(/pictures/London.jpg)')
    });
   
  


