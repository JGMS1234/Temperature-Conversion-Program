const toC = document.getElementById('toC');
const toF = document.getElementById('toF');
const Submit_Btn = document.getElementById('Submit_Btn');
const p = document.getElementById('unit');
const textbox = document.getElementById('textbox');
let result;

function convert_Func(){
    if(toC.checked){
        result = ((textbox.value -32) * (5/9)).toFixed(1);
        p.textContent = `Temperature: ${result} °C`}
    else if(toF.checked){
        result = ((textbox.value * (9/5)) + 32).toFixed(1);
        p.textContent = `Temperature: ${result} °F`}
    else{
        p.textContent = 'Please select a unit'}}