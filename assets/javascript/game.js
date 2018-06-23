var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];

    var wins = 0;
    var losses = 0;

    document.onkeyup = function(event) {

        var userGuess =event.key.toLowerCase();

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") ||(userGuess === "z")){ 
            if (userGuess === computerGuess) {
            wins++
            }

             else {
            losses++
            }
    
             var html = 
            "<p>You chose: " + userGuess + "</p>" + 
            "<p>I chose: " + computerGuess + "</p>" +
            "<p>Your wins: " + wins + "</p>" +
            "<p>Your Losses: " + losses + "</p>";

            document.querySelector("#game").innerHTML = html;
        }

        else {alert("Please select letter keys only.")};
            

        //need to make it to where users can only select letter keys.

       
    
    
    
    
    }