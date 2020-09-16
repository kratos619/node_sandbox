const { buildSchema } = require("graphql");
module.exports = buildSchema(`
    type Post {
            id : Int,
            title : String,
            body : String,
            imageUrl : String,
            user_id : Int,
            createdAt : String,
            updatedAt : String
    }

    input userInputData {
    title : String
    body : String
    imageUrl : imageUrl
    }
    type {
        createPost(userInput:userInputData)
    }
    schema {
        mutation : RootMutation
    }    
`);

// type Post {
//             id : Int,
//             title : String,
//             body : String,
//             imageUrl : String,
//             user_id : Int,
//             createdAt : String,
//             updatedAt : String
//         }

//         type TestData {
//             text: String
//             views: Int
//             posts : [Post]
//         }

//         type Query {
//             hello : TestData
//         }

//         schema {
//             query : Query
//         }
