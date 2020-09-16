require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const Feedrouter = require("./routes/feed");
const UserRouter = require("./routes/user.route");
const Auth = require("./routes/auth.route");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolver");
app.use("/feed", Feedrouter);
app.use(UserRouter);
app.use(Auth);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "im running..",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.listen(process.env.APP_PORT, () => {
  console.log("running ", process.env.APP_PORT);
});
