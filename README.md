## The node.js open file and edit file system app

The node.js example app teaches the very basics of how to work with Contentful:

- consume content from the Contentful Delivery and Preview APIs
- model content
- edit content through the Contentful web app

The app demonstrates how decoupling content from its presentation enables greater flexibility and facilitates shipping higher quality software more quickly.

## Requirements

* Node 8
* Git
* Contentful CLI (only for write access)

## Steps to run application (recommended)

Step 1: Open `.env` and inject your variable so it looks like this

```
ROUTE_NAME = <ROUTE_NAME>
FILE_DIRECTORY = <FILE_DIRECTORY>
```

Step 2: Install dependencies

```bash
npm install
```

Step 3: To start the express server, run the following
```bash
npm start
```
Final Step:

Open [http://localhost:3000](http://localhost:3000) and take a look around.

