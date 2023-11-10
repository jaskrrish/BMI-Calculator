const btn = document.getElementById('calculate')
// 
function weightType(){
    let wtType = document.querySelector('#wtType').value
    document.querySelector('#weight').placeholder = `in ${wtType}`
}
function heightType(){
    let htType = document.querySelector('#htType').value
    const cm = document.querySelector("#cm")
    const fts = document.querySelector(".fts")
    if(htType == "fts"){
        fts.classList.remove("none")
        cm.classList.add("none")
    }else{
        fts.classList.add("none")
        cm.classList.remove("none")
        }
    }
// 
btn.addEventListener('click',()=>{
    let height,weight;
    if(htType.value == "fts"){
            const fts = parseInt(document.querySelector('#fts').value)
            const inch = parseInt(document.querySelector('#inch').value)
             height = (fts*12*2.54)+(inch*2.54)
    }
    else{
         height = parseInt(document.querySelector('#cm').value)
    }
    if(wtType.value == "lbs"){
        const lbs = parseInt(document.querySelector('#weight').value)
         weight = 0.453592*lbs;
    }else{
         weight = parseInt(document.querySelector('#weight').value);
    }
    if(height == '' || isNaN(height) || isNaN(weight) || height<=0 || weight<=0 || weight==''){
        alert("Please enter the fields correctly");
    }else {
        let bmi = (weight/((height/100) **2)).toFixed(2);
        document.querySelector('#result').innerHTML=bmi;
        let status ='';
        if(bmi < 18.5){
            status='Underweight'
        }
        else if(bmi>=18.5 && bmi<=25){
            status="Normal"
        }
        else if (bmi >=25 && bmi<=30){
            status='Overweight'
        }
        else if(bmi>30){
            status='Obese'
        }
        document.querySelector('.comment').innerHTML=`Comment: you are <span id="comment">${status}</span>`;
        const bmiValueElement = document.querySelector('.bmi-value');
        bmiValueElement.style.width = ` ${100 -((bmi / 40) * 100)}%`;
        const bmiChartElement = document.querySelector('.bmi-chart');
        bmiChartElement.style.width = `100%`;
        // bmiChartElement.style.background = `linear-gradient(to right,green,yellow,orange, red)`;
    }
});