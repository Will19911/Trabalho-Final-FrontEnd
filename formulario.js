// Função que busca dados de endereço a partir de um CEP
function buscaCep(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log("Problema na requisição do CEP.")
            }
            return response.json()
        })
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado. Por favor, verifique o número.")
                
                // Limpar os campos se o CEP for inválido
                rua.value = ""
                bairro.value = ""
                cidade.value = ""
                estado.value = ""
                return;
            }
            
            // Preenche os campos de endereço automaticamente.
            rua.value = data.logradouro
            bairro.value = data.bairro
            cidade.value = data.localidade
            estado.value = data.uf
        })
        .catch(error => {
            console.log("Erro: ", error)
        })
}