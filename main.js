let input1 = document.querySelector('.num');
let input2 = document.querySelector('.peopleNum');
let input3 = document.querySelector('.custom');
let value1 = document.getElementById('per1').id;
let value2 = document.getElementById('per2').id;
let value3 = document.getElementById('per3').id;
let value4 = document.getElementById('per4').id;
let value5 = document.getElementById('per5').id;

function reset (){
  location.reload();
}
function per1 (){
  perAll(5);
}
function per2 (){
  perAll(10);
}
function per3 (){
  perAll(15);
}
function per4 (){
  perAll(25);
}
function per5 (){
  perAll(50);
}
function perRand () { 
  let in3 = input3.value;
  perAll(in3);
}
function perAll (value) {
  let in1 = input1.value;
  let in2 = input2.value;
  let tip = (((in1 * value)/100)/ in2).toFixed(2);
  let total = (((in1 / in2).toFixed(2))*100 + tip*100)/100;
  if(in1){
    document.querySelector('.js-zero1').innerHTML = `$${tip}`; 
    document.querySelector('.error1').innerHTML = '';
    document.getElementById('num').style.border = 'none';
  }
  if(isNaN(in1)){
    document.querySelector('.error1').innerHTML = 'Not a Number';
    document.querySelector('.js-zero1').innerHTML = `$0.00`;
    document.getElementById('num').style.borderColor = 'Red';
    document.getElementById('num').style.borderWidth = '2px';  
    document.getElementById('num').style.borderStyle = 'solid';
    document.getElementById('peopleNum').style.borderColor = 'Red';
    document.getElementById('peopleNum').style.borderWidth = '2px';  
    document.getElementById('peopleNum').style.borderStyle = 'solid';
    document.querySelector('.js-zero2').innerHTML = `$0.00`;
  }
  else if(in1 === ''){
    document.querySelector('.error1').innerHTML = "can't be empty";
    document.querySelector('.js-zero1').innerHTML = `$0.00`; 
    document.querySelector('.js-zero2').innerHTML = `$0.00`;
    document.getElementById('num').style.borderColor = 'Red';
    document.getElementById('num').style.borderWidth = '2px';  
    document.getElementById('num').style.borderStyle = 'solid';
  }
  else if(in1 === '0'){
    document.querySelector('.error1').innerHTML = "can't be zero";
    document.querySelector('.js-zero1').innerHTML = `$0.00`; 
    document.querySelector('.js-zero2').innerHTML = `$0.00`;
    document.getElementById('num').style.borderColor = 'Red';
    document.getElementById('num').style.borderWidth = '2px';  
    document.getElementById('num').style.borderStyle = 'solid';
  }
  if(in2){
    document.querySelector('.js-zero2').innerHTML = `$${total}`;
    document.querySelector('.error2').innerHTML = '';
    document.getElementById('peopleNum').style.border = 'none';
  }
  if(isNaN(in2)){
    document.querySelector('.error2').innerHTML = 'Not a Number';
    document.querySelector('.js-zero1').innerHTML = `$0.00`; 
    document.querySelector('.js-zero2').innerHTML = `$0.00`;
    document.getElementById('peopleNum').style.borderColor = 'Red';
    document.getElementById('peopleNum').style.borderWidth = '2px';  
    document.getElementById('peopleNum').style.borderStyle = 'solid';
  }
  else if(in2 === ''){
    document.querySelector('.error2').innerHTML = "can't be empty";
    document.querySelector('.js-zero1').innerHTML = `$0.00`; 
    document.querySelector('.js-zero2').innerHTML = `$0.00`;
    document.getElementById('peopleNum').style.borderColor = 'Red';
    document.getElementById('peopleNum').style.borderWidth = '2px';  
    document.getElementById('peopleNum').style.borderStyle = 'solid';
  }
  else if(in2 === '0'){
    document.querySelector('.error2').innerHTML = "can't be zero";
    document.querySelector('.js-zero1').innerHTML = `$0.00`; 
    document.querySelector('.js-zero2').innerHTML = `$0.00`;
    document.getElementById('peopleNum').style.borderColor = 'Red';
    document.getElementById('peopleNum').style.borderWidth = '2px';  
    document.getElementById('peopleNum').style.borderStyle = 'solid';
  }
}

document.querySelector('.js-per1').addEventListener('click', ()=>{
  per1();
  document.getElementById('per1').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.color = 'white';
  document.getElementById('per3').style.color = 'white';
  document.getElementById('per4').style.color = 'white';
  document.getElementById('per5').style.color = 'white';
  document.getElementById('per1').style.backgroundColor = 'hsl(172, 67%, 45%)';
  document.getElementById('per2').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per3').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per4').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per5').style.backgroundColor = 'hsl(183, 100%, 15%)';
});
document.querySelector('.js-per2').addEventListener('click', ()=>{
  per2();
  document.getElementById('per2').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per1').style.color = 'white';
  document.getElementById('per3').style.color = 'white';
  document.getElementById('per4').style.color = 'white';
  document.getElementById('per5').style.color = 'white';
  document.getElementById('per2').style.backgroundColor = 'hsl(172, 67%, 45%)';
  document.getElementById('per2').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per1').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per3').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per4').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per5').style.backgroundColor = 'hsl(183, 100%, 15%)';
});
document.querySelector('.js-per3').addEventListener('click', ()=>{
  per3();
  document.getElementById('per3').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.color = 'white';
  document.getElementById('per1').style.color = 'white';
  document.getElementById('per4').style.color = 'white';
  document.getElementById('per5').style.color = 'white';
  document.getElementById('per3').style.backgroundColor = 'hsl(172, 67%, 45%)';
  document.getElementById('per3').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per1').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per4').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per5').style.backgroundColor = 'hsl(183, 100%, 15%)';
});
document.querySelector('.js-per4').addEventListener('click', ()=>{
  per4();
  document.getElementById('per4').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.color = 'white';
  document.getElementById('per3').style.color = 'white';
  document.getElementById('per1').style.color = 'white';
  document.getElementById('per5').style.color = 'white';
  document.getElementById('per4').style.backgroundColor = 'hsl(172, 67%, 45%)';
  document.getElementById('per4').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per1').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per3').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per5').style.backgroundColor = 'hsl(183, 100%, 15%)';
});
document.querySelector('.js-per5').addEventListener('click', ()=>{
  per5();
  document.getElementById('per5').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.color = 'white';
  document.getElementById('per3').style.color = 'white';
  document.getElementById('per4').style.color = 'white';
  document.getElementById('per1').style.color = 'white';
  document.getElementById('per5').style.backgroundColor = 'hsl(172, 67%, 45%)';
  document.getElementById('per5').style.color = 'hsl(183, 100%, 15%)';
  document.getElementById('per1').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per3').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per4').style.backgroundColor = 'hsl(183, 100%, 15%)';
  document.getElementById('per2').style.backgroundColor = 'hsl(183, 100%, 15%)';
});
document.querySelector('.reset').addEventListener('click', ()=>{
  reset();
});
document.querySelector('.custom').addEventListener('input', ()=>{ 
  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
      perRand();
      document.getElementById('per1').style.color = 'white';
      document.getElementById('per2').style.color = 'white';
      document.getElementById('per3').style.color = 'white';
      document.getElementById('per4').style.color = 'white';
      document.getElementById('per5').style.color = 'white';
      document.getElementById('per1').style.backgroundColor = 'hsl(183, 100%, 15%)';
      document.getElementById('per2').style.backgroundColor = 'hsl(183, 100%, 15%)';
      document.getElementById('per3').style.backgroundColor = 'hsl(183, 100%, 15%)';
      document.getElementById('per4').style.backgroundColor = 'hsl(183, 100%, 15%)';
      document.getElementById('per5').style.backgroundColor = 'hsl(183, 100%, 15%)';
    }});
  });