import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify({status: "foundation", runtime: "not-connected"}));
    return;
  }

  res.writeHead(404, {"content-type": "application/json"});
  res.end(JSON.stringify({error: "not_implemented"}));
});

const port = Number(process.env.PORT ?? 8787);
server.listen(port, () => {
  console.log(`control-plane foundation listening on :${port}`);
});
