var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
      {
        q: "1.-A quin continent es troba el sistema muntanyenc dels Carpats? ",
        o: [
          "1) " + "Àfrica ",
          "2) " + "Àsia ",
          "3) " + "Amèrica ",
          "4) " + "Europa "
        ],
        a: 3
      },
      {
        q: "2.- Quin poeta no pertany al grup conegut com la “Generació del 27”? ",
        o: [
          "1) " + "Luis Cernuda ",
          "2) " + "Vicente Aleixandre ",
          "3) " + "Rafael Alberti ",
          "4) " + "Gustavo Adolfo Bécquer "
        ],
        a: 3
      },
      {
        q: "El Dia Mundial contra el càncer de mama és: ",
        o: [
          "1) " + "El 14 de setembre ",
          "2) " + "El 19 d´octubre ",
          "3) " + "El 3 de novembre ",
          "4) " + "El 20 de desembre "
        ],
        a: 1
      },
      {
        q: "L’actual president/a del Parlament de Catalunya és: ",
        o: [
          "1) " + "Meritxell Batet ",
          "2) " + "Josep Costa ",
          "3) " + "Mercè Perea",
          "4) " + "Roger Torrent "
        ],
        a: 3
      },
      {
        q: "5.- Un triangle que té dos costats iguals s´anomena: ",
        o: [
          "1) " + "Equilàter ",
          "2) " + "Acutangle ",
          "3) " + "Isòsceles ",
          "4) " + "Escalè "
        ],
        a: 2
      },
      {
        q: "6.- En quina emissora de ràdio presenta un programa la periodista Júlia Otero? ",
        o: [
          "1) " + "Onda Cero ",
          "2) " + "Rac 1 ",
          "3) " + "SER ",
          "4) " + "Catalunya Ràdio "
        ],
        a: 0
      },
      {
        q: "7.- El símbol químic de la plata és: ",
        o: [
          "1) " + "Pt ",
          "2) " + "Ag",
          "3) " + "P",
          "4) " + "Pa"
        ],
        a: 1
      },
      {
        q: "8.- Qui és l´autor/a de la novel·la “ Patria “? ",
        o: [
          "1) " + "Javier Cercas ",
          "2) " + "Elvira Lindo",
          "3) " + "Carme Riera ",
          "4) " + "Fernando Aramburu "
        ],
        a: 3
      },
      {
        q: "9.- El guanyador de l´Òscar 2020 a millor actor és: ",
        o: [
          "1) " + "Joaquin Phoenix ",
          "2) " + "Leonardo DiCaprio ",
          "3) " + "Jonathan Price ",
          "4) " + "Dwayne Johnson "
        ],
        a: 0
      },
      {
        q: "10.- El científic Guglielmo Marconi, guanyador del Premi Nobel de física, va destacar en  l´estudi i desenvolupament de/ d´: ",
        o: [
          "1) " + "La radioactivitat ",
          "2) " + "El coneixement matemàtic aplicat a la intel·ligència artificial ",
          "3) " + "La comunicació telegràfica sense fils ",
          "4) " + "La superconductivitat de la temperatura "
        ],
        a: 2
      },
      {
        q: "11.- Quin any va començar la seva activitat la xarxa social Instagram?",
        o: [
          "1) " + "2000 ",
          "2) " + "2005",
          "3) " + "2010 ",
          "4) " + "2015"
        ],
        a: 2
      },
      {
        q: "12.-Quina de les següents energies és renovable? ",
        o: [
          "1) " + "Biogàs ",
          "2) " + "Biomassa ",
          "3) " + "Geotèrmica ",
          "4) " + "Totes les respostes anteriors són correctes "
        ],
        a: 3
      },
      {
        q: "13.- Quin/a nutricionista ha escrit el llibre “Menja menjar real”, impulsor/a del realfooding? ",
        o: [
          "1) " + "Carlos Ríos ",
          "2) " + "Rafael Santandreu ",
          "3) " + "Elsa Punset ",
          "4) " + "Marga Plans "
        ],
        a: 0
      },
      {
        q: "14.- El riu Ebre neix a la comunitat autònoma d´/del/de: ",
        o: [
          "1) " + "Aragó",
          "2) " + "País Basc ",
          "3) " + "Castella Lleó",
          "4) " + "Cantàbria "
        ],
        a: 3
      },
      {
        q: "15.- L´entrada natural del mar a la costa rep el nom de: ",
        o: [
          "1) " + "Cap ",
          "2) " + "Badia ",
          "3) " + "Istme ",
          "4) " + "Península "
        ],
        a: 1
      },
      {
        q: "16.- L´actual Conseller/a d´Interior és: ",
        o: [
          "1) " + "Miquel Buch ",
          "2) " + "Alba Vergés ",
          "3) " + "Miquel Sàmper ",
          "4) " + "Àngels Ponsa "
        ],
        a: 2
      },
      {
        q: "17.- L´autor/a de la cançó “Eso que tú me das” publicada el 2020 és: ",
        o: [
          "1) " + "Pau Donés",
          "2) " + "Antonio Orozco ",
          "3) " + "Rozalén ",
          "4) " + "Pau Riba"
        ],
        a: 0
      },
      {
        q: "18.- Quina és la fórmula per obtenir l´àrea d´un cercle? ",
        o: [
          "1) " + "π .r ",
          "2) " + "π + d",
          "3) " + " π2 . r ",
          "4) " + "π . r2 "
        ],
        a: 3
      },
      {
        q: "19.-Quin Tractat signat al 1919 es considera formalment que posa fi a la I Guerra Mundial? ",
        o: [
          "1) " + "Nuremberg ",
          "2) " + "Roma ",
          "3) " + "Versalles ",
          "4) " + "Pirineus "
        ],
        a: 2
      },
      {
        q: "20.- El Mobile Word Congress 2021 està previst que es celebri: ",
        o: [
          "1) " + "Del 28 de juny a l´1 de juliol ",
          "2) " + "Del 10 de maig al 13 de maig ",
          "3) " + "Del 20 d´abril al 23 d´abril ",
          "4) " + "Del 29 de març a l´1 d´abril "
        ],
        a: 0
      },
      {
        q: "21.-Qui és el/la Ministre/a d´Interior actual? ",
        o: [
          "1) " + "Salvador Illa",
          "2) " + "Dolores Delgado ",
          "3) " + "Margarita Robles ",
          "4) " + "Fernando Grande-Marlaska "
        ],
        a: 3
      },
      {
        q: "22.- La comarca o regió històrica de La Alpujarra es troba a la comunitat autònoma de/ d´:",
        o: [
          "1) " + "Astúries. ",
          "2) " + "Castella-Lleó ",
          "3) " + "Andalusia ",
          "4) " + " Extremadura. "
        ],
        a: 2
      },
      {
        q: "23.- La capital de la comarca de la Terra Alta és",
        o: [
          "1) " + "Tortosa ",
          "2) " + "Puigcerdà ",
          "3) " + "Valls ",
          "4) " + "Gandesa "
        ],
        a: 3
      },
      {
        q: "24.- La lleixiu si volem formular-la de forma química és: ",
        o: [
          "1) " + "Perclorat de potass",
          "2) " + "Hipoclorit de sodi ",
          "3) " + "Clorur de sodi oxigena",
          "4) " + "Tetraclorur oxigenat "
        ],
        a: 1
      },
      {
        q: "25.- Quina pel·lícula espanyola és candidata als premis Oscars 2021? ",
        o: [
          "1) " + "Lo que arde ",
          "2) " + "Campeones ",
          "3) " + "Dolor y gloria ",
          "4) " + "La trinchera infinita "
        ],
        a: 3
      },
      {
        q: "26.- La youtuber Patry Jordán té un canal on ofereix continguts de/d´: ",
        o: [
          "1) " + "Moda ",
          "2) " + "Exercici físic ",
          "3) " + "Videojocs electrònics ",
          "4) " + "Humor "
        ],
        a: 1
      },
      {
        q: "27.- El conflicte bèl·lic de Nagorno-Karajab s´inicia per una disputa territorial entre: ",
        o: [
          "1) " + "Iran i Turquia ",
          "2) " + "Azerbaidjan i Armènia ",
          "3) " + "Kazakhstan i Kirguizistan ",
          "4) " + "Tadjikistan i Uzbekistan "
        ],
        a: 1
      },
      {
        q: "28.- La Constitució espanyola de 1812 és coneguda també com: ",
        o: [
          "1) " + "La Constitució de Toledo ",
          "2) " + "La Constitució de Sevilla ",
          "3) " + " La Constitució de Cadis ",
          "4) " + "Totes les opcions són incorrectes "
        ],
        a: 2
      },
      {
        q: "29.- Quina Sala del Tribunal Suprem presideix una dona per primera vegada a la història? ",
        o: [
          "1) " + "La Sala del Civil ",
          "2) " + "La Sala del Social ",
          "3) " + "La Sala del Penal ",
          "4) " + "La Sala del Contenciós Administratiu "
        ],
        a: 1
      },
      {
        q: "30.- La viola és un instrument de : ",
        o: [
          "1) " + "Vent metall ",
          "2) " + "Corda ",
          "3) " + "Percussió ",
          "4) " + "Vent fusta "
        ],
        a: 1
      },
      {
        q: "Una persona cissexual és aquella: ",
        o: [
          "1) " + "Que se sent del sexe al qual pertany biològicament ",
          "2) " + "Que sent aversió a l´heterosexualita",
          "3) " + " Que es troba a disgust amb la seva anatomia sexual de naixement ",
          "4) " + "Que presenta caràcters sexuals d'ambdós sexes "
        ],
        a: 0
      },
      {
        q: "32.- Quina figura retòrica observes a la frase ”T´ho he explicat mil vegades” ",
        o: [
          "1) " + "Hipèrbaton ",
          "2) " + "Anàfora ",
          "3) " + "Metàfora ",
          "4) " + "Hipèrbole "
        ],
        a: 3
      },
      {
        q: "33.- Les properes eleccions al Parlament de Catalunya estan previstes pel:",
        o: [
          "1) " + "7 de febrer de 2021 ",
          "2) " + "14 de febrer de 2021 ",
          "3) " + "15 de març de 2021 ",
          "4) " + " 30 de març de 2021 "
        ],
        a: 1
      },
      {
        q: "34.- LinkedIn és una xarxa social orientada de forma preferent a la: ",
        o: [
          "1) " + "Creació i manteniment d´una xarxa de contactes laborals ",
          "2) " + "Difusió i divulgació de fotografies ",
          "3) " + "Relacions de tipus personal i relacionades amb l´oci ",
          "4) " + "Compra i venda de productes de segona mà "
        ],
        a: 0
      },
      {
        q: "La Gioconda és una pintura de: ",
        o: [
          "Tizià ",
          "Michelangelo Buonarroti (Miquel Àngel) ",
          "Tintoretto ",
          "Leonardo da Vinci "
        ],
        a: 3
      },
      {
        q: "36.- “Cafè d´idees “ és un programa de TVE Catalunya presentat per: ",
        o: [
          "1) " + "Lidia Heredia ",
          "2) " + "Laura Rosel ",
          "3) " + "Gemma Nierga ",
          "4) " + "Mònica Terribas "
        ],
        a: 2
      },
      {
        q: "37.- El Premi Nobel de la Pau 2020 s´ha atorgat a: ",
        o: [
          "1) " + "L´Alt Comissionat de les Nacions Unides per als Refugiats (ACNUR) ",
          "2) " + "El Comitè Internacional de la Creu Roja ",
          "3) " + "El Programa Mundial d´Aliments de l´ONU ",
          "4) " + " La Campanya Internacional per a la Prohibició de les Mines Antipersones "
        ],
        a: 2
      },
      {
        q: "38.- L´actor protagonista de la pel·lícula “No matarás “ estrenada l´octubre de 2020 és:",
        o: [
          "1) " + "Quim Gutiérrez ",
          "2) " + "Raúl Arévalo ",
          "3) " + "Mario Casas ",
          "4) " + "Joel Bosqued "
        ],
        a: 2
      },
      {
        q: "39.- La unitat de mesura del treball en física és : ",
        o: [
          "1) " + "El joule ",
          "2) " + "L´ampere ",
          "3) " + "La caloria ",
          "4) " + " El newton "
        ],
        a: 0
      },
      {
        q: "40.- L´expedient de regulació d´ocupació (ERO) permet una prestació d´atur en cas de: ",
        o: [
          "1) " + "Pèrdua voluntària i temporal d´una feina",
          "2) " + "Pèrdua de la feina derivada d´un expedient disciplinari ",
          "3) " + "Pèrdua involuntària, definitiva o temporal, d´una feina ",
          "4) " + "Pèrdua involuntària de la feina definitiva amb fill/s a càrrec "
        ],
        a: 2
      },
      {
        q: "41.- En matemàtiques l´eix horitzontal s´anomena eix de la x o també: ",
        o: [
          "1) " + "Eix de la tangent ",
          "2) " + "Eix de coordenades ",
          "3) " + "Eix d’abscisses ",
          "4) " + "Eix d´ordenades "
        ],
        a: 2
      },
      {
        q: "42.- Quina sèrie de TV està ambientada a la ciutat de Birmingham de després de la I Guerra  Mundial i narra la història d´una família de gàngsters? ",
        o: [
          "1) " + "The Blacklist ",
          "2) " + "Ozark ",
          "3) " + "Peaky Blinders ",
          "4) " + "Dark "
        ],
        a: 2
      },
      {
        q: "43.- L´obra “Yerma” de Federico García Lorca pertany al gènere de l´/del/de la: ",
        o: [
          "1) " + "Teatre ",
          "2) " + "Assaig ",
          "3) " + "Novel·la ",
          "4) " + "Poesia"
        ],
        a: 0
      },
      {
        q: "44.-Com s´anomena el tipus de coronavirus notificat per primera vegada a la ciutat xinesa de  Wuhan a finals de l´any 2019? ",
        o: [
          "1) " + "SARS-CoV-1 ",
          "2) " + "MERS-CoV ",
          "3) " + "SARS-CoV-2 ",
          "4) " + "SARS-CoV "
        ],
        a: 2
      },
      {
        q: "45.- La capital de la República de Romania és: ",
        o: [
          "1) " + "Bucarest ",
          "2) " + "Budapest",
          "3) " + "Berna ",
          "4) " + "Sofia "
        ],
        a: 0
      },
      {
        q: "46.- Quina de les següents obres no és del escriptor Juan Marsé? ",
        o: [
          "1) " + "Rabos de lagartija ",
          "2) " + "Los mares del sur ",
          "3) " + "La muchacha de las bragas de oro ",
          "4) " + "Últimas tardes con Teresa "
        ],
        a: 1
      },
      {
        q: "47.- Quin dels següents països no es troba geogràficament al continent africà? ",
        o: [
          "1) " + "Iemen ",
          "2) " + "Djibouti ",
          "3) " + "Burkina Faso",
          "4) " + "Togo "
        ],
        a: 0
      },
      {
        q: "48.- Quin municipi no forma part de la Zona de Baixes Emissions de Barcelona (ZBE)?",
        o: [
          "1) " + "L´Hospitalet ",
          "2) " + "Badalona ",
          "3) " + "Esplugues de Llobregat ",
          "4) " + "Sant Adrià del Besòs "
        ],
        a: 1
      },
      {
        q: "49.- Quina de les següents parts no forma part de l´intestí prim? ",
        o: [
          "1) " + "Còlon ",
          "2) " + "Duodè ",
          "3) " + "Jejú ",
          "4) " + "Ili "
        ],
        a: 0
      },
      {
        q: "50.- Els fets coneguts com la “Setmana Tràgica” de Barcelona van succeir l´any: ",
        o: [
          "1) " + "1898 ",
          "2) " + "1909 ",
          "3) " + "1929 ",
          "4) " + "1948 "
        ],
        a: 1
      },
      {
        q: "51.- Quina de les següents parts no forma part de la geosfera? ",
        o: [
          "1) " + "Mantell ",
          "2) " + "Escorça ",
          "3) " + "Hidrosfera ",
          "4) " + "Nucli "
        ],
        a: 2
      },
      {
        q: "52.- Qui és l´actual primer ministre d´Israel ? ",
        o: [
          "1) " + "Ariel Sharon ",
          "2) " + "Benjamin Netanyahu ",
          "3) " + "Nattali Bennett ",
          "4) " + "Benny Gantz "
        ],
        a: 1
      },
      {
        q: "53.- Qui es l’autor del quadre “Guernica”? ",
        o: [
          "1) " + "Salvador Dalí ",
          "2) " + "Francisco de Goya ",
          "3) " + "Pablo Picasso",
          "4) " + "Joan Miró "
        ],
        a: 2
      },
      {
        q: "54.-La novel.la guanyadora del premi Planeta 2020 és: ",
        o: [
          "1) " + "“Un océano para llegar aquí” ",
          "2) " + "“Aquitania”",
          "3) " + "“Occitania” ",
          "4) " + " “Patria” "
        ],
        a: 1
      },
      {
        q: "55.- Qui és l´autor/a de la novel·la “Tiempo de silencio”? ",
        o: [
          "1) " + "Luis Martín-Santos ",
          "2) " + "Camilo José Cela ",
          "3) " + "Carmen Laforet ",
          "4) " + "Rosa Chacel"
        ],
        a: 0
      }
    ],
  
    // (A2) HTML ELEMENTS
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper
  
    // (A3) GAME FLAGS
    now: 0, // current question
    score: 0, // current score
  
    // (B) INIT QUIZ HTML
    init: function () {
      // (B1) WRAPPER
      quiz.hWrap = document.getElementById("quizWrap");
  
      // (B2) QUESTIONS SECTION
      quiz.hQn = document.createElement("div");
      quiz.hQn.id = "quizQn";
      quiz.hWrap.appendChild(quiz.hQn);
  
      // (B3) ANSWERS SECTION
      quiz.hAns = document.createElement("div");
      quiz.hAns.id = "quizAns";
      quiz.hWrap.appendChild(quiz.hAns);
  
      // (B4) GO!
      quiz.draw();
    },
  
    // (C) DRAW QUESTION
    draw: function () {
      // (C1) QUESTION
      quiz.hQn.innerHTML = quiz.data[quiz.now].q;
  
      // (C2) OPTIONS
      quiz.hAns.innerHTML = "";
      for (let i in quiz.data[quiz.now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.hAns.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.data[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", quiz.select);
        quiz.hAns.appendChild(label);
      }
    },
  
    // (D) OPTION SELECTED
    select: function () {
      // (D1) DETACH ALL ONCLICK
      let all = quiz.hAns.getElementsByTagName("label");
      for (let label of all) {
        label.removeEventListener("click", quiz.select);
      }

      document.getElementById("next").style.backgroundColor = "blue";

      // (D2) CHECK IF CORRECT
      let correct = this.dataset.idx == quiz.data[quiz.now].a;         
      if (correct) {
        quiz.score++;
        this.classList.add("correct");
      } else {
        this.classList.add("wrong");
        document.getElementById("textoCorrecto").style.display = "block";
        document.getElementById("respuestacorrecta").innerHTML = quiz.data[quiz.now].a + 1;
      }


      
      
      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
  
      document.getElementById("next").addEventListener("click", nextPage);
  
      function nextPage() {
   
        if (quiz.now < quiz.data.length) { 
          quiz.draw();
          document.getElementById("next").style.backgroundColor = "red";
          document.getElementById("textoCorrecto").style.display = "none";
         }
        else {
          quiz.hQn.innerHTML = `${quiz.score} de ${quiz.data.length}`;
          quiz.hAns.innerHTML = "";
          document.getElementById("next").innerHTML = "";
          document.getElementById("next").style.display = "none";
        }
      }
    }
  
  };
  window.addEventListener("load", quiz.init);


