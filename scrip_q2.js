var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
      {
        q: "1. Símbol químic del sodi: ",
        o: [
          "1) " + "Ag ",
          "2) " + "So",
          "3) " + "Cl ",
          "4) " + "Na "
        ],
        a: 3
      },
      {
        q: "2. Qui va crear el personatge de Harry Potter? ",
        o: [
          "1) " + "George Lucas ",
          "2) " + "J. K. Rowling ",
          "3) " + "George R.R. Martin ",
          "4) " + "Susan Collins "
        ],
        a: 1
      },
      {
        q: "3. Nom dels tres darrers presidents de la Generalitat de Catalunya: ",
        o: [
          "1) " + "Pasqual Maragall, Carles Puigdemont, Quim Torra",
          "2) " + "Quim Torra, Carles Puigdemont, Artur Mas ",
          "3) " + "Jordi Pujol, Pasqual Maragall, Carles Puigdemont ",
          "4) " + "José Montilla, Artur Mas, Carles Puigdemont "
        ],
        a: 1
      },
      {
        q: "4. Quin gas ens protegeix de la radiació solar?: ",
        o: [
          "1) " + "Gas CFC ",
          "2) " + "Ozò ",
          "3) " + "Oxígen ",
          "4) " + "Nitrògen "
        ],
        a: 1
      },
      {
        q: "5. La ciutat de Sant Joan Despí no limita territorialment amb:",
        o: [
          "1) " + "Sant Feliu de Llobregat ",
          "2) " + "Sant Just Desvern ",
          "3) " + "Molins de Rei",
          "4) " + "Santa Coloma de Cervelló "
        ],
        a: 2
      },
      {
        q: "6. Indiqueu el nom del Ministre de Transports, Mobilitat i Agenda Urbana de  l'actual Govern Espanyol:",
        o: [
          "1) " + "Salvador Illa Roca ",
          "2) " + "Pedro Francisco Duque Duque",
          "3) " + "Fernando Grande – Marlaska Gómez ",
          "4) " + "José Luis Ábalos Meco "
        ],
        a: 3
      },
      {
        q: "Què s’encarrega de transportar l’oxigen pel cos? ",
        o: [
          "1) " + "L’hemoglobina ",
          "2) " + "La insulina ",
          "3) " + "La testosterona ",
          "4) " + "la queratina "
        ],
        a: 0
      },
      {
        q: "Dos números naturals sumen 15 i el resultat del producte de la seva  suma per la seva diferència és 75. Quins són aquests números? ",
        o: [
          "1) " + "12 i 3 ",
          "2) " + "14 i 1 ",
          "3) " + "8 i 7 ",
          "4) " + "10 i 5 "
        ],
        a: 3
      },
      {
        q: "Quin arquitecte té més obres a Sant Joan Despí?: ",
        o: [
          "1) " + "Antoni Gaudí",
          "2) " + "Josep Maria Jujol ",
          "3) " + "Francesc de Paula",
          "4) " + "Rafael Masó "
        ],
        a: 1
      },
      {
        q: "Quina pel·lícula és la candidata espanyola als premis Óscar 2021? ",
        o: [
          "1) " + "La trinchera infinita ",
          "2) " + "El hoyo",
          "3) " + "Explota, explota ",
          "4) " + "Invisibles "
        ],
        a: 0
      },
      {
        q: "Qui va pintar «Las Meninas» ",
        o: [
          "1) " + "Murillo ",
          "2) " + "Romero de Torres",
          "3) " + "Goya ",
          "4) " + "Velázquez"
        ],
        a: 3
      },
      {
        q: "Quant són 16 bits? ",
        o: [
          "1) " + "1 Mb ",
          "2) " + "2 bytes ",
          "3) " + "1 byte ",
          "4) " + "4 bytes"
        ],
        a: 1
      },
      {
        q: "Per què es famosa Marie Curie? ",
        o: [
          "1) " + "Per haver guanyat un Premi Nobel ",
          "2) " + "Per descobrir la radioactivitat",
          "3) " + "Per la teoria de la relativitat ",
          "4) " + "Per haver guanyat un Premi Nobel i descobrir la radioactivitat"
        ],
        a: 3
      },
      {
        q: "A on es celebraran els propers Jocs Olímpics d’estiu? ",
        o: [
          "1) " + "A Londres ",
          "2) " + "A Atenes",
          "3) " + "A Tokio",
          "4) " + "A Mèxic "
        ],
        a: 2
      },
      {
        q: "Nom del President i Vicepresident electes dels Estats Units: ",
        o: [
          "1) " + "Donald Trump i Joe Biden ",
          "2) " + "Joe Biden i Kamala Harris ",
          "3) " + "Donald Trump i Kamala Harris ",
          "4) " + "Joen Biden i Maya Harris. "
        ],
        a: 1
      },
      {
        q: "Una nau disposa de queviures per a 20 dies i 45 tripulants però, en iniciar  el viatge, 9 tripulants es queden a port. Per a quants dies hi hauran  queviures?: ",
        o: [
          "1) " + "16 ",
          "2) " + "25 ",
          "3) " + "30",
          "4) " + "35"
        ],
        a: 1
      },
      {
        q: "Què és més dens, l’aigua en estat líquid o estat gelat? ",
        o: [
          "1) " + "Aigua > Gel ",
          "2) " + "Aigua < Gel ",
          "3) " + "Aigua = Gel ",
          "4) " + "No tenen densitat"
        ],
        a: 0
      },
      {
        q: "L’edifici Torre de la Creu de Sant Joan Despí està situat al barri: ",
        o: [
          "1) " + "Pla del Vent - Torreblanca ",
          "2) " + "Les Planes",
          "3) " + "Residencial Sant Joan",
          "4) " + "Centre "
        ],
        a: 3
      },
      {
        q: "El nom de l’actual Consellera de Salut de la Generalitat de Catalunya és: ",
        o: [
          "1) " + "Meritxell Budò i Pla ",
          "2) " + "Alba Verges i Bosch",
          "3) " + "Ester Capella i Ferré",
          "4) " + "Àngels Ponsa i Roca "
        ],
        a: 1
      },
      {
        q: "21. Quin material és biocompatible amb les persones? ",
        o: [
          "1) " + "Ferro ",
          "2) " + "Alumini ",
          "3) " + "Titani ",
          "4) " + "Plom "
        ],
        a: 2
      },
      {
        q: "A Espanya, qui té delegades les competències en matèria de Sanitat? ",
        o: [
          "1) " + "El Congrés dels Diputats ",
          "2) " + "El Govern espanyol ",
          "3) " + "Els Governs de les Comunitats Autònomes ",
          "4) " + "El Ministre de Sanitat "
        ],
        a: 2
      },
      {
        q: "23. Autor de «El Lazarillo de Tormes»",
        o: [
          "1) " + "Unamuno ",
          "2) " + "Anònim ",
          "3) " + "Quevedo ",
          "4) " + "Miguel de Cervantes"
        ],
        a: 1
      },
      {
        q: "24. Quins partits conformen l’actual Govern d’Espanya? ",
        o: [
          "1) " + "PSOE – Unidas Podemos",
          "2) " + "PSOE – Izquierda Unida ",
          "3) " + "PSOE – Ciudadanos ",
          "4) " + "Cap de les respostes és correcte."
        ],
        a: 0
      },
      {
        q: "25. Quin d’aquests parcs no està al terme municipal de Sant Joan Despí? ",
        o: [
          "1) " + "Can Mercader ",
          "2) " + "Parc de Torreblanca ",
          "3) " + "Parc de Sant Pancraç ",
          "4) " + "Parc de la Fontsanta "
        ],
        a: 0
      },
      {
        q: "26. Nom del president del Partit Popular?",
        o: [
          "1) " + "Pablo Iglesias ",
          "2) " + "Pablo Casado ",
          "3) " + "Pablo Echenique ",
          "4) " + "Pablo Abascal "
        ],
        a: 1
      },
      {
        q: "27. En quin any Amstrong va trepitjar la Lluna? ",
        o: [
          "1964 ",
          "1969 ",
          "1972 ",
          "1980"
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


