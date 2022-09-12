const {
    ApolloServer
} = require('apollo-server');
const fs = require('fs');
const path = require('path');

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            let idCount = links.length
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        },
        updateLink: (parent, args) => {
            let affectedrow = links.find(elem => elem.id == args.id);
            affectedrow.url = args.url;
            affectedrow.description = args.description;
            return affectedrow;
        },
        deleteLink: (parent, args) => {
            return links.find((elem, index) => {
                if (elem.id == args.id) {
                    links.splice(index, 1);
                    return elem;
                }
            });
        },
    },
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server
    .listen()
    .then(({
            url
        }) =>
        console.log(`Server is running on ${url}`)
    );
