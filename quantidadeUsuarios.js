async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasredes= Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
     
    const data = [

         {
             x: nomeDasredes,
          y: quantidadeUsuarios,
          type:'bar'
    }

        ]

        const graficos = document.createElement('div')
      grafico.className = 'grafico'
      document.getElementById('grafico-conteiner').appendChild(grafico)
      plotly.newplot(grafico)
     
  }
  