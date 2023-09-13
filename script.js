let city=document.getElementById("city");
let submit=document.getElementById("submit");
var img=document.getElementById("image");
let temp=document.getElementById("temp");
let nameof=document.getElementById("name");
let humidity=document.getElementById("humidity");
let wind=document.getElementById("wind");
let hide=document.querySelector(".contents");
let st=document.getElementById("st");
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api="&appid=eb3a1f692ff3c70d8427a0cbfc4c8b06";
var cityy=city.value;


async function searching(){
    const r=await fetch(url+city.value+api);
    if(r.status!=404 ){ 
    const data= await r.json();
    console.log(data);
    hide.style.display="block";
    st.style.display="none";
    nameof.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    wind.innerHTML=data.wind.speed+" km/h";
    humidity.innerHTML=data.main.humidity+"%";
    if(data.main.temp>=20){
        img.src="sun.jpg";
    }
    else if(data.main.temp>=5)
    {
        img.src="cloudy.png";
    }
    else{
        img.src="rainy.png";
    }

}
else
{
  hide.style.display="none";
  st.style.display="block";

}
}
submit.addEventListener("click",()=>{
    if(city.value!="")searching();
});
