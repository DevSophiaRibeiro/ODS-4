function openModal(id) {
  document.getElementById(id).style.display = "flex";
  document.body.classList.add("travar-scroll"); // ← trava o scroll
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.classList.remove("travar-scroll"); // ← destrava o scroll
}

// Fecha o modal clicando fora do conteúdo
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("travar-scroll"); // ← destrava aqui também
    }
  });
};
