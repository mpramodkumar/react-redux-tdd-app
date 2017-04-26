# :heart: Heartbeat 2 User Interface [![CircleCI](https://circleci.com/gh/TheCognizantFoundry/heartbeat2-ui/tree/master.svg?style=svg&circle-token=8521f46b4484df0786b792596f4ffc84cbf57563)](https://circleci.com/gh/TheCognizantFoundry/heartbeat2-ui/tree/master)


Web interface for the Heartbeat 2 application to manage and analyze development project health and resources.

The staging environment can be found here: https://heartbeat2-staging.quickleft.com/

This application is typically run with docker-compose from the main heartbeat2 project.

This project provides a Dockerfile configuration to build an image and run the application in a container. The static application assets are served through Nginx.

Related Projects:
* [heartbeat2](https://github.com/TheCognizantFoundry/heartbeat2)
* [heartbeat2-services](https://github.com/TheCognizantFoundry/heartbeat2-services)
* [heartbeat2-mq](https://github.com/TheCognizantFoundry/heartbeat2-mq)

# Contributing

Please refer to the [contributing](.github/CONTRIBUTING.md) guidelines.

# Create React App Documentation

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

[View the Create React App Documentation](docs/CREATE_REACT_APP.md)

# Development

### :whale: Launch the Application With Docker

While the interface application can start on its own, it requires the heartbeat2-services API
to be functional. Typically the stack should be run using docker-compose from the main heartbeat2
project. See the [heartbeat2 startup instructions](https://github.com/TheCognizantFoundry/heartbeat2#development).

The running container synchronizes with the build directory and serves the assets during
development.

### Access Docker Container using Interactive Shell

It is useful to open a shell in the Heartbeat2 UI container to run node commands and perform certain tasks.
There are several ways to start a shell session.

One option is to run `docker-compose exec ui sh` from the heartbeat2 project.

Alternatively, run `docker exec -it $(docker ps -f name=ui --format {{.Names}}) sh` from any local command line.

### :warning: Managing Dependencies

Node modules will be installed when the image is built based on what is configured in the local `package.json` file.

Install or uninstall node modules within the running `ui` Docker container.

1. Follow the instructions to
[access the container using an interactive shell](#access-docker-container-using-interactive-shell)
1. Run `yarn install` from the shell in the container

### :building_construction: Build Docker Image

All Docker images can be created using `docker-compose build` from the heartbeat2 project.

To build an image for heartbeat2-ui by itself run the following command from the root directory:

```sh
docker build -t cql/heartbeat2-ui .
```

## :rocket: Run the Application Without Docker

### Prerequisites

Install Node and npm available from their [website](https://nodejs.org/).

### Install Dependencies

Install node modules with:

```sh
npm install
```

### Run the Application

Build and run using Webpack with:

```sh
npm start
```

## :white_check_mark: Run Test Suite

Run all tests once:

```sh
npm run test:once
```

Start the test watch:

```sh
npm test
```

# Continuous Integration

CircleCI runs linting and tests on each branch. Successful merges to master are auto deployed to the Heroku staging environment. This integration is set up via CircleCI's `Heroku Deployment` setting via `nicholasserra`'s Heroku API key. 
