# GraphQL-With-Nodejs

## Pre-requisites

1) Nodejs
2) NPM

## Steps to run the project

1) Clone the repo https://github.com/shubsaini09/GraphQL-With-Nodejs.git
2) cd GraphQL-With-Nodejs
3) npm install
4) node src/crud.js
5) Open browser and enter the url http://localhost:4000/

## CRUD Operation Queries

> Get data

```query {
  feed{
    id,
    url,
    description
  }
}
```

> Create data

```
mutation {
  post(url: "www.prisma.io", description: "Prisma replaces traditional ORMs") {
    id
  }
}
```

> Update data

```
mutation {
  updateLink(id: "link-1", url: "www.xyz.io", description: "xyz") {
    id,
    url,
    description
  }
}
```

> Delete data

```
mutation {
  deleteLink(id: "link-1") {
    id,
    url,
    description
  }
}
```

Tutorial reference - https://www.howtographql.com/graphql-js/1-getting-started/
