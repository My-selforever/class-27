class Attach
{
    constructor(a,b)
    {
        var constraint_Options =
        {
            bodyA:a,
            bodyB:b,
            stiffness:0.02,
            length:20
        }
        this.attach = Constraint.create(constraint_Options);
        console.log(this.attach)
        World.add(world,this.attach);
    }

    display()
    {
        stroke("Purple")
        line(bird.body.position.x,bird.body.position.y,tlog.body.position.x,tlog.body.position.y)
    }
}
