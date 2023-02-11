var backgroundImg, backgroound;
var shooter, shooterImg, shooterImg_2;
var zumbi, zumbi_img;
var coracao1, coracao1_img, coracao2, coracao2_img, coracao3, coracao3_img;
var zumbis;

function preload(){
  backgroundImg = loadImage("assets/bg.jpeg");
  shooterImg = loadImage("assets/shooter_2.png");
  shooterImg_2 = loadImage("assets/shooter_3.png");
  zumbi_img = loadImage("assets/zombie.png");
  coracao1_img = loadImage("assets/heart_1.png");
  coracao2_img = loadImage("assets/heart_2.png");
  coracao3_img = loadImage("assets/heart_3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  backgroound = createSprite(displayWidth / 2 +160, displayHeight / 2 +75, 20,20);
  backgroound.addImage(backgroundImg);
  backgroound.scale = 1.25;

  shooter = createSprite(displayWidth -1150, displayHeight -300, 50, 50);
  shooter.addImage(shooterImg);
  shooter.scale = 0.6;
  shooter.setCollider("rectangle",0 ,0 ,250,400);
  shooter.debug = false;

  coracao1 = createSprite(displayWidth +270, 40, 20, 20);
  coracao1.addImage("coracao1",coracao1_img);
  coracao1.scale = 0.5;
  coracao1.visible = false;

  coracao2 = createSprite(displayWidth +220, 40, 20, 20);
  coracao2.addImage("coracao2",coracao2_img);
  coracao2.scale = 0.5;
  coracao2.visible = false;

  coracao3 = createSprite(displayWidth +170, 40, 20, 20);
  coracao3.addImage("coracao3",coracao3_img);
  coracao3.scale = 0.5;
  
  zumbis = new Group();
  
  
  edges = createEdgeSprites();
}

function draw() {
  background(0); 

  if (keyDown(UP_ARROW) || touches.length > 0){
    shooter.y = shooter.y -10;
  }

  if (keyDown(DOWN_ARROW) || touches.length > 0){
    shooter.y = shooter.y +10;
  }

  if (keyWentDown("space") || touches.length > 0){
    shooter.addImage(shooterImg_2);
  }
  else if (keyWentUp("space") || touches.length > 0){
    shooter.addImage(shooterImg);
  }

  if (zumbis.isTouching(shooter)){

    for (var i = 0; i <zumbis.length; i += 1){

      if(zumbis[i].isTouching(shooter)){

        zumbis[i].destroy();
      }


    }
  }

  shooter.collide(edges[3]);
  shooter.collide(edges[2]);

  criacao_zumbi();

drawSprites();

}

function criacao_zumbi(){

  if (frameCount % 50 === 0){
    zumbi = createSprite(random(500, 1100), random(100, 500), 40, 40);
    zumbi.addImage(zumbi_img);
    zumbi.scale = 0.25;
    zumbi.velocityX = -3;
    zumbi.setCollider("rectangle", 0, 0, 400, 800);
    zumbi.debug = false;
    zumbi.lifetime = 400 ;
    zumbis.add(zumbi);
  }


}
