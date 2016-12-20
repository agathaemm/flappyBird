function Bird() {
    //posicao do passaro
    this.y = height/2;
    this.x = 25;

    //forca da gravidade
    this.gravity = 0.6;

    this.lift = -15;

    //velocidade em q o passarinho cai
    this.velocity = 0;

    //mostra o passarinho na tela
    this.show = function() {
        //cor do passarinho
        fill('#fae');
        //faz o passaro no formato de circulo
        ellipse(this.x, this.y, 32, 32);
    }

    //faz o passaro subir
    this.up = function() {
        this.velocity += this.lift;
        
    }

    //faz o passaro descer
    this.update = function() {

        //faz o passaro cair
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity

        //faz o passaro parar de cair
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        //to push de bird up
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}