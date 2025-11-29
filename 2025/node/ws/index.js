import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.send("Welcome to Abraham's Websocket — you are connected!");

  socket.on("message", (data) => {
    console.log("Message from client:", data.toString());
    socket.send(`Server echo: ${data}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");