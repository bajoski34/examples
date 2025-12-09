//. TCP connect

Bun.listen({
  hostname: "localhost",
  port: 8080,
  socket: {
    data(socket, data) {
        socket.write(data); // echo back the received data
    }, // message received from client
    open(socket) {
        console.log("Client connected:", socket.remoteAddress);
    }, // socket opened
    close(socket, error) {
        console.log("Client disconnected:", socket.remoteAddress);
    }, // socket closed
    drain(socket) {
        console.log("Socket drained:", socket.remoteAddress);
    }, // socket ready for more data
    error(socket, error) { 
        console.error("Socket error:", error);
    }, // error handler
  },
});

console.log("TCP Echo Server listening on localhost:8080");