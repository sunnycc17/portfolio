async function inject(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(file);
  if (res.ok) el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', () => {
  const basePath = location.pathname.includes('/pages/') ? '../' : './';
  inject('header', basePath + 'components/header.html');
  inject('footer', basePath + 'components/footer.html');
});
