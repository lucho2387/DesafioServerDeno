import { serve } from "https://deno.land/std@0.152.0/http/server.ts";


serve(() => new Response("Hello World\n"))


console.log("Listening on http://localhost:8000");

// denon run --allow-net  server.ts