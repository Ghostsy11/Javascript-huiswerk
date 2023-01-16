class App {
    runApplication() {
        this.vertel();
        this.brh();
        this.optellen();
        this.sayhello();
    }

    vertel() {
        console.log("MARIO!!");
    }



    brh() {
        console.log("BWAHAHA!!!");
    }

    optellen() {
        let telop = 5 + 5
        alert(telop);
        return telop;
    }

    sayhello() {

        var naam = prompt("Wat is uw naam?");
        alert("Hoi " + naam + '!');
        return naam;

    }




}
let app = new App();
app.runApplication();