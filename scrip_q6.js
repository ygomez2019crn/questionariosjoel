var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "1) " + "",
          "2) " + "",
          "3) " + "",
          "4) " + ""
        ],
        a: x
      },
      {
        q: "",
        o: [
          "",
          "",
          "",
          ""
        ],
        a: 3
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


