async function listarLivros() {
    try {
        const respostaServidor = await fetch("http://localhost:3333/lista/livros", {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const response = await respostaServidor.json();
        criarTabelaLivros(response);

        if(!respostaServidor.ok) {
            throw new  Error("Erro a receber os dados para o servidor. Contate o administrador do sistema");
        }

    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor.${error}`)
    } 
}

async function criarTabelaLivros(livros) {
    const tabela = document.querySelector('tbody');

    // Cria as linhas da tabela com os dados do array
    livros.forEach(livro => {
        const linhas = document.createElement('tr');

        // Cria cada célula com os dados do carro
        const celulaID = document.createElement('td');
        celulaID.textContent = livro.idLivro;
        linhas.appendChild(celulaID);

        const celulaTitulo = document.createElement('td');
        celulaTitulo.textContent = livro.titulo;
        linhas.appendChild(celulaTitulo);

        const celulaAutor = document.createElement('td');
        celulaAutor.textContent = livro.autor;
        linhas.appendChild(celulaAutor);

        const celulaAno = document.createElement('td');
        celulaAno.textContent = livro.anoPublicacao;
        linhas.appendChild(celulaAno);

        // Cria a célula para ações (ícones de editar e excluir)
        const celulaAcoes = document.createElement('td');

        const iconeEditar = document.createElement('img');
        iconeEditar.src = "assets/icons/pencil-square.svg";
        iconeEditar.alt = "editar";
        celulaAcoes.appendChild(iconeEditar);

        const iconeDeletar = document.createElement('img');
        iconeDeletar.src = "assets/icons/trash-fill.svg";
        iconeDeletar.alt = "excluir";
        celulaAcoes.appendChild(iconeDeletar);

        linhas.appendChild(celulaAcoes);

        // Adiciona a linha ao corpo da tabela
        tabela.appendChild(linhas);
    });
}