const socket = await Bun.connect({
  hostname: "localhost",
  port: 8080,
  socket: {
    data(socket, data) {
      console.log("Received:", data.toString());
    }
  }
});

socket.write("Hello, server!");