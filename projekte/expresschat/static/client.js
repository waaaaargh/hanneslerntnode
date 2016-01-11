$(document).ready(function(){
    var socket = io.connect();
    socket.on('chat', function(data){
        $("#chat").append("<li><b>"+data.name+"</b>: "+data.message+"</li>");
    });

    function senden() {
        console.log("send message");
        var name = $('#name').val();
        var message = $('#message').val();
        socket.emit('chat', {
            "name": name,
            "message": message
        });
    }

    $('#button').click(senden);
});
