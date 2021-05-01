 function getupdate() {
    tit = document.getElementById('title').value;
    des = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
      itemJsonArray = [];
      itemJsonArray.push([tit, des]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([tit, des]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
 }
 function update() {
  if(localStorage.getItem('itemsJson')==null){
    itemJsonArray = [];
  }
  else{
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  let tabu = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
      str += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
      </tr>`;
  });
  tabu.innerHTML = str;
 }
   let add = document.getElementById("add");
   add.addEventListener("click", getupdate);
   update();

   function deleted(item) {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(item, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();
   }
