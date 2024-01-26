function criptografar() {
    let textArea = document.getElementById("texto").value

    // operação que retorna qualquer carácter que sejá diferente de a á z, incluindo letras maiúsculas ou com acentos
    if (!/^[a-z\s.,!?]+$/i.test(textArea) || /[A-ZÀ-ÚÂ-ÛÄ-Ü]/.test(textArea)) {
        let erro = document.getElementById("mensagemErro")
        erro.removeAttribute("hidden")

        setTimeout(function () {
            erro = document.getElementById("mensagemErro")

            limpar("resposta")

            // colocar de volta as informações
            let imagem = document.getElementById("garota")
            imagem.removeAttribute("hidden")

            let h2 = document.getElementById("subtitulo")
            h2.removeAttribute("hidden")

            let paragrafo = document.getElementById("paragrafo")
            paragrafo.removeAttribute("hidden")

            // tirar de novo a text area e o botão
            let resposta = document.getElementById("resposta")
            resposta.setAttribute("hidden", "true")
            resposta.value = textArea

            let copiar = document.getElementById("copiar")
            copiar.setAttribute("hidden", "true")

            erro.style.display = "none"
        }, 3000)
    } else {
        // a vogal "a" não pode ser a primeira da lista se não da erro
        textArea = textArea.replace(/e/g, "enter")
        textArea = textArea.replace(/i/g, "imes")
        textArea = textArea.replace(/a/g, "ai")
        textArea = textArea.replace(/o/g, "ober")
        textArea = textArea.replace(/u/g, "ufta")
    }

    // tira as informações
    let imagem = document.getElementById("garota")
    imagem.setAttribute("hidden", "true")

    let h2 = document.getElementById("subtitulo")
    h2.setAttribute("hidden", "true")

    let paragrafo = document.getElementById("paragrafo")
    paragrafo.setAttribute("hidden", "true")

    // coloca a text area e o botão
    let resposta = document.getElementById("resposta")
    resposta.removeAttribute("hidden")
    resposta.value = textArea

    let copiar = document.getElementById("copiar")
    copiar.removeAttribute("hidden")

    limpar("texto")
}

function descriptografar() {
    let textArea = document.getElementById("texto").value

    if (!/^[a-z\s.,!?]+$/i.test(textArea) || /[A-ZÀ-ÚÂ-ÛÄ-Ü]/.test(textArea)) {
        let erro = document.getElementById("mensagemErro")
        erro.removeAttribute("hidden")

        setTimeout(function () {
            erro = document.getElementById("mensagemErro")

            limpar("resposta")

            // colocar de volta as informações
            let imagem = document.getElementById("garota")
            imagem.removeAttribute("hidden")

            let h2 = document.getElementById("subtitulo")
            h2.removeAttribute("hidden")

            let paragrafo = document.getElementById("paragrafo")
            paragrafo.removeAttribute("hidden")

            // tirar de novo a text area e o botão
            let resposta = document.getElementById("resposta")
            resposta.setAttribute("hidden", "true")
            resposta.value = textArea

            let copiar = document.getElementById("copiar")
            copiar.setAttribute("hidden", "true")

            erro.style.display = "none"
        }, 3000)
    } else {
        textArea = textArea.replace(/enter/g, "e")
        textArea = textArea.replace(/imes/g, "i")
        textArea = textArea.replace(/ai/g, "a")
        textArea = textArea.replace(/ober/g, "o")
        textArea = textArea.replace(/ufta/g, "u")
    }

    // tira as informações
    let imagem = document.getElementById("garota")
    imagem.setAttribute("hidden", "true")

    let h2 = document.getElementById("subtitulo")
    h2.setAttribute("hidden", "true")

    let paragrafo = document.getElementById("paragrafo")
    paragrafo.setAttribute("hidden", "true")

    // coloca a text area e o botão
    let resposta = document.getElementById("resposta")
    resposta.removeAttribute("hidden")
    resposta.value = textArea

    let copiar = document.getElementById("copiar")
    copiar.removeAttribute("hidden")

    limpar("texto")
}

function copiarTexto() {
    let textArea = document.getElementById("resposta")

    navigator.clipboard.writeText(textArea.value).then(() => {
        alert("Copiada para área de transferência!")

        limpar("resposta")


        // colocar de volta as informações
        let imagem = document.getElementById("garota")
        imagem.removeAttribute("hidden")

        let h2 = document.getElementById("subtitulo")
        h2.removeAttribute("hidden")

        let paragrafo = document.getElementById("paragrafo")
        paragrafo.removeAttribute("hidden")

        // tirar de novo a text area e o botão
        let resposta = document.getElementById("resposta")
        resposta.setAttribute("hidden", "true")
        resposta.value = textArea

        let copiar = document.getElementById("copiar")
        copiar.setAttribute("hidden", "true")
    })

}

function limpar(id) {
    document.getElementById(id).value = ""
}