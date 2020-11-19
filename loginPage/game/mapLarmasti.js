class larMasti {
    constructor() {
        this.wallMiddle1;
        this.wallMiddle2;
        this.wallMiddle3;
        this.wallMiddle4;
        this.wallMiddle5;
        this.wallMiddle6;
        this.wallMiddle7;
        this.wallMiddle8;
        this.wallMiddle9;
        this.wallMiddle10;
        this.wallMiddle11;
        this.wallMiddle12;
        this.wallMiddle13;
        this.wallMiddle14;
        this.wallMiddle15;
        this.wallMiddle16;
        this.wallMiddle17;
        this.wallMiddle18;
        this.wallMiddle19;
        this.wallMiddle20;

    };

    world() {
        this.mainRock = createSprite(width/2,height/2,width,height);
        this.mainRock.shapeColor = "blue"
        this.bedrock1 = createSprite(1255,300,100,500);
        this.bedrock1.shapeColor = "black"
        this.bedrock2 = createSprite(20,300,50,500);
        this.bedrock2.shapeColor = "black"
        this.bedrock3 = createSprite(width/2,height-0,width,100);
        this.bedrock3.shapeColor = "black"
        this.bedrock4 = createSprite(width/2,0,width,100);
        this.bedrock4.shapeColor = "black"
        this.allo1 = createSprite(1110,401,190,195);
        this.allo1.shapeColor = "pink";
        this.allo2 = createSprite(510,401,400,197);
        this.allo2.shapeColor = "cyan";
        this.allo3 = createSprite(176,401,260,195);
        this.allo3.shapeColor = "black"
        this.allo4 = createSprite(862,401,300,195);
        this.allo4.shapeColor = "yellow"
        this.wallMiddle1 = createSprite(1005,425,20,150);
        this.wallMiddle2 = createSprite(width/2,height/2+3,width-90-90,50);
        this.wallMiddle3 = createSprite(310,425,20,150);
        this.wallMiddle4 = createSprite(710,425,20,150);
        this.wallMiddle5 = createSprite(710,425,20,150);
        this.wallMiddle6 = createSprite(710,425,20,150);
        this.wallMiddle7 = createSprite(710,425,20,150);
        this.wallMiddle8 = createSprite(520,350,300,20);
        this.wallMiddle9 = createSprite(520,450,300,20);
        this.wallMiddle10 = createSprite(520,400,20,100);
        this.wallMiddle11 = createSprite(590,400,20,40);
        this.wallMiddle12 = createSprite(450,400,20,40);
        this.wallMiddle13 = createSprite(1120,425,20,150);
        this.wallMiddle14 = createSprite(625,150,20,200);
        this.wallMiddle15 = createSprite(330,160,570-100,20);
        this.wallMiddle16 = createSprite(330+590,160,570-100,20);
        this.wallMiddle17 = createSprite(520+340,350,300 - 100,20);
        this.wallMiddle18 = createSprite(520+340,450,300 - 100,20);
        this.wallMiddle19 = createSprite(520+340,400,20,100);
        this.wallMiddle20 = createSprite(590+340,400,20,40);
        this.wallMiddle20 = createSprite(450+340,400,20,40);

        wallSet.add(this.wallMiddle1);
        wallSet.add(this.wallMiddle2);
        wallSet.add(this.wallMiddle3);
        wallSet.add(this.wallMiddle4);
        wallSet.add(this.wallMiddle5);
        wallSet.add(this.wallMiddle6);
        wallSet.add(this.wallMiddle7);
        wallSet.add(this.wallMiddle8);
        wallSet.add(this.wallMiddle9);
        wallSet.add(this.wallMiddle10);
        wallSet.add(this.wallMiddle11);
        wallSet.add(this.wallMiddle12);
        wallSet.add(this.wallMiddle13);
        wallSet.add(this.wallMiddle14);
        wallSet.add(this.wallMiddle15);
        wallSet.add(this.wallMiddle16);
        wallSet.add(this.wallMiddle17);
        wallSet.add(this.wallMiddle18);
        wallSet.add(this.wallMiddle19);
        wallSet.add(this.wallMiddle20);
        wallSet.add(this.bedrock1);
        wallSet.add(this.bedrock2);
        wallSet.add(this.bedrock3);
        wallSet.add(this.bedrock4);




    }
}
