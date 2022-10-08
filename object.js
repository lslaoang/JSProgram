
let computer = {
    ram : 1,
    monitor : 'HP',
    processor : "AMD",
    camera : {
        facingMode : "user",
        resolution : [1920, 1080],
    }
}

console.log(computer, typeof computer);
console.log(computer.camera.facingMode, typeof computer);
delete computer.camera.facingMode;
console.log(computer.camera?.facingMode, typeof computer);