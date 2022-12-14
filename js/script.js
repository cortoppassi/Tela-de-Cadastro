const capturar = function() {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    context.drawImage(video, 0, 0);

    navigator.mediaDevices.getUserMedia({video: true})
.then(function (mediaStream) {
    
    video.srcObject = mediaStream;
    video.play();
})
}

const cadastros = []
const cadastrados = []

const video = document.querySelector('#video');
const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');

const telaDeCadastro = document.getElementById('telaDeCadastro');
const telaDeLogin = document.getElementById('telaDeLogin');
const popup = document.getElementById('popup');
const estudos = document.getElementById('estudos');

const nome = document.getElementById('cadastroNome');
const email = document.getElementById('cadastroEmail');
const senha = document.getElementById('cadastroSenha');
const telefone = document.getElementById('cadastroTelefone');
const data = document.getElementById('cadastroData');
const masculino = document.getElementById('cadastroMasculino');
const feminino = document.getElementById('cadastroFeminino');
const estado = document.getElementById('cadastroEstado');

const nomeLogin = document.getElementById('nome');
const emailLogin = document.getElementById('email');
const senhaLogin = document.getElementById('senha');

function dadosDeCadastro() {
    var determinarCadastro = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value,
        data: data.value,
        masculino: masculino.value,
        feminino: feminino.value,
        estado: estado.value
    }
    cadastros.push(determinarCadastro)
    salvarNoLocalStorage()
    abrirTelaDeLogin()
};

function logar() {
    capturar()
    var logar = {
        nome: nomeLogin.value,
        email: emailLogin.value,
        senha: senhaLogin.value
       }

    cadastros.map((item) => {
        if  
            (item.nome == logar.nome &&
            item.email == logar.email &&
            item.senha == logar.senha){
            salvarNoLocalStorage()
            abrirPopup()
        }else{
            alert('Usu??rio n??o cadastrado.')
        };
    });
};

function salvarNoLocalStorage() {
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
};

function buscarNoLocalStorage() {
    const storage = JSON.parse(localStorage.getItem(cadastros));
};

function abrirTelaDeCadastro() {
    telaDeCadastro.style.display = 'block'
    telaDeLogin.style.display = 'none'
};

function abrirTelaDeLogin() {
    telaDeCadastro.style.display = 'none'
    telaDeLogin.style.display = 'block'
};

const abrirPopup = function() {
    telaDeLogin.style.display = 'none'
    popup.style.display = 'block'
};

function sair() {
    popup.style.display = 'none'
    telaDeLogin.style.display = 'block'
};

const listarDadosCadastrados = function() {
    cadastros.map((itens) => {
       console.log(itens)
       popup.append(itens.nome)
       
    });
};

const projetos = function() {
alert('ok')
}

function dadosEstudos() {
    limpar()
    const elementoText = document.createElement("input");
    popup.appendChild(elementoText);

    const elementoInput = document.createElement("button")
    elementoInput.innerHTML = 'Salvar'

    elementoInput.onclick = function() {
         alert('ok')
    };

    popup.appendChild(elementoInput);
};

function limpar() {
    estudos.innerHTML = ''
};