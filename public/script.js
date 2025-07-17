const API = "";

document.getElementById("addForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
  };
  await fetch(`${API}/addSweet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  e.target.reset();
  loadSweets();
});

document.getElementById("searchTerm").addEventListener("input", async (e) => {
  const term = e.target.value.trim();
  if (term === "") return loadSweets();
  const res = await fetch(`${API}/searchSweet?term=${term}`);
  const data = await res.json();
  renderSweets(data.sweets);
});

async function loadSweets() {
  const res = await fetch(`${API}/viewSweets`);
  const data = await res.json();
  renderSweets(data);
}

async function loadSorted() {
  const key = document.getElementById("sortKey").value;
  const order = document.getElementById("sortOrder").value;
  const res = await fetch(`${API}/sortSweets?key=${key}&order=${order}`);
  const data = await res.json();
  renderSweets(data);
}

function showModal({ title, message, showInput = false, onConfirm }) {
  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalMessage").textContent = message;
  const input = document.getElementById("modalInput");
  input.style.display = showInput ? "block" : "none";
  if (showInput) input.value = "";
  modal.style.display = "flex";
  document.getElementById("modalConfirm").onclick = () => {
    modal.style.display = "none";
    const value = showInput ? Number(input.value) : true;
    onConfirm(value);
  };
  document.getElementById("modalCancel").onclick = () => {
    modal.style.display = "none";
  };
}

function restockSweet(id) {
  showModal({
    title: "Restock Sweet",
    message: "Enter amount to restock:",
    showInput: true,
    onConfirm: async (amount) => {
      if (!amount || isNaN(amount)) return;
      await fetch(`${API}/restockSweet/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      loadSweets();
    }
  });
}

function purchaseSweet(id) {
  showModal({
    title: "Purchase Sweet",
    message: "Enter amount to purchase:",
    showInput: true,
    onConfirm: async (amount) => {
      if (!amount || isNaN(amount)) return;
      await fetch(`${API}/purchaseSweet/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      loadSweets();
    }
  });
}

function deleteSweet(id) {
  showModal({
    title: "Delete Sweet",
    message: "Are you sure you want to delete this sweet?",
    showInput: false,
    onConfirm: async () => {
      await fetch(`${API}/deleteSweet/${id}`, { method: "DELETE" });
      loadSweets();
    }
  });
}

function renderSweets(sweets) {
  const tbody = document.querySelector("#sweetsTable tbody");
  tbody.innerHTML = "";
  sweets.forEach((sweet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${sweet.id}</td>
      <td>${sweet.name}</td>
      <td>${sweet.category}</td>
      <td>₹${sweet.price.toFixed(2)}</td>
      <td>${sweet.quantity}</td>
      <td class="action-buttons">
        <button onclick="restockSweet(${sweet.id})">Restock</button>
        <button onclick="purchaseSweet(${sweet.id})">Purchase</button>
        <button class="delete" onclick="deleteSweet(${sweet.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

loadSweets();
