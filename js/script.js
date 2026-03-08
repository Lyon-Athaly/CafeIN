// Navbar: Toggle Menu
const menuIcon = document.querySelector('#icon-menu');
const navbarLinks = document.querySelector('.navbar-links');

menuIcon.addEventListener('click', function (e) {
    e.preventDefault();
    navbarLinks.classList.toggle('active');
});

// Navbar: Auto close when clicking a link
const navLinks = document.querySelectorAll('.navbar-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
} );

// Cart System
const cartSidebar = document.getElementById("cart-sidebar");
const cartIcon = document.getElementById("icon-cart");
const closeCart = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const orderButtons = document.querySelectorAll(".btn-order");

let cart = [];

// Toggle cart sidebar
cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartSidebar.classList.toggle("show");
    renderCart();
});

// Close cart
closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
});

// Handle "Pesan" button click
orderButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const itemCard = this.closest(".menu-item-card");
        const itemName = itemCard.querySelector("h3").textContent;
        const itemPriceText = itemCard.querySelector(".item-price").textContent;
        const itemPrice = parseInt(itemPriceText.replace(/[^0-9]/g, ""));

        cart.push({ name: itemName, price: itemPrice });
        renderCart();
        // alert(`${itemName} telah ditambahkan ke keranjang.`);
    });
});

// Render cart items with "Hapus" button
function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Keranjang kosong</p>";
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item">
                <p>
                    <strong>${item.name}</strong><br>
                    <small>Rp ${item.price.toLocaleString('id-ID')}</small>
                </p>
                <button onclick="removeFromCart(${index})" class="btn-remove">Hapus</button>
            </div>
        `;
    }).join("");

    cartItemsContainer.innerHTML += `
        <hr>
        <p><strong>Total: Rp ${total.toLocaleString('id-ID')}</strong></p>
    `;
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function showToast(message = "Pesanan berhasil diproses!") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // toast hilang setelah 3 detik
}

const checkoutCart = document.getElementById("checkout-cart");

checkoutCart.addEventListener("click", () => {
  cart.forEach((item) => {
    const card = document.querySelector(
      `.menu-item-card[data-name="${item.name}"]`
    );
    if (card) card.remove();
  });

  cart = [];
  renderCart();
  showToast();i
});

