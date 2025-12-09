import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response('Bun!'),
    "/figlet": () => {
      const asciiArt = figlet.textSync('Abraham!', {
        font: "Star Wars",
        horizontalLayout: 'default',
        verticalLayout: 'default'
      });
      return new Response(`<pre>${asciiArt}</pre>`, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
  }
});

console.log(`Listening on ${server.url}`);
console.log("Press Ctrl+C to stop the server.");