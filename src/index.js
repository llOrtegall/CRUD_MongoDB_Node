import app from "./app";
import "./database";
import { PORT } from "./config";

app.listen(PORT);
console.log("Server On Port: ", PORT);
