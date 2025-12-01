# WebSocket.
WebSockets create a full-duplex, bidirectional, persistent communication channel between a client and a server.

Simpler Terms: WebSockets allow the client and server to send data to each other at any time over a persistent full-duplex connection.

## Message Format
Websocket only handle text and binary s JSON can be sent manually.

```js
// For the client.
socket.send(JSON.stringify({ type: "chat", text: "Hello" }));

// Recieved by the server.
socket.on("message", (raw) => {
  const msg = JSON.parse(raw);
  console.log(msg.type, msg.text);
});
```

## Track Connection Duration
Add this inside your WebSocket client:
```js
let connectedAt = null;

const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", () => {
  connectedAt = performance.now();
  console.log("WS connected at:", connectedAt);
});

socket.addEventListener("close", () => {
  const duration = (performance.now() - connectedAt).toFixed(2);
  console.log("WS disconnected after:", duration, "ms");
});
```
You now get real “how long was I connected?” numbers.
