var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
      {
        q: "1 De qui és l’al·legoria “ El Mite de la Caverna” ?",
        o: [
          "1) Platón",
          "2) Sòcrates",
          "3) Aristòteles",
          "4) Tales de Mileto"
        ],
        a: 0 // arrays start with 0, so answer is 70 meters
      },
      {
        q: "Quin signe ortogràfic s’utilitza per marcar la pausaentre dos oracions d’un mateix paràgrafamb un significat relacionat?",
        o: [
          "1) Punts suspensius",
          "2) Punt final",
          "3) Dos punts",
          "4)Punt i seguit"
        ],
        a: 3
      },
      {
        q: "Quan una matèria en forma gasosa passa a forma liquida,es denomina?",
        o: [
          "1) Sublimació",
          "2) Fusió",
          "3) Solidificació",
          "4) Condensació"
        ],
        a: 3
      },
      {
        q: "Quan es parla del ponent, amb qui punt cardinales correspon?",
        o: [
          "1) Nord",
          "2) Est",
          "3) Oest",
          "4) Sud"
        ],
        a: 2
      },
      {
        q: "En quin mes de l’any el sol es troba més a propde la terra?",
        o: [
          "1) Juliol",
          "2) Setembre",
          "3) Març",
          "4) Desembre"
        ],
        a: 3
      },
      {
        q: "La comarca de la Segarra es troba en la provínciade:",
        o: [
          "1) Barcelona",
          "2) Tarragona",
          "3) Lleida",
          "4) Girona"
        ],
        a: 2
      },
      {
        q: "La capa exterior de la pell del cos humà es diu:",
        o: [
          "1) Dermis",
          "2) Hipodermes",
          "3) Epidermis",
          "4) Teixit adipós"
        ],
        a: 2
      },
      {
        q: "Quina és la branca de la Biologia que estudia elsanimals?",
        o: [
          "1) Ecologia",
          "2) Botànica",
          "3) Zoologia",
          "4) Antropologia"
        ],
        a: 2
      },
      {
        q: "Quan es va donar per acabada la Segona GuerraMundial?",
        o: [
          "1) 1936",
          "2) 1929",
          "3) 1939",
          "4) 1945"
        ],
        a: 3
      },
      {
        q: "Quants kilograms són una tona?",
        o: [
          "1) 1.000 kilograms",
          "2) 10.000 kilograms",
          "3) 100.000 kilograms",
          "4) 100 kilograms"
        ],
        a: 0
      },
      {
        q: "On es troba el castell de Sant’Angelo?",
        o: [
          "1) Pisa ",
          "2) Roma ",
          "3) Venècia ",
          "4) Florència"
        ],
        a: 1
      },
      {
        q: "En quin any es va dissoldre la Unió Soviètica?",
        o: [
          "1) 1989 ",
          "2) 1991 ",
          "3) 1993 ",
          "4) 1990 "
        ],
        a: 0
      },
      {
        q: "Quan parlem de “lacra” estem dient que és",
        o: [
          "1) Quelcom arbitrari",
          "2) Quelcom dissuasiu ",
          "3) Un defecte",
          "4) Totes son correctes"
        ],
        a: 2
      },
      {
        q: "Calcula l’àrea d’una circumferència de 6 m de diàmetre ? ",
        o: [
          "1) 28,26 m ",
          "2) 27,52 m ",
          "3) 28,78 m ",
          "4) 26,26 m "
        ],
        a: 0
      },
      {
        q: "Quina branca de la biologia estudia la interrelació dels éssers vius i el medi ambient?",
        o: [
          "1) Etologia ",
          "2) Ecologia ",
          "3) Botànica ",
          "4) Filogènia "
        ],
        a: 1
      },
      {
        q: "Quant sumen els angles d’un triangle? ",
        o: [
          "1) 90 graus ",
          "2) 200 graus ",
          "3) 180 graus",
          "4) 360 graus"
        ],
        a: 2
      },
      {
        q: "Qui ha estat guanyador/guanyadora del Premi Planeta 2020? ",
        o: [
          "1) Javier Cercas ",
          "2) Eva Garcia Sáenz de Urturi ",
          "3) Santiago Posteguillo ",
          "4) Dolores Redondo "
        ],
        a: 1
      },
      {
        q: "En quin continent es troba Groenlàndia? ",
        o: [
          "1) Oceania ",
          "2)  Àsia ",
          "3) Amèrica ",
          "4) Àfrica "
        ],
        a: 2
      },
      {
        q: "Quina és la capital de Turquia? ",
        o: [
          "1) Istanbul ",
          "2) Esmirna ",
          "3) Ankara ",
          "4) Bursa "
        ],
        a: 2
      },
      {
        q: "Els cercles imaginaris que envolten la terra sense passar pels pols, s’anomenen:",
        o: [
          "1) Equadors",
          "2) Meridians ",
          "3) Paral·lels ",
          "4) Tròpics "
        ],
        a: 2
      },
      {
        q: "On es pot veure l’escultura original de David, de Miguel Angel? ",
        o: [
          "1) Venècia ",
          "2) Florència ",
          "3) Paris",
          "4) Londres "
        ],
        a: 1
      },
      {
        q: "Quin tipus d’instrument musical és la cítara? ",
        o: [
          "1) De vent",
          "2) De percussió ",
          "3) De corda",
          "4) Electric "
        ],
        a: 2
      },
      {
        q: "Quants lustres passen en un segle? ",
        o: [
          "1) 10",
          "2) 20",
          "3) 30",
          "4) 50"
        ],
        a: 1
      },
      {
        q: "De 750 sancions de transit 45 són per excés de velocitat. Que percentatge suposa les sancions per excés de velocitat ? ",
        o: [
          "1) 7,6%",
          "2) 9,2%",
          "3) 6,0%",
          "4) 5,4%"
        ],
        a: 2
      },
      {
        q: "On es va celebrar el darrer campionat del món de futbol?. ",
        o: [
          "1) França ",
          "2) Rússia ",
          "3) Alemanya ",
          "4) Croàcia "
        ],
        a: 0
      },
      {
        q: "Quin jugador de la NBA fou parella durant una temporada de la popular Kim Kardashian?",
        o: [
          "1) James Harden ",
          "2) Kevin Duran ",
          "3) Kris Humphries ",
          "4) LeBron Lames "
        ],
        a: 2
      },
      {
        q: "Quin és el país que té 5 títols mundials de futbol?",
        o: [
          "1) Alemanya ",
          "2) Italià ",
          "3) Brasil ",
          "4) Anglaterra "
        ],
        a: 2
      },
      {
        q: "Qui és l’actual conseller/a d’Interior de la Generalitat de Catalunya?",
        o: [
          "1) Miquel Buch ",
          "2) Damià Calvet ",
          "3) Miquel Sàmper",
          "4) Alba Vergés "
        ],
        a: 2
      },
      {
        q: "Quin és el símbol químic de l’or? ",
        o: [
          "1) Ag ",
          "2) Cu",
          "3) Os ",
          "4) Au "
        ],
        a: 3
      },
      {
        q: "En quin país es troba la ciutat de Calcuta? ",
        o: [
          "1) Tailàndia ",
          "2) Pakistan ",
          "3) Índia ",
          "4) Indonesia "
        ],
        a: 2
      },
      {
        q: "Com s’anomena el resultat d’una divisió ? ",
        o: [
          "1) Dividend ",
          "2) Producte ",
          "3) Quocient ",
          "4) Residu"
        ],
        a: 2
      },
      {
        q: "En quin museu es troba el quadre conegut com “La mona lisa” ",
        o: [
          "1) Museu Orsay ",
          "2) Museu Grévin",
          "3) Museu d’Art Mod",
          "4) Museu del Louvre "
        ],
        a: 3
      },
      {
        q: "Quin d’aquests edificis modernistes no és d’ Antoni Gaudi? ",
        o: [
          "1) Casa Estapé",
          "2) Casa Milà ",
          "3) Casa Vicens ",
          "4) Casa Batlló "
        ],
        a: 0
      },
      {
        q: "En la mitologia romana, com es diu el deu de l’univers? ",
        o: [
          "1) Saturn ",
          "2) Júpiter ",
          "3) Zeus ",
          "4) Apol·lo "
        ],
        a: 1
      },
      {
        q: "Quin va ser l’indret on es van crear els Jocs Olímpics? ",
        o: [
          "1) A l’Acròpolis d’Atenes ",
          "2) Al Peloponès ",
          "3) A Olímpia ",
          "4) A l’illa de Creta "
        ],
        a: 2
      },
      {
        q: "Quina mesura s’utilitza per a mesurar la intensitat del so ? ",
        o: [
          "1) Decibel ",
          "2) Juli ",
          "3) Pascal ",
          "4) Newton "
        ],
        a: 0
      },
      {
        q: "Per què va rebre Nelson Mandela el Premi Nobel de la Pau?",
        o: [
          "1) Pel seu treball a favor de la justícia social i de la reconciliació etno-cultural basat en el respecte dels drets de les persones indígenes ",
          "2) Per la seva lluita a favor dels drets humans, negació d’armes i cooperació entre totes les nacions",
          "3) Pel seu treball per la lluita per la igualtat racial i el final pacífic del règim d’apartheid ",
          "4) Pels seus esforços per la democràcia i els drets humans, especialment de les dones i els infants "
        ],
        a: 2
      },
      {
        q: "Com s’anomena al procediment de pujar la bandera? ",
        o: [
          "1) Enlairar ",
          "2) Hissar ",
          "3) Aixecar ",
          "4) Alçar"
        ],
        a: 1
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


