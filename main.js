const calcBmi = ()=>{
    if(inputHeight.value && inputWeight.value){
        if(inputHeight.value>0 && inputWeight.value>0){
     const bmi = (inputWeight.value/(inputHeight.value/100)**2).toFixed(2)
     result.innerHTML=`
                <div class="output">
                    <p class="text">Your BMI is</p>
                    <p id="bg" class="para">${bmi}</p>
                    <p id="category" class="text nor"></p>
                    <p id="shape" class="text nor"></p>
                    <p class="tip">By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
                </div>
     ` 
       if(bmi<18.5){
        category.innerHTML= "Under weight"
         category.style.color="rgb(255, 255, 81)"
        shape.innerHTML="Time to grab a bite!"
        shape.style.color="red"
        bg.style.backgroundColor ="rgb(222, 119, 119)"
       }else if(bmi>=18.5 && bmi<=24.9){
         category.innerHTML= "Normal"
         category.style.color="green"
          shape.innerHTML="Great shape!"
          shape.style.color="green"
          bg.style.backgroundColor="rgb(120, 199, 126)"
       }else if(bmi>=25 && bmi<=29.9){
        category.innerHTML= "Overweight"
        category.style.color="rgb(225, 129, 20)"
        shape.innerHTML="Time to run!"
        shape.style.color="red"
        bg.style.backgroundColor ="rgb(236, 96, 96)"
      }else{
         category.innerHTML= "Obesity"
         category.style.color="red"
         shape.innerHTML="Time to run!"
         shape.style.color="red"
         bg.style.backgroundColor ="rgb(249, 11, 11)"

      }


     console.log(bmi)
        }else{
            alert("please enter valid height and wieght")
        }
    }else{
        alert("please enter height and wieght")
    }
}