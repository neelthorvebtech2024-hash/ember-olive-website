js/script.js
// Reservation Confirmation
document.getElementById("reservationForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("confirmation").textContent = `Thank you, ${name}! Your reservation has been received.`;
  this.reset();
});

// Category Switch
function showCategory(category) {
  document.querySelectorAll(".category").forEach(c => c.style.display = "none");
  document.getElementById(category).style.display = "block";
}

// Cart Logic
let total = 0;
function addToCart(item, price) {
  const cartList = document.getElementById("cartList");
  if(!cartList) return;
  const li = document.createElement("li");
  li.textContent = `${item} - ₹${price}`;
  cartList.appendChild(li);
  total += price;
  document.getElementById("totalPrice").textContent = total;
}

