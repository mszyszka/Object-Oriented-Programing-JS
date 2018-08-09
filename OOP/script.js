// In here Im creating object with object literal syntax.
// Its ok, but if Object doesn't have behavior(methods)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('Draw');
    }
};

circle.draw();

// Factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('Draw');
        }
    };
}

const circle = createCircle(1);