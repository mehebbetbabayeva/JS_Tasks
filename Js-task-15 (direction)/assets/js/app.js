//promp ile direction alin up olanda yuxari get right saga get 

let direction = prompt("choose direction");
switch (direction) {
    case "up":
        console.log("yuxari get")
        break;
    case "right":
        console.log("saga get")
        break;
    case "down":
        console.log("asagi get")
        break;
    case "left":
        console.log("sola get")
        break;
    default:
        console.log("choose right direction error")
}