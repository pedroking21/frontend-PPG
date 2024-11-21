async function cadastrarLivro() {
    // Recuperar informações do formulário e criar objeto JSON
    const livroDTO = {
        "titulo": document.querySelector("input[name='input-titulo']").value,
        "autor": document.querySelector("input[name='input-autor-livro']").value,
        "anoPublicacao": document.querySelector("input[name='input-ano-de-lancamento-carro']").value,
        "codigo": document.querySelector("input[name='input-codigo']").value
    };

    console.log(livroDTO);

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/livro", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroDTO)
        });

        if (!respostaServidor.ok) {
            throw new Error("Erro ao enviar os dados para o servidor. Contate o administrador do sistema.");
        }

        alert("Livro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor: ${error}`);
    }
}
