# Blue Macaw Music App [![](https://images.microbadger.com/badges/version/durgaprasadbudhwani/blue-macaw-music-app.svg)](https://microbadger.com/images/durgaprasadbudhwani/blue-macaw-music-app "Get your own version badge on microbadger.com") [![CircleCI](https://circleci.com/gh/Durgaprasad-Budhwani/blue-macaw-music-app.svg?style=svg)](https://circleci.com/gh/Durgaprasad-Budhwani/blue-macaw-music-app) [![codecov](https://codecov.io/gh/Durgaprasad-Budhwani/blue-macaw-music-app/branch/master/graph/badge.svg)](https://codecov.io/gh/Durgaprasad-Budhwani/blue-macaw-music-app)

Parrots have musical tastes, with some preferring classical works and others pop tunes.
Blue macaw parrot that inspired "Rio" is now officially extinct in the wild. 
This simple Express and React Application is for them.

Right now, this app only contains backend code.

## Getting Started

- Clone the repo

- Install dependencies:

``yarn``

- Rename `.env.default` file to `.env` and change environment variables


## Running locally

```yarn dev```

## Running in Production

```yarn start```

## Creating and running docker

To create a Docker image, use the following command:

    docker build -t durgaprasadbudhwani/blue-macaw-music-app .

It will create a Docker image named `durgaprasadbudhwani/blue-macaw-music-app:latest`.

To run a Docker image locally, use the following command:

    docker run -p 5005:80 --env PORT=80 durgaprasadbudhwani/blue-macaw-music-app .
    
## Lint

```
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

- To run integration test cases run below command:

    ```yarn test:integration```

 
- To monitor test case during development, use command:

    ```yarn test:watch```

- To view coverage

    ```yarn coverage```

## Logs

Application has been integrated with `winston` and `morgan`.
`winston` generate file `combined.log` and `error.log`

For production - view `pm2 logs`


## API Docs

Application has been documentation to support `http://apidocjs.com/`

For more details refer `music.routes.js` file.

To generate document use below command:

```yarn docs```

# Architecture/Design Concepts

This application uses `Express` framework for RESTFul API and `Socket.io` for real time communication. 

All configuration like environment variables settings, express settings, socket.io settings are included in `config` folder. 

This design follow typical MVC pattern. 

Url based routing is taken places in `routes` folder. `Routes` decides which controller needs to be invoked. Basic `Request` validation takes place in `routes` folder.
`Controller` is responsible to call specific `Service` for data information.

`Socket` event handling mechanism is handled in `socket/index.js` file. 

For storage, this app uses `MongoDB`.


# Important Notes:- 

Since frontend is not yet ready, default landing page will be redirected to `API docs` page.




    

