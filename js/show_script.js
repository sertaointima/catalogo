var show_parcelas_b=false;
var titulo_produto;
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
    window.location.href="https://api.whatsapp.com/send?phone=5589994707167&text=Ol%C3%A1%2C%20gostei%20do%20"+titulo_produto+"%2C%20tem%20dispon%C3%ADvel%3F%20";
}

function show_parcelas(){
    if(show_parcelas_b){
        document.getElementById('content_parcelas').setAttribute('style','display:none');
        show_parcelas_b=false;
    }else{
        document.getElementById('content_parcelas').removeAttribute('style');
        show_parcelas_b=true;
    }
    
}

var query = location.search.slice(1);
var partes = query.split('&');
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var id = chaveValor[1];
    produtos.child(id).once('value', snap2 => { 
        var object = snap2.val();
        var v = parseFloat(object.valor_promo.replace(",", "."));
        var juros = v*(4/100)+0.05;
        document.getElementById('img').setAttribute('src','assets/img/produtos/ok ('+object.id_foto+').jpg');
        document.getElementById('title').innerText = object.titulo;
        titulo_produto= object.titulo;
        document.getElementById('desc').innerHTML = object.descricao;
        document.getElementById('valor_c').innerText ="Ou em até 3x no cartão de crédito";;
        document.getElementById('valor_v').innerText = "R$"+object.valor_promo;
        document.getElementById('valor_real').innerText = "R$"+object.valor_real;

        document.getElementById('p_1').innerText = "R$"+(v+juros).toFixed(2);
        document.getElementById('p_2').innerText = "R$"+((v+juros)/2).toFixed(2);
        document.getElementById('p_3').innerText = "R$"+((v+juros)/3).toFixed(2);
    });
});

