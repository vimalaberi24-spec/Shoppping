let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCount();

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
}

function updateCount(){
  let c = document.getElementById("count");
  if(c) c.innerText = cart.length;
}

function goProducts(){
  window.location.href = "products.html";
}

function displayCart(){
  let container = document.getElementById("cart-items");
  let total = 0;

  if(container){
    container.innerHTML = "";
    cart.forEach(item=>{
      container.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
      total += item.price;
    });
    document.getElementById("total").innerText = total;
  }
}

function clearCart(){
  localStorage.removeItem("cart");
  location.reload();
}

displayCart();
