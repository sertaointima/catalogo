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
    produtos.child(key).once('value', snap2 => { 
        var object = snap2.val();
        var content_div = document.getElementById("content_produts");    
        var div1 = document.createElement("DIV");    
        div1.setAttribute('class','col mb-5');
        var div2 = document.createElement("DIV");    
        div2.setAttribute('class','card h-100');
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
 
});