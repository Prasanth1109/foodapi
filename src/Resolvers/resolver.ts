import GraphQLJSON from 'graphql-type-json';
import UserService from '../Services/UserServices';

let user = new UserService();

export const resolvers = {
    Json: GraphQLJSON,

    Query: {
        getUser: async (_, { input }) => {
            try {
                let result = await user.getEmailPass(input)
                return result
            } catch (error) {
                console.log("error in getEmailPass", error)
                return error
            }
        },
    },

    Mutation: {
        createOrUpdateUser: async (_, { input }) => {
            try {
                let createProject = await user.createOrUpdateUser(input);
                return createProject
            } catch (error) {
                console.log("Error " + error);
                return error;
            }
        },
    }
}