console.log("PSBB");


function getNumberOfBus(numFam){
    var numberOfFamily = numFam;
    var numberOFamilyMember = prompt("Input the number of members in the family (separated by a space)");
    // console.log(numberOFamilyMember);
    var numbers = numberOFamilyMember.split(" "); // array
    // console.log(numbers);
    if(numberOfFamily !== numbers.length){
        console.log("Input must be equal with count of family")
        exit;
    }
    var sum = 0;
    console.log("continue this line");
    for(var i = 0; i < numbers.length; i++){
        sum += parseInt(numbers[i]);
    }
    var numberOfBus = Math.ceil(sum / 4);
    console.log("Minimum bus required is : " + numberOfBus);
}

getNumberOfBus(8);