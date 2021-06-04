var firebaseConfig = {
    apiKey: "AIzaSyBctfYkfgMlwBL4JYcHPKk3Es9Bbo8etsA",
    authDomain: "catalogosertaointima.firebaseapp.com",
    projectId: "catalogosertaointima",
    storageBucket: "catalogosertaointima.appspot.com",
    messagingSenderId: "867988064296",
    appId: "1:867988064296:web:32970675fea9d369d48d1d",
    measurementId: "G-97ZC1LXVSH"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var produtos = firebase.database().ref('produtos');

document.getElementById('whats').addEventListener("click", whats_redirect);

function whats_redirect(){
    window.location.href="https://bit.ly/3fZFWL8";
}
var query = location.search.slice(1);
var partes = query.split('&');
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var id = chaveValor[1];
    produtos.child(id).once('value', snap2 => { 
        var object = snap2.val();
        document.getElementById('img').setAttribute('src','assets/img/produtos/ok ('+object.id_foto+').jpg');
        document.getElementById('title').innerText = object.titulo;
        document.getElementById('desc').innerText = object.descricao;
        document.getElementById('valor_c').innerText ="R$"+object.valor_cartao;
        document.getElementById('valor_v').innerText = "R$"+object.valor_vista;
    });
});

