const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const errorMessage = document.getElementById("errorMessage");

const months = [
"Januari","Februari","Maret","April","Mei","Juni",
"Juli","Agustus","September","Oktober","November","Desember"
];

const days = [
"Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"
];

const now = new Date();
const currentYear = now.getFullYear();

months.forEach((month,index)=>{
let option=document.createElement("option");
option.value=index;
option.textContent=month;
monthSelect.appendChild(option);
});

monthSelect.value=0;

for(let y=1980;y<=2050;y++){

let option=document.createElement("option");
option.value=y;
option.textContent=y;

if(y===currentYear){
option.selected=true;
}

yearSelect.appendChild(option);

}

document.getElementById("todayBtn").addEventListener("click",()=>{

const today=new Date();

document.getElementById("day").value=today.getDate();
monthSelect.value=today.getMonth();
yearSelect.value=today.getFullYear();

});

document.getElementById("dateForm").addEventListener("submit",(e)=>{

e.preventDefault();

errorMessage.textContent="";

const day=parseInt(document.getElementById("day").value);
const month=parseInt(monthSelect.value);
const year=parseInt(yearSelect.value);
const addDays=parseInt(document.getElementById("addDays").value);

const maxDay=new Date(year,month+1,0).getDate();

if(day>maxDay){

errorMessage.textContent=
"Tanggal tidak valid. Bulan "+months[month]+" hanya memiliki "+maxDay+" hari.";

document.getElementById("resultDate").textContent="-";

return;

}

let date=new Date(year,month,day);

date.setDate(date.getDate()+addDays);

const resultDay=date.getDate();
const resultMonth=months[date.getMonth()];
const resultYear=date.getFullYear();
const resultDayName=days[date.getDay()];

document.getElementById("resultDate").innerText=
resultDayName+", "+resultDay+" "+resultMonth+" "+resultYear;

});