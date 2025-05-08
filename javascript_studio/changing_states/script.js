$(document).ready(function() {
    console.log("Document is ready");

    $(".info").click(function() {
        $("#mydiv").toggle("#display")
    });

    let jsonData = [];
    let currentIndex = 0;

    $.getJSON('love.json', function(data) {
        jsonData = data; // Store the fetched JSON array
        if (jsonData.length === 0) return; // Handle empty JSON

        function updatePart() {
            const PARTcontainer = document.getElementById("part");
            console.log('working'); 

            let x = jsonData[currentIndex];
            console.log('Current Item:', x); 

            let part = ""; 

            if (x.section === 'one') {
                part = 'PART I';
            } else if (x.section === 'two') {
                part = 'PART II';
            } else if (x.section === 'three') {
                part = "PART III";
            }

            // Update the part text in the DOM
            PARTcontainer.textContent = part;
        }
        

     let circle = ""; 
    for (let x = 0; x < data.length; x++) {

            if (data[x].ratio == "1") {
                $("#one").toggleClass("grey")
            } 
            
            if (data[x].ratio == "2") { 
                $("#one").addClass("grey")
                $("#two").toggleClass("grey1")
            } 

            if (data[x].ratio == "3") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").toggleClass("grey1")
            }
            
            if (data[x].ratio == "4") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").toggleClass("grey1")
            }
             if (data[x].ratio == "5") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").toggleClass("grey1")
            }
             if (data[x].ratio == "6") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").toggleClass("grey1")
            }
             if (data[x].ratio == "7") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").addClass("grey")
                $("#seven").toggleClass("grey1")
            }
             if (data[x].ratio == "8") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").addClass("grey")
                $("#seven").addClass("grey")
                $("#eight").toggleClass("grey1")
            }
            else if (data[x].ratio == "9") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").addClass("grey")
                $("#seven").addClass("grey")
                $("#eight").addClass("grey")
                $("#nine").toggleClass("grey1")
            }
            else if (data[x].ratio == "10") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").addClass("grey")
                $("#seven").addClass("grey")
                $("#eight").addClass("grey")
                $("#nine").addClass("grey")
                $("#ten").toggleClass("grey1")
            }
            else if (data[x].ratio == "11") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").addClass("grey")
                $("#seven").addClass("grey")
                $("#eight").addClass("grey")
                $("#nine").addClass("grey")
                $("#ten").addClass("grey")
                $("#eleven").toggleClass("grey1")
            }
            else if (data[x].ratio == "12") { 
                $("#one").addClass("grey")
                $("#two").addClass("grey")
                $("#three").addClass("grey")
                $("#four").addClass("grey")
                $("#five").addClass("grey")
                $("#six").addClass("grey")
                $("#seven").addClass("grey")
                $("#eight").addClass("grey")
                $("#nine").addClass("grey")
                $("#ten").addClass("grey")
                $("#eleven").addClass("grey")
                $("#twelve").toggleClass("grey1")
            }

            else if (data[x].ratio == "") { 
                $("#one").toggleClass("circle")
            }
        
        }



function updateCard() {
            let data = jsonData[currentIndex]; 
            $(".container").html(`
                <div class='card'>
                    <div id='card'>
                        <div class='question'>${data.question}</div>
                    </div>
                </div>
            `);
            updatePart(); 
        }

        const keysPressed = {};

        $(document).on('keydown', function(event) {
            keysPressed[event.key] = true;

            if (keysPressed['a'] && keysPressed['ArrowLeft']) {
                currentIndex = (currentIndex - 1 + jsonData.length) % jsonData.length;
                updateCard();
                updateDot();
            }

            if (keysPressed['d'] && keysPressed['ArrowRight']) {
                currentIndex = (currentIndex + 1) % jsonData.length;
                updateCard();
                updateDot();
            }
        });

        $(document).on('keyup', function(event) {
            delete keysPressed[event.key];
        });

        updateCard();
    });

    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
});
