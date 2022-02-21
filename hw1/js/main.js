
  // fetch() is an alternate/better/newer way to fetch data
  // also try 'national-parks' :)
  let DATA = 'https://github.com/annalovecode/annalovecode.github.io/blob/main/hw1/data.json';
  //DATA='https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

  async function fetchData() {
   const response = await fetch(DATA);


   let gd = response.text(); // also try .json()
   return gd;
  }// fetchData()

  fetchData().then(
  d=>displayXML(d)
  );//.then()

  // exercise: make the .then() part of immediately executed fetchData() :)
  var header1 = document.getElementById("grid");
  var header2 = document.getElementById("section4");
 function displayXML(xmlDoc) {
   //console.log(xmlDoc);
   var jsObj = JSON.parse(xmlDoc);
   var js1=jsObj["section2"];
   var js2=jsObj["section4"];
   console.log(js1);
   console.log(js2);
  // header1.appendChild(myList);
    for(i = 0; i < js1.length; i++) {
      var intro = document.createElement('li');

      var myPic = document.createElement('img');
      myPic.src = js1[i].image;
      var t = header1.appendChild(intro);
      var myH1 = document.createElement('h4');
      if (i == 0) myH1.textContent = "Griffith Observatory";
      if (i == 1) myH1.textContent = "Mountains";
      if (i == 2) myH1.textContent = "Universal Studios";
      t.appendChild(myPic);
      var myH3 = document.createElement('span');
      var myH2 = document.createElement('p');
      myH2.textContent = js1[i].text;
      t.appendChild(myH1);
      t.appendChild(myH3);
      myH3.appendChild(myH2);
    }
    for(j=0;j<js2.length;j++) {
        var s = document.createElement('img');
        s.src = js2[j].image;
        var textp = document.createElement('p');
        textp.textContent = js2[j].text;
        var title = document.createElement('h2');
        var div = document.createElement('div');
        var div2 = document.createElement('div');
        title.textContent =  js2[j].heading;
      if (js2[j].heading == "Beaches") {
        header2.appendChild(div);
        div.appendChild(div2);
        div2.appendChild(title);
        div.id='div2';
        div2.id='div2-text';
        div2.appendChild(textp);
        div.appendChild(s);
      }
       if (js2[j].heading == "Hollywood") {
        header2.appendChild(div);
        div.appendChild(s);
        div.appendChild(div2);
        div2.appendChild(title);
        div.id='div1';
        div2.id='div1-text';
        div2.appendChild(textp);
      }
    }
 }
  var box = document.getElementById('navbar');
    var lis = box.getElementsByTagName('li');
    var divs = box.getElementsByTagName('div');
    for(var i=0;i<lis.length;i++){
        lis[i].qiancheng = i;
        lis[i].onclick = function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className = '';
                divs[j].className = '';
            }
            this.className = 'on';
            divs[this.qiancheng].className = 'on';
        }
    }

