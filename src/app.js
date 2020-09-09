import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://henry:henry101@ds139436.mlab.com:39436/graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Graphql server is running on PORT ${PORT}`)
);
