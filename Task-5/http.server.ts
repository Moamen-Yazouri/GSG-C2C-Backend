import { createServer, IncomingMessage, ServerResponse} from "node:http";
import { PORT } from "./constants";
const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    console.log("Welcome to my server");
    console.log(req.url);
    console.log(req.method);
    if(req.url === "/" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "application/json"});
        const resPayload = JSON.stringify({ message: "Welcome to the server" });
        res.end(resPayload);
    }
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "application/json"});
        const resPayload = JSON.stringify({ message: "This is the about route" })
        res.end(resPayload);
    }
    else {
        res.writeHead(404, {"Content-Type": "application/json"});
        const resPayload = JSON.stringify({ message: "Route not found" });
        res.end(resPayload);
    }

}
const server = createServer(requestListener);
server.listen(PORT, () => {
    console.log("Server is running!")
});
