document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    const naturezaCargo = document.querySelector(
      'input[name="natureza_cargo"]:checked'
    ).value;

    const areasInteresse = [];
    document
      .querySelectorAll('input[name="area_interesse"]:checked')
      .forEach(function (checkbox) {
        areasInteresse.push(checkbox.value);
      });

    if (areasInteresse.length === 0) {
      alert("Você deve marcar ao menos uma área de interesse.");
      return;
    }

    const miniCurriculo = document.getElementById("mini_curriculo").value;

    const dados = {
      nome: nome,
      endereco: endereco,
      cidade: cidade,
      estado: estado,
      naturezaCargo: naturezaCargo,
      areasInteresse: areasInteresse,
      miniCurriculo: miniCurriculo,
    };

    console.log(dados);
  });
