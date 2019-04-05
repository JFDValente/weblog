module.exports = function(io){
  io.sockets.on('connection',function(client){
    console.log('cliente conectou: '+client.id);
    //client.emit('teste','teste do José Valente');
  });
}
