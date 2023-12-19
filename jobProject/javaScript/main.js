function funcpair()
{
  let radioBtns = document.querySelectorAll("input[name='pair']");
  let result = document.getElementById("t1");
  let findSelected =() =>
  {
    let selectedValue = document.querySelector('input[name="pair"]:checked').value;
    console.log(selectedValue);
    document.getElementById("t1").innerHTML=selectedValue
      
  }
  radioBtns.forEach(radioBtn =>
 {
    radioBtn.addEventListener("change", findSelected);
  });
   
}

function funcpairone()
{
  document.getElementById("table1").style.display="block";
  document.getElementById("table2").style.display="none";
  document.getElementById("table3").style.display="none";
  document.getElementById("box1").style.backgroundColor='rgb(186, 228, 245)';
  document.getElementById("box2").style.backgroundColor='white';
  document.getElementById("box3").style.backgroundColor='white';
}

function funcpairtwo()
{
  document.getElementById("table2").style.display="block";
  document.getElementById("table1").style.display="none";
  document.getElementById("table3").style.display="none";
  document.getElementById("box2").style.backgroundColor='rgb(186, 228, 245)';
  document.getElementById("box1").style.backgroundColor='white';
  document.getElementById("box3").style.backgroundColor='white';
}

function funcpairthird()
{
  document.getElementById("table3").style.display="block";
  document.getElementById("table2").style.display="none";
  document.getElementById("table1").style.display="none";
  document.getElementById("box3").style.backgroundColor='rgb(186, 228, 245)';
  document.getElementById("box1").style.backgroundColor='white';
  document.getElementById("box2").style.backgroundColor='white';
}

function funcaddcard()
{
  var val= document.getElementById("t1").innerHTML;
  if(val==null || val=="" || val =="undefined")
  {
    alert("Please select the product");
  }
  else
  {
    alert("Added to the card");
  }
}

 