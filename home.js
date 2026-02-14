
fetch("tr.json")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);

    const table = document.querySelector("tbody");
    const name = document.querySelector(".name");
    const price = document.querySelector(".price");
    const Count = document.querySelector(".Count");
    const del = document.querySelector(".delete")

    data.forEach((product) => {
      table.innerHTML += `<tr>
      <td class="name">${product.name}</td>
      <td class="price">${product.price}</td>
      <td class="Count">${product.count}</td>
     </tr>`;
    });
  });
