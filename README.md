# GraphQL-With-Nodejs

This repo contains multiple tutorials as listed below. We will go over them one by one. 
1) CRUD operations ( in-memory storage )
2) Using SQLite DB ( persistent storage)

## Pre-requisites

1) Nodejs
2) NPM

## Tutorial 1 (CRUD operations) - Please follow below Steps to run the project

1) Clone the repo [GraphQL-Nodejs](https://github.com/shubsaini09/GraphQL-Nodejs.git)
2) cd GraphQL-With-Nodejs
3) npm install
4) node src/crud.js
5) Open browser and enter the url http://localhost:4000/

### CRUD Operation Queries

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

## Tutorial 2 (SQLite DB as storage) - Please follow below Steps to run the project

In this section, we are going to set up a SQLite to persist the data of incoming GraphQL mutations. Instead of writing SQL directly, we will use [Prisma](https://www.prisma.io/docs/) to access your database. Prisma is an open source database toolkit that makes it easy for developers to reason about their data and how they access it, by providing a clean and type-safe API for submitting database queries.

In addition to the steps given in tutorial 1, please add below steps 

1) npm install prisma --save-dev
2) npm install @prisma/client
3) npx prisma init
4) npx prisma migrate dev ( You will get a prompt asking you to provide a name for the migration. Let’s name it “init”. Type in the name and hit Enter )
5) npx prisma generate
6) node src/index.js

### Queries

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

Run `npx prisma studio`. The command should open a tab in your browser automatically (running on http://localhost:5555) showing a visual representation of your tables and data. 

Tutorial reference - https://www.howtographql.com/graphql-js/1-getting-started/
