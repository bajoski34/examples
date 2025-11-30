import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

function heartbeat() {
  this.isAlive = true;
}

wss.on("connection", (socket) => {
  console.log("Client connected");
  socket.send("Welcome to Abraham's Websocket — you are connected!");
  socket.isAlive = true;
  socket.on("pong", heartbeat);

  setInterval(() => {
    wss.clients.forEach((client) => {
      if (!client.isAlive) return client.terminate();
      client.isAlive = false;
      client.ping();
    });
  }, 30000);

  socket.on("message", (data) => {
    console.log("Message from client:", data.toString());
    socket.send(`Server echo: ${data}`);

    wss.clients.forEach((client) => {
      if (client !== socket && client.readyState === client.OPEN) {
        client.send(`Broadcast from server: ${data}`);
      }
    });
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");