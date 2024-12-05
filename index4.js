function saveDiscountAnswers(){
    const gpaValue2 = document.getElementById("gpa2").value;
    const parentIncome = document.getElementById("income").value;

    // alert(`You have attended Erasmus: ${gpaValue2}`);

    if (gpaValue2>=0 && gpaValue2<=10){
        if (parentIncome>=0){
            if (gpaValue2>=7){
              //Calculations here
              var incomepoints =0;
              if (parentIncome<=24000){
                incomepoints = 3;
              }else if (parentIncome>24000 && parentIncome<=35000){
                incomepoints = 2;
              } else if (parentIncome>35000 && parentIncome<=45000){
                incomepoints =1;
              }
              var gpapoints2 = gpaValue2 * 0.7
              var discountqualpoints = incomepoints + gpapoints2;
              if(discountqualpoints>=5.5){
                const resultMessage = '<p>You qualify for a discount!</p>';
                document.getElementById("resultwindow4").innerHTML = resultMessage;
              }else{
                const resultMessage = '<p>You do not qualifyy for a discount.</p>';
                 document.getElementById("resultwindow4").innerHTML = resultMessage;
              }

            }else{
              const resultMessage ='<p> You dont qualify if your gpa is lower than 7.</p>'
              document.getElementById("resultwindow4").innerHTML = resultMessage;

            }

        }else{
         const resultMessage ='<p> Wrong imput in parent income refresh and try again.</p>'
         document.getElementById("resultwindow4").innerHTML = resultMessage;
        }

    }else{
        const resultMessage ='<p> Wrong imput in gpa refresh and try again.</p>'
        document.getElementById("resultwindow4").innerHTML = resultMessage;
    }
}