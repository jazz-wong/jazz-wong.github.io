       /*
        * DOM Demo - Random Background Color Generator
        *
        * Each time the button is clicked, this JavaScript file will change
        * the background color of the page to a random RGB value.
        */


       // Whenever the page is loaded, it executes the code inside the function.
       window.onload = () => {
        // Select the first element that matches "button" tag
        const btn = document.querySelector("button");


        /*
         * Random number generator
         * A helper function that help generate any integer from 0 to num
         * Where num can be any number according to user
         */
        function random(num) {
            return Math.floor(Math.random() * num + 1);
        }


        // Whenever the button is clicked, it executes the code inside the function
        btn.addEventListener("click",() => {
            // Use the helper function to generate random color in RBG
            const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;


            // Change the CSS style for the body by assigning the random color to the background.
            document.body.style.backgroundColor = rndColor;
        });
    }
