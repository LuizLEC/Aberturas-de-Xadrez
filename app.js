function pesquisar() {
  // Obtém o termo de pesquisa digitado pelo usuário
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase();
  // Seleciona o elemento HTML onde os resultados serão exibidos
  let secaoResultados = document.getElementById("resultados-pesquisa");
  
  // Inicializa uma string vazia para armazenar os resultados formatados em HTML
  let resultadosHTML = "";
  let descricao = "";
  let titulo = "";
  let tags = "";
  // Itera sobre os dados e filtra os resultados que correspondem ao termo de pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria uma função auxiliar para construir a estrutura HTML de um resultado
      resultadosHTML += criarElementoResultado(dado);
    };
  };
  if (!resultadosHTML) {
    resultadosHTML = "<p>Nada foi encontrado.</p>"
  };

  // Atualiza o conteúdo da seção de resultados com os resultados encontrados
  secaoResultados.innerHTML = resultadosHTML;
};

// Função auxiliar para criar a estrutura HTML de um resultado
function criarElementoResultado(dado) {
  return `
    <div class="item-resultado">
      <h2>
        <a>${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank" class="mais-informacoes">Mais informações.</a>
    </div>
  `;
};