class NegociacaoController {
    adiciona(event) {
        //	cancelando a submissão do formulário
        event.preventDefault();
        alert('Chamei ação no controller');
    }
}