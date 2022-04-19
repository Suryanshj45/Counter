var a=0;
const element = document.getElementById("myBtn1");
element.addEventListener("click", myFunction);
function myFunction() {
  a++;
  document.getElementById("demo").innerHTML = a;
}


const element1 = document.getElementById("myBtn2");
element1.addEventListener("click", myFunction1);
function myFunction1() {
  if(a==0)
  alert("Negative Numbers are not allowed");
  else
  {
  a--;
  document.getElementById("demo").innerHTML = a;
}}
const element2 = document.getElementById("myBtn3");
element2.addEventListener("click", myFunction2);
function myFunction2()
{
  a=0;
  document.getElementById("demo").innerHTML=0;
}
