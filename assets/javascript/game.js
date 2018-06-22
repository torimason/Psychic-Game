var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];

    var wins = 0;
    var losses = 0;

    document.onkeyup = function(event) {

        var userGuess =event.key.toLowerCase();

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        
        
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