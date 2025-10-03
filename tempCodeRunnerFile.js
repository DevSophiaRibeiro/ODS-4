<script>
  // Pega o link atual da página
  const links = document.querySelectorAll('.menu a');
  const currentURL = window.location.href;

  links.forEach(link => {
    if (link.href === currentURL) {
      link.classList.add('active');
    }
  });
</script>
