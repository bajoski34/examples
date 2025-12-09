import figlet from "figlet";
import data from "./sample.json" assert { type: "json" };

console.log("Sample JSON Data:", data);
console.log("Environment :", process.env.NODE_ENV);

const server = Bun.serve({
    development: process.env.NODE_ENV === "development", // Enable auto-restart on file changes
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
    },
    fetch(req) {
        throw new Error("woops!");
    }
});

console.log(`Listening on ${server.url}`);
console.log("Press Ctrl+C to stop the server.");
