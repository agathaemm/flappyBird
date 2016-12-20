var bird;
var pipe = [];

function setup() {
    createCanvas(400, 600);

    //cria um objeto bird
    bird = new Bird();
    //cria obejtos pipe e adiciona dentro do array
    pipe.push(new Pipe());
}

function draw() {
    background(0);

    for (var i=0; i< pipe.length; i++){
        pipe[i].show();
        pipe[i].update();

        if (pipe[i].hits(bird)){
            
        }

        if (pipe[i].offscreen()){
            pipe.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipe.push(new Pipe());
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        //console.log("SPACE");
    }
}