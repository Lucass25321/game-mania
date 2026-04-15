$(document).ready(function() {
    // 1. Funcionalidade do Formulário de Login com Mensagens Dinâmicas
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();
        const messageDiv = $('#loginMessage');
        
        // Simulação de validação simples
        if (email && password) {
            messageDiv.removeClass('d-none alert-danger').addClass('alert alert-success');
            messageDiv.html('<strong>Sucesso!</strong> Bem-vindo de volta, gamer! Redirecionando...');
            
            // Simula redirecionamento após 2 segundos
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            messageDiv.removeClass('d-none alert-success').addClass('alert alert-danger');
            messageDiv.html('<strong>Erro!</strong> Por favor, preencha todos os campos.');
        }
    });

    // 2. Interação nos Botões de "Adicionar ao Carrinho"
    $('.btn-outline-danger').on('click', function() {
        const productName = $(this).closest('.card-body').find('.card-title').text();
        alert('O produto "' + productName + '" foi adicionado ao seu carrinho!');
    });

    // 3. Efeito de Scroll Suave para Links Internos (se houver)
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // 4. Mensagem de Boas-vindas no Console (apenas para desenvolvedores)
    console.log("Game Mania - Front-End carregado com sucesso!");
});
