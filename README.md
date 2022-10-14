# Phase 4 Project - Salon Management System

### Gossip & Glamour

 ## The App

    Gossip & Glamour is a web application that helps clients set appointments.This includes the date and the time a client wants to be served and also the service the client wants.
    It also has a login/signup feature



## PROBLEM DEFINITION

    A lot of customers go to salons or beauty places for services only to find long queues because the customers are walk in without appointments thus wasting alot of time waiting.

# SOLUTION STATEMENT

    -The customer will be able to book appoints before visiting the salon,instead of waiting in the queue
    -The customer will be able to go through the services provided by the salon and make decisions instead of visiting the salon and asking questions
    -The customers will be able to plan their budget accordingly since the prices for different services are available on the website
    -User friendly



## USER STORIES/FEATURES

    -As a user I can log into the website

    -As a user I can view a list of all the available services 

    -As a user I can view a price catalog of the services

    -As a user I can book and view an appointment  or appointments

    -As a user I can change or cancel an appointment that I left


# Technical Feasibility 

The Gossip & Glamour web application is buit using rails backend,React frontend to display as well as using ActiveRecords to use/manage data from the database. 



## Build an API using Rails with React Frontend


# Setup

## BACKEND SETUP

 ## Create rails api
    rails new Salon --api -minimal
 cd into the Salon

 ## Tables

    Appointments
    Customers
    Services

 ## Other tables

users
sessions


    run rails resources Services name image_url description 

    run rails resources Customers name email phone_number

    run rails resources Appointments service_id:integer customer_id:integer name email appointment_date:integer appointment_time:integer

    This will generate controllers, models, migration files and routes in route.rb


    ## controllers - We define our requests in the this file

    ## models - we define relationships between our tables in models

    ## migrations - these are our tables with different columns

    ## routes.rb - this is where the routes are defined in case of requests


    run rails db:migrate, this will also update our schema file

    generate seed data in seed file

    run rails db:seed

    run rails s for the backend
    This will render the data on the browser in json depending on the requests made in the controllers 
    and matching routes in the route.rb



## FRONTEND SETUP

    cd into the rails API and run npx create-react-app client --use-npm

    This will create a new React application in a client folder, and will use npm instead of yarn to manage our dependencies.


### Running react and rails app

    rails s - rails
    npm start --prefix client - react


    When we're running React and Rails in development, we'll need two separate servers running on different ports — we'll run React on port 4000, and Rails on port 3000. Whenever we want to make a request to our Rails API from React, we'll need to make sure that our requests are going to port 3000.

### proxy

We can simplify this process of making requests to the correct port by using create-react-app in development to proxy the requests to our APILinks to an external site..

This will let us write our network requests like this:

    fetch("/services");

### proxy setup

in package.json for the client directory add this line at the top level of JSON object

    "proxy": "http://localhost:3000"

Also update start script in package.json to

    "scripts": {
    "start": "PORT=4000 react-scripts start"
    }




## User Authentication in React via Rails API


## Configuring Rails App for Cookies

        Add bcrypt and rack-cors gems to Gemfile and bundle install

        In the ApplicationController apply middleware that will allow us to send receive cookies.
        Create cookie and session serializers in the intializers in config

### The User Model and Sessions Controller

The easiest way to get a user model going and using bcrypt for secure passwords is with rails generate.

        rails g model User username email password_digest

        run rake db:create && rake db:migrate


### In the user.rb model add validations, in routes.b we also add route to have access to action that will correspond to a list of all users


### Controllers Actions

    After creating the routes, creat the four corresponding controller actions in the UsersController and SessionsController.











