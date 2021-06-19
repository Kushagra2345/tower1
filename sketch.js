const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint  

function preload(){

    PolygonImg=loadImage("polygon.png")
}

function setup(){

    createCanvas(1200,700)
    engine=Engine.create()
    world=engine.world
    Engine.run(engine)

    Polygon=Bodies.circle(150,400,23,{isStatic:false,restitution:0.7})
    World.add(world,Polygon)

    ground=new Ground(600,685,1200,30);
    ground1=new Ground(950,460,240,20)
    ground2=new Ground(750,260,250,20)

    box1=new Box(660,120,30,30)
    box2=new Box(690,120,30,30)
    box3=new Box(720,120,30,30)
    box4=new Box(750,120,30,30)
    box5=new Box(780,120,30,30)
    box6=new Box(810,120,30,30)
    box7=new Box(840,120,30,30)
    box8=new Box(675,90,30,30)
    box9=new Box(705,90,30,30)
    box10=new Box(735,90,30,30)
    box11=new Box(765,90,30,30)
    box12=new Box(795,90,30,30)
    box13=new Box(825,90,30,30)
    box14=new Box(690,60,30,30)
    box15=new Box(720,60,30,30)
    box16=new Box(750,60,30,30)
    box17=new Box(780,60,30,30)
    box18=new Box(810,60,30,30)
    box19=new Box(705,30,30,30)
    box20=new Box(735,30,30,30)
    box21=new Box(765,30,30,30)
    box22=new Box(795,30,30,30)
    box23=new Box(720,0,30,30)
    box24=new Box(750,0,30,30)
    box25=new Box(780,0,30,30)
    box26=new Box(735,-30,30,30)
    box27=new Box(765,-30,30,30)
    box28=new Box(750,-60,30,30)

    Slingshot1=new Slingshot(this.Polygon,{x:100,y:420})
}

function draw(){

    console.log(box1)

    background("black")
    textSize(30)
    fill("white")
    text("("+mouseX+","+mouseY+")",40,30)

    var pos=Polygon.position
    imageMode(CENTER)
    image(PolygonImg,pos.x,pos.y,60,60)

    ground.display()
    ground1.display()
    ground2.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    Slingshot1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.Polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot1.fly()
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        Slingshot1.reset()
    }
}