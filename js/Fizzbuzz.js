//Step1: Wire up an event handler for the fizz buzz button
document.getElementById("btn-Submit").addEventListener("click", function(){
    //Step2: Store the user's input into a local variable named userWord
    let input1= parseInt(document.getElementById("input1").value);
    let input2= parseInt(document.getElementById("input2").value);
    let storage = [];
     console.log(input1);
    for (let loop = 1; loop <= 100; loop++) {
        if(loop % input1 == 0 && loop % input2 == 0) {
            storage.push("fizzbuzz");
        }   
        else if (loop % input1 == 0){
            storage.push ("fizz");
        }
        else if (loop % input2 == 0){
            storage.push("buzz");
        }
        else {
            storage.push(loop);
        } 
               
                
    }
    document.getElementById("output").innerText = storage.join(",");












});
