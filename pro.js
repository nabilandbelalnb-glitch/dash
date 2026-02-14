let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

const tbody = document.getElementById("tbody");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const categoryInput = document.getElementById("category");
const stockInput = document.getElementById("stock");
const imageInput = document.getElementById("image");
const submitBtn = document.getElementById("submit");
const searchInput = document.getElementById("search");

function render(data = products){
  tbody.innerHTML = "";
  data.forEach((p,i)=>{
    tbody.innerHTML += `
      <tr>
        <td><img src="${p.image}"></td>
        <td>${p.name}</td>
        <td>$${p.price}</td>
        <td>${p.category}</td>
        <td>${p.stock}</td>
        <td>
          <button class="edit" onclick="editProduct(${i})">Edit</button>
          <button class="delete" onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

submitBtn.onclick = function(){
  const reader = new FileReader();
  reader.onload = function(){
    const product = {
      name:nameInput.value,
      price:priceInput.value,
      category:categoryInput.value,
      stock:stockInput.value,
      image:reader.result
    };

    editIndex === null
      ? products.push(product)
      : products[editIndex] = product;

    localStorage.setItem("products",JSON.stringify(products));
    clearForm();
    render();
    editIndex = null;
  };

  if(imageInput.files[0])
    reader.readAsDataURL(imageInput.files[0]);
};

function editProduct(i){
  const p = products[i];
  nameInput.value = p.name;
  priceInput.value = p.price;
  categoryInput.value = p.category;
  stockInput.value = p.stock;
  editIndex = i;
}

function deleteProduct(i){
  products.splice(i,1);
  localStorage.setItem("products",JSON.stringify(products));
  render();
}

function clearForm(){
  nameInput.value="";
  priceInput.value="";
  categoryInput.value="";
  stockInput.value="";
  imageInput.value="";
}

searchInput.oninput = function(){
  const v = this.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(v)
  );
  render(filtered);
};

render();
