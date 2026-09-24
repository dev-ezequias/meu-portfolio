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

async function enviar(event) {
    event.preventDefault(); // Impede o envio padrao do formulario
    
    const form = event.target.closest('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('texto');
    const btnSubmit = document.getElementById('btn-submit');

    // Remove espacos extras do inicio e do fim
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Expressao regular para validar formato do e-mail (ex: usuario@dominio.com ou .com.br)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Validacao do Nome
    if (!name) {
        alert('Por favor, digite o seu nome.');
        nameInput.focus();
        return;
    }

    // 2. Validacao do E-mail
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).');
        emailInput.focus();
        return;
    }

    // 3. Validacao da Mensagem
    if (!message) {
        alert('Por favor, escreva a sua mensagem.');
        messageInput.focus();
        return;
    }

    // Se passou por todas as validacoes, realiza o envio via Formspree
    btnSubmit.innerText = 'Enviando...';

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            btnSubmit.innerText = 'Enviado!';
            form.reset(); // Limpa os campos do formulario
        } else {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            btnSubmit.innerText = 'Enviar';
        }
    } catch (error) {
        alert('Erro de conexão ao enviar a mensagem.');
        btnSubmit.innerText = 'Enviar';
    }
}