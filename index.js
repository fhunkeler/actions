import http from "http";
import server from "./server.js";

http.createServer(server).listen(3001, () => {
  console.log("Listening on *:3001");
});
