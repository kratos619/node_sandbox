require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const Feedrouter = require("./routes/feed");
const UserRouter = require("./routes/user.route");
const Auth = require("./routes/auth.route");
app.use("/feed", Feedrouter);
app.use(UserRouter);
app.use(Auth);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "im running..",
  });
});

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver,
//     graphiql: true,
//     formatError(err) {
//       if (!err.originalError) {
//         return err;
//       }
//       const data = err.originalError.data;
//       const message = err.message || "An error occured..";
//       const code = err.originalError.code || 500;
//       return {
//         message: message,
//         status: code,
//         data: data,
//       };
//     },
//   })
// );

app.listen(5000, () => {
  console.log("running ", 5000);
});
