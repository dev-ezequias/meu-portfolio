document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links do menu e todas as seções
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.tab-content');

    function ativarAba(event) {
        event.preventDefault(); // Impede o comportamento padrão de pular a página

        // 1. Remove a classe 'active' de todos os links e seções
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // 2. Adiciona 'active' ao link clicado
        const linkClicado = event.currentTarget;
        linkClicado.classList.add('active');

        // 3. Pega o ID do href (ex: #sobre) e remove o #
        const targetId = linkClicado.getAttribute('href').substring(1);
        
        // 4. Busca a seção correspondente e ativa
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Adiciona o evento de click em cada link
    navLinks.forEach(link => {
        link.addEventListener('click', ativarAba);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    // Agora isso vai funcionar pois adicionamos a classe .tab-content no HTML
    const sections = document.querySelectorAll('.tab-content'); 

    function ativarAba(event) {
        event.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        const linkClicado = event.currentTarget;
        linkClicado.classList.add('active');

        // Como adicionamos o # no HTML, o substring(1) agora funciona corretamente
        const targetId = linkClicado.getAttribute('href').substring(1);
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', ativarAba);
    });
});

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  // Se rolar mais de 300px, mostra o botão
  if (window.scrollY > 300) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

// Opcional: Garante que o clique leve ao topo mesmo em navegadores antigos
btnTopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function enviar(event) {
  event.preventDefault()
  if (document.getElementById('texto').value && document.getElementById('email').value.includes('@') && document.getElementById('name').value){
    let enviar = document.getElementById('btn-submit')

      enviar.innerHTML = 'Enviado!' 
  }
  else{
    alert('Por favor, preencha todos os campos corretamente!')
  }
}