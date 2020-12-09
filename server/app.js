const Express = require("express")();

const Http = require("http").Server(Express);
const socketio = require("socket.io")(Http);

var position = {
    x:200,
    y:200,
};

socketio.on('connection',socket=>{

    socket.emit('position',position);
    socket.on("move",data=>{

        switch (data) {
            case "left":
                position.x -=5;
                socket.emit('position',position);
                break;
            case "right":
                position.x +=5;
                socket.emit('position',position);
                break;
        
            case "up":
                position.y -=5;
                socket.emit('position',position);
                break;
            case "down":
                position.y +=5;
                socket.emit('position',position);
                break;
        }

    });
})

Http.listen(3000,()=>{
    console.log("server is listening port 3000 ..");
});