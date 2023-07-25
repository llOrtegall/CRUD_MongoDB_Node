import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(process.env.MONGODE_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
