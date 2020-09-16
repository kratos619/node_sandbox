const { buildSchema } = require("graphql");
module.exports = buildSchema(`
    type Post {
        id : Int
        title : String
        body : String
        imageUrl : String
        user_id : Int
        createdAt : String
        updatedAt : String
    }

    input userInputData {
        title : String
        body : String
        imageUrl : String
    }

    type Rootquery{
        hello : String
    }

    type RootMutation {
        createPost(userInput : userInputData)  : Post
    }
    schema {
        query : Rootquery
        mutation : RootMutation
    }    
`);
