const textoEscrito = document.querySelector(".caixaDeTexto")
const textArea = document.querySelector(".caixaDoResultado")

function botaoCriptografar() {
    const textoModificado = encriptar(textoEscrito.value || textArea.value);
    textArea.value = textoModificado;
    textoEscrito.value = "";
  
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function botaoDescriptografar() {
    const textoOriginal = descriptografar(textoEscrito.value || textArea.value);
    textArea.value = textoOriginal;
    textoEscrito.value = "";
  
}

function descriptografar(stringDescriptografada) {
   
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptografada;

}

async function copiar() {
    let text = textArea.value
    await navigator.clipboard.writeText(text)
}

