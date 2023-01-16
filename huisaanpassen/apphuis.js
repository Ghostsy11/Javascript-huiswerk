class App {
    runApplication() {


        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        this.tekenHuis();


    }


    tekenHuis(x, y, g) {

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(x200, y400);
        g.lineTo(x + 400, y + 100);
        g.lineTo(x + 300, y + 100);
        g.lineTo(x - 100, y + 100);
        g.closePath();
        g.stroke();
        g.fill()




        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(x200, y300);
        g.lineTo(x + 400, y + 100);
        g.lineTo(x + 400, y + 300);
        g.lineTo(x, y + 200)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(x700, y200);
        g.lineTo(x + 100, y + 100);
        g.lineTo(x - 100, y + 200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(x600, y400);
        g.lineTo(x + 200, y + 100);
        g.lineTo(x, y = 200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(x600, y400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.moveTo(y325, x500);
        g.lineTo(x, y - 150);
        g.lineTo(x + 125, y - 120);
        g.lineTo(x + 125, y + 30)
        g.closePath();
        g.stroke();
        g.fill()

        console.log(this.tekenHuis());

    }


}

let app = new App();
app.runApplication();

