document.addEventListener("DOMContentLoaded", function () {
  const currentHost = window.location.hostname;
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    const href = link.getAttribute('href');

    // Hanya proses link yang http/https
    if (href.startsWith('http://') || href.startsWith('https://')) {
      const linkHost = new URL(href).hostname;

      // Buka di tab baru hanya jika domain berbeda
      if (linkHost !== currentHost) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });
});
