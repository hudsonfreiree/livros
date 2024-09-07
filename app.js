function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let nome = "";
    let descrição = "";
    let tags = "";

    for(let dado of dados) {
        nome = dado.nome.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags= dado.tags.toLowerCase()

        if(nome.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                        <h2> 
                            <a href="#" >${dado.nome}</a>
                            
                        </h2>
                        <p class="descrição-meta"> ${dado.descrição} 
                        </p>
                        
                        <a href=${dado.link} target="_blank">Mais informações</a>
                        
            
                    </div>
            
            `;
        }
        console.log(dado.nome.includes(campoPesquisa));         
        
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }
    
    section.innerHTML = resultados;
    
}




