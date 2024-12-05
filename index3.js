function saveErasmusAnswers() {

    const timesAttended = document.getElementById("times-attended").value;
    const englishLevel = document.getElementById("english-Level").value;
    const gpaValue = document.getElementById("gpa").value;
    
    if(timesAttended ==="none" || timesAttended === "once" || timesAttended ==="twice" ){
      
      if(timesAttended === "twice")
        {
        const resultMessage ='<p>You can not go to erasmus if you have already been twice</p>'
        document.getElementById("result").innerHTML = resultMessage;}
        

        else if(englishLevel==="C2" || englishLevel==="C1"|| englishLevel==="B2"|| englishLevel==="lower"){
           if(englishLevel==="lower")
            {
            const resultMessage ='<p>You cant go to erasmus if your English level is lower than B2</p>'
            document.getElementById("result").innerHTML = resultMessage;}

            
            else if(gpaValue>=0 && gpaValue<=10){
                            
                if(gpaValue<5.5){
                    const resultMessage ='<p>You cant go to erasmus if your gpa is lower than 5.5</p>'
                    document.getElementById("result").innerHTML = resultMessage;
                }else {
                    // Writing all the point system here
                    var engpoints = 0;
                    if(englishLevel ==="C2"){
                        engpoints = 3;
                    }else if(englishLevel ==="C1"){
                        engpoints = 2;
                    }else if(englishLevel ==="B2"){
                        engpoints = 1;
                    }
                    var gpapoints = gpaValue * 0.7
                    var erasmusqualpoints = engpoints + gpapoints
                    if(erasmusqualpoints>= 6){
                        const resultMessage = '<p>You qualify for erasmus program!</p>';
                        document.getElementById("result").innerHTML = resultMessage;
                    }else{
                        const resultMessage = '<p>Unfortunately the points youve gathered arent enough to go to the erasmus program.</p>';
                        document.getElementById("result").innerHTML = resultMessage;
                    }
                    
                }
            }else {
                    const resultMessage ='<p> Wrong imput in gpa refresh and try again.</p>'
                    document.getElementById("result").innerHTML = resultMessage;
                }


            } else {
           const resultMessage ='<p> Wrong imput in english level refresh and try again.</p>'
           document.getElementById("result").innerHTML = resultMessage;
          }

         } else {
        const resultMessage ='<p> Wrong imput in erasmus attendance refresh and try again.</p>'
        document.getElementById("result").innerHTML = resultMessage;
    }
    
}
