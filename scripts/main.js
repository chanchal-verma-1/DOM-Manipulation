document.getElementById("add-row").addEventListener('click', ()=>{
  let trCount = document.getElementsByClassName("tr-count").length+1;
    
  let tableRef = document.querySelector('TABLE');
  let newRow = tableRef.insertRow(-1);
  newRow.className += "tr-count";

  let td1 = newRow.insertCell(0);
  td1.innerHTML = "<b>"+trCount+"</b>";

  let td2 = newRow.insertCell(1);
  td2.innerHTML = "User Name "+ trCount;

  let td3 = newRow.insertCell(2);
  td3.innerHTML = Math.floor((Math.random() * 100000));
  
  let td4 = newRow.insertCell(3);
  td4.innerHTML = "<div class='icons8-delete' id='delete' onclick='delete_row(this)'></div>";

});


delete_row = (trNum)=>{
  var x = trNum.parentNode.parentNode.rowIndex;
  document.querySelector('TABLE').deleteRow(x);
}


document.getElementById("change-css").addEventListener('click', ()=>{
  let bgcolors = ["red", "pink", "orange","aliceblue", "green", "yellow"];

  let index = document.querySelector('#change-css').getAttribute("value");
  
  index++;
  if(index>bgcolors.length)
      index = 1;
  document.querySelector('BODY').style.backgroundColor = bgcolors[index-1];
  document.querySelector('#change-css').setAttribute("value", index);
});


document.getElementById("reset").addEventListener('click', ()=>{
  location.reload();
});























































// Script End