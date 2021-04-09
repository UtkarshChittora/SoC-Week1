//Age in days
function ageindays(){
    var birthYear = prompt("What year were u born??");
    var agedays = (2021-birthYear)*365;
    var h1 = document.createElement('h3');
    var text = document.createTextNode('You are ' + agedays + ' days old');
    h1.setAttribute('id', 'age');
    h1.appendChild(text);
    document.getElementById("flex-box-result").appendChild(h1);
    
}
function reset(){
    document.getElementById('age').remove();
}
