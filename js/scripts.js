var destques_cont=0;
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
 
  produtos.on('child_added', snap => {
  var key = snap.key;
  var value = snap.val();
  if(value.status=="1"){
    if(value.destaque=="1"){
      var contente_head = document.getElementById('head-carousel');
      var content_carousel = document.getElementById('content_carousel');
      var li = document.createElement("LI");
      li.setAttribute('data-target','#carouselExampleIndicators');
      li.setAttribute('data-slide-to',''+destques_cont+'');
      var div1 = document.createElement("DIV");
      if(destques_cont==0){
        div1.setAttribute('class','carousel-item active');
        li.setAttribute('class','active');
      }else{
        div1.setAttribute('class','carousel-item');
      }
      contente_head.appendChild(li);
      var link = document.createElement("A");
      link.setAttribute('href','show.html?id='+key);
      var div2 = document.createElement("DIV");
      div2.setAttribute('class','carousel-titulo');
      var h1 = document.createElement("H1");
      h1.setAttribute('style', 'font-size:3rem;');
      h1.innerText=value.titulo;
      var h4 = document.createElement("H4");
      h4.innerText=value.descricao_curta;
      var img = document.createElement("IMG");
      img.setAttribute('class','d-block');
      img.setAttribute('src','assets/img/destaques/ok (111).jpg');
      //img.setAttribute('src','assets/img/destaques/ok ('+value.id_foto_dest+').jpg');
      div1.appendChild(link);
      link.appendChild(div2);
      div2.appendChild(h1);
      div2.appendChild(h4);
      link.appendChild(img);
      content_carousel.appendChild(div1);
      destques_cont++;

      produtos.child(key).once('value', snap2 => { 
        var object = snap2.val();
        var content_div = document.getElementById("content_produts");    
        var div1 = document.createElement("DIV");    
        div1.setAttribute('class','col');
        div1.setAttribute('style','padding:20px;');
        var div2 = document.createElement("DIV");    
        div2.setAttribute('class','card h-100');
        div2.setAttribute('Style','border-radius: 0px;border: none;');
        var img = document.createElement("IMG");
        img.setAttribute('class','card-img-top');
        img.setAttribute('src','assets/img/produtos/ok ('+object.id_foto+').jpg');
        var div3 = document.createElement("DIV"); 
        div3.setAttribute('class','card-body');
        var div4 = document.createElement("DIV"); 
        div4.setAttribute('class','text-center');
        div4.setAttribute('style','margin-top:-0.6em');
        var h5 = document.createElement("H5"); 
        h5.setAttribute('align','justify');
        h5.innerText=object.titulo;
        var div5 = document.createElement("DIV"); 
        div5.setAttribute('class','card-footer pt-0 border-top-0 bg-transparent');
        var div6 = document.createElement("DIV"); 
        div6.setAttribute('class','text-center');
        var link = document.createElement("A"); 
        link.setAttribute('class','btn btn-outline-dark mt-auto');
        link.setAttribute('style','width: 100%;background: #810012;color: white;border: none;border-radius: 0px;');
        link.setAttribute('href','show.html?id='+key);
        link.innerText="Saiba mais"
        var desc = document.createElement("P");
        desc.innerText= object.descricao_curta;
        desc.setAttribute('align','justify');
        desc.setAttribute('style', 'line-height:19px;letter-spacing:0.5px');
        
        var valor = document.createElement("P");
        valor.setAttribute('align','justify');
        valor.setAttribute('style','margin-top:-10px');
        var valor_bk = object.valor_promo.split(",");
        valor.innerHTML='<span class="a-price-symbol">R$</span><span class="a-price-whole">'+valor_bk[0]+'</span><span class="a-price-symbol">'+valor_bk[1]+'</span> à vista';

        var cartao = document.createElement("P");
        cartao.setAttribute('align','justify');
        cartao.setAttribute('style','margin-top:-20px;font-size: 0.8em;');
        var v = parseFloat(object.valor_promo.replace(",", "."));
        var juros = v*(4/100)+0.05;
        cartao.innerText="Ou R$"+(v+juros).toFixed(2)+" em até 3x no cartão de crédito";

        var valor_real = document.createElement("P");
        valor_real.setAttribute('align','justify');
        valor_real.setAttribute('class', 'valor_real');
        valor_real.innerText="R$ "+object.valor_real;

        div1.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(h5);
        div4.appendChild(desc);
        div4.appendChild(valor_real);
        div4.appendChild(valor);
        div4.appendChild(cartao);
        div2.appendChild(div5);
        div5.appendChild(div6);
        div6.appendChild(link);
    
        content_div.appendChild(div1);
      });

    }else{
      produtos.child(key).once('value', snap2 => { 
        var object = snap2.val();
        var content_div = document.getElementById("content_produts");    
        var div1 = document.createElement("DIV");    
        div1.setAttribute('class','col');
        div1.setAttribute('style','padding:20px;');
        var div2 = document.createElement("DIV");    
        div2.setAttribute('class','card h-100');
        div2.setAttribute('Style','border-radius: 0px;border: none;');
        var img = document.createElement("IMG");
        img.setAttribute('class','card-img-top');
        img.setAttribute('src','assets/img/produtos/ok ('+object.id_foto+').jpg');
        var div3 = document.createElement("DIV"); 
        div3.setAttribute('class','card-body');
        var div4 = document.createElement("DIV"); 
        div4.setAttribute('class','text-center');
        div4.setAttribute('style','margin-top:-0.6em');
        var h5 = document.createElement("H5"); 
        h5.setAttribute('align','justify');
        h5.innerText=object.titulo;
        var div5 = document.createElement("DIV"); 
        div5.setAttribute('class','card-footer pt-0 border-top-0 bg-transparent');
        var div6 = document.createElement("DIV"); 
        div6.setAttribute('class','text-center');
        var link = document.createElement("A"); 
        link.setAttribute('class','btn btn-outline-dark mt-auto');
        link.setAttribute('style','width: 100%;background: #810012;color: white;border: none;border-radius: 0px;');
        link.setAttribute('href','show.html?id='+key);
        link.innerText="Saiba mais"
        var desc = document.createElement("P");
        desc.innerText= object.descricao_curta;
        desc.setAttribute('align','justify');
        desc.setAttribute('style', 'line-height:19px;letter-spacing:0.5px');

        var valor_real = document.createElement("P");
        valor_real.setAttribute('align','justify');
        valor_real.setAttribute('class', 'valor_real');
        valor_real.innerText="R$ "+object.valor_real;

        var valor_promo = document.createElement("P");
        valor_promo.setAttribute('align','justify');
        valor_promo.setAttribute('style','margin-top:-10px');
        var valor_bk = object.valor_promo.split(",");
        valor_promo.innerHTML='<span class="a-price-symbol">R$</span><span class="a-price-whole">'+valor_bk[0]+'</span><span class="a-price-symbol">'+valor_bk[1]+'</span> à vista';
        var cartao = document.createElement("P");
        cartao.setAttribute('align','justify');
        cartao.setAttribute('style','margin-top:-20px;font-size: 0.8em;');
        var v = parseFloat(object.valor_promo.replace(",", "."));
        var juros = v*(4/100)+0.05;
        cartao.innerText="Ou R$"+(v+juros).toFixed(2)+" em até 3x no cartão de crédito";

        div1.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(h5);
        div4.appendChild(desc);
        div4.appendChild(valor_real);
        div4.appendChild(valor_promo);
        div4.appendChild(cartao);
        div2.appendChild(div5);
        div5.appendChild(div6);
        div6.appendChild(link);
    
        content_div.appendChild(div1);
      });
    }
  }
 
});