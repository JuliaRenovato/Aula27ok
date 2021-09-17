class Ligacao{
    constructor(corpoA,corpoB) {
        var options ={
        bodyA: corpoA.body,
        bodyB: corpoB.body,
        stifness: 0.04,
        length: 100
        }
        this.ligacao = Matter.Constraint.create(options);
        World.add(world,ligacao);
      }
      display(){
        line(corpoA.body.position.x,corpoA.body.position.y,corpoB.body.position.x,corpoB.body.position.y);
      }
}