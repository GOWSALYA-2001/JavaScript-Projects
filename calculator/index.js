
function update(val){
    //existing value + click value
    document.getElementById('name').value=document.getElementById('name').value+val
    //document.getElementById('name').innerHTML=userinput
}
function clearInput(){
    document.getElementById('name').value="";
}
function calculate(){
    var userInput = document.getElementById('name').value;
    var result = eval(userInput);
    document.getElementById('name').value=result;
}