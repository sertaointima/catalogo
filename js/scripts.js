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
      img.setAttribute('class','d-block w-100');
      img.setAttribute('src','assets/img/destaques/ok ('+value.id_foto_dest+').jpg');
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
        div1.setAttribute('style','margin-bottom:20px;padding:6px;');
        var div2 = document.createElement("DIV");    
        div2.setAttribute('class','card h-100');
        div2.setAttribute('Style',' background: rgba(6,0,0,0.2);border-radius: 0px;border: none;');
        var img = document.createElement("IMG");
        img.setAttribute('class','card-img-top');
        img.setAttribute('src','assets/img/produtos/ok ('+object.id_foto+').jpg');
        var div3 = document.createElement("DIV"); 
        div3.setAttribute('class','card-body p-4');
        var div4 = document.createElement("DIV"); 
        div4.setAttribute('class','text-center');
        var h5 = document.createElement("H5"); 
        h5.setAttribute('class','fw-bolder');
        h5.innerText=object.titulo;
        var div5 = document.createElement("DIV"); 
        div5.setAttribute('class','card-footer p-4 pt-0 border-top-0 bg-transparent');
        var div6 = document.createElement("DIV"); 
        div6.setAttribute('class','text-center');
        var link = document.createElement("A"); 
        link.setAttribute('class','btn btn-outline-dark mt-auto');
        link.setAttribute('style','width: 80%;background: #810012;color: white;border: none;border-radius: 4px;');
        link.setAttribute('href','show.html?id='+key);
        link.innerText="Saiba mais"
        var desc = document.createElement("P");
        desc.innerText= object.descricao_curta;
        div1.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(h5);
        div4.appendChild(desc);
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
        div1.setAttribute('style','margin-bottom:20px;padding:6px;');
        var div2 = document.createElement("DIV");    
        div2.setAttribute('class','card h-100');
        div2.setAttribute('Style',' background: rgba(6,0,0,0.2);border-radius: 0px;border: none;');
        var img = document.createElement("IMG");
        img.setAttribute('class','card-img-top');
        img.setAttribute('src','assets/img/produtos/ok ('+object.id_foto+').jpg');
        var div3 = document.createElement("DIV"); 
        div3.setAttribute('class','card-body p-4');
        var div4 = document.createElement("DIV"); 
        div4.setAttribute('class','text-center');
        var h5 = document.createElement("H5"); 
        h5.setAttribute('class','fw-bolder');
        h5.innerText=object.titulo;
        var div5 = document.createElement("DIV"); 
        div5.setAttribute('class','card-footer p-4 pt-0 border-top-0 bg-transparent');
        var div6 = document.createElement("DIV"); 
        div6.setAttribute('class','text-center');
        var link = document.createElement("A"); 
        link.setAttribute('class','btn btn-outline-dark mt-auto');
        link.setAttribute('style','width: 80%;background: #810012;color: white;border: none;border-radius: 4px;');
        link.setAttribute('href','show.html?id='+key);
        link.innerText="Saiba mais"
        var desc = document.createElement("P");
        desc.innerText= object.descricao_curta;
        div1.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(h5);
        div4.appendChild(desc);
        div2.appendChild(div5);
        div5.appendChild(div6);
        div6.appendChild(link);
    
        content_div.appendChild(div1);
      });
    }
  }
 
});