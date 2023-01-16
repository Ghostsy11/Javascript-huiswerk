//<p id="newstitle"> het nieuws</p>
//<p class="gamenews headline"> Mario kart 9 komt eindelijk eraan!</p>
//<p class="gamenews"> from software werkt aan nieuw project</p>
//dit is code commentaar voor javascript

class App {
    runApplication() {

        title.style.backgroundColor = "red";

        let x = Math.floor(Math.random() * 101);
        document.getElementById(x);

        if (x <= 20 && x >= 10) {
            console.log("That is between 10 to 20")
        }


        else if (x <= 40 && x >= 20) {
            console.log("That is between 20 to 40")
        }


        else if (x <= 60 && x >= 40) {

            console.log("That is between 40 to 60")
        }

        else if (x <= 100 && x >= 60) {

            console.log("That is between 60 to 100")
        }
        else if (x != 0 && x != 100) {

        }
        else {

        }



    }

}

let app = new App();
app.runApplication();