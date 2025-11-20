 function corrigir() {
        var pontos = 0;

        
        var q1 = document.quiz.q1.value;
        var q2 = document.quiz.q2.value;
        var q3 = document.quiz.q3.value;
        var q4 = document.quiz.q4.value;

        if (q1 == "c") {
            pontos = pontos + 1;
        }
        if (q2 == "d") {
            pontos = pontos + 1;
        }
        if (q3 == "b") {
            pontos = pontos + 1;
        }
        if (q4 == "c") {
            pontos = pontos + 1;
        }

       
        var cb5a = document.quiz.cb5a.checked; 
        var cb5b = document.quiz.cb5b.checked; 
        var cb5c = document.quiz.cb5c.checked; 
        var cb5d = document.quiz.cb5d.checked; 

        
        var pontos5 = 0;

        if (cb5a) {
            pontos5 = pontos5 + 1;
        }
        if (cb5b) {
            pontos5 = pontos5 + 1;
        }
        if (cb5c) {
            pontos5 = pontos5 - 1;
        }
        if (cb5d) {
            pontos5 = pontos5 - 1;
        }

        
        if (pontos5 == 2) {
            pontos = pontos + 1;
        }

        var texto = "Você acertou " + pontos + " de 5 pontos.";
        document.getElementById("resultado").innerHTML = texto;
    }

