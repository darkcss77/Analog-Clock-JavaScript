let hr = document.querySelector("#hr");
let sc = document.querySelector("#sc");
let mn = document.querySelector("#mn");

setInterval(()=>{
  let date = new Date();
  let hh = date.getHours()* 30;
  let mm = date.getMinutes()* 6;
  let ss = date.getSeconds()* 6;

  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

