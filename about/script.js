// Animação de entrada dos cards da equipe
document.addEventListener('DOMContentLoaded', function() {
    const membrosEquipe = document.querySelectorAll('.membro-equipe');

    // Função para verificar se o elemento está visível na tela
    function elementoVisivel(elemento) {
        const posicao = elemento.getBoundingClientRect();
        return (
            posicao.top >= 0 &&
            posicao.left >= 0 &&
            posicao.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            posicao.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para animar os elementos quando aparecem na tela
    function animarAoRolar() {
        membrosEquipe.forEach((membro, index) => {
            if (elementoVisivel(membro)) {
                setTimeout(() => {
                    membro.classList.add('show');
                }, index * 200);
            }
        });
    }

    // Executa a animação ao carregar a página
    animarAoRolar();

    // Executa a animação ao rolar a página
    window.addEventListener('scroll', animarAoRolar);

    // Adiciona efeito de clique nos cards
    membrosEquipe.forEach(membro => {
        membro.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Efeito de scroll suave no cabeçalho
    let ultimoScroll = 0;
    const cabecalho = document.querySelector('.cabecalho');
    
    if(cabecalho){
        window.addEventListener('scroll', function() {
            const scrollAtual = window.pageYOffset;
            
            if (scrollAtual > ultimoScroll && scrollAtual > 100) {
                cabecalho.style.transform = 'translateY(-100%)';
            } else {
                cabecalho.style.transform = 'translateY(0)';
            }
            
            ultimoScroll = scrollAtual;
        });
    }
});
