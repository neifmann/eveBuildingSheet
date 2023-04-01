# Eve-production-tree

Designed to display on single page total amount of materials required to produce blueprint including production of all subcomponents.

At the moment works only with blueprints and doesn't support reactions.
Not production ready.

Front-end and back-end launched reparately

### front-end

based on react-create-app
written in Typescript

launch:
```
cd eve-view
npm ci
npm start
```

to see a data you may use the following urls:
```
http://localhost:3000/item/33816
http://localhost:3000/blueprint/12004
```

Backend *must* be online and working on port 8080. 
Port can be chaned in package.json

### Back-end

based on express-create-app
written in Typescript

launch:
```
cd eve-view-backend
npm ci
npm run dev
```