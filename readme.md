# PetClinic Web App

This is a sample web app I created to teach myself React/Redux.
It runs on top of a Spring Boot REST API service. You must clone
and run the
[spring-webclinic-rest](https://github.com/trojas/spring-petclinic-rest)
project for this project to work.  (Note that the version of
**spring-webclinic-rest** this project runs on is a fork of
[the original](https://github.com/spring-petclinic/spring-petclinic-rest))

## Installation

When you have the REST API service installed and running, you can
install and run this web app by doing the following:

```ShellSession
$ git clone git@github.com:trojas/petclinic-web-app.git
$ cd petclinic-web-app/
$ npm install
$ npm start
```

## WIP
This app is currently a work in progress.  There are many features I
would like to add including:

- Validation
- Date based Visit filtering (requires a server side change as well)
- Drag & drop Visit updating
- Complete CRUD functions and searching for Pets and Vets
- Refactoring to make the app more DRY
- Tests
- Etc

I will get to this stuff as time permits.