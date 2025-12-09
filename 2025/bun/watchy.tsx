import { serve } from "bun";

console.log("I restarted at:", Date.now());

console.log("Watching for file changes...");

serve({
  port: 4003,
  fetch(request) {
    return new Response("Sup");
  },
});