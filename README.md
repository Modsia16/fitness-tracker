# NoSQL workout tracker

Mongo database with a Mongoose schema and handle routes with Express for a workout tracker.

## Dev story

It can be time consuming navigating through complicted fitness tracking apps and you just want a straight forward logging experience that lets you see your progress immediatly. I want to create and track daily workouts in a snap, log multiple exercises in a workout on a given day and I should also be able to track the name, type, weight, sets, reps, and duration of esercise. If the esercise is a cardio exercise, should be able to track my distance traveled.

Creating a server code and models to compliment the public files that were provided. The user would also need a means to get, pull etc the data I created the routes for the reqs accordingly.

## Context

A consumer will reach their fitness goals when they can track their workout progress quickly.

## User Ability

When a user loads the page, they shou be given the option to create a new workout or continue with their last workout.

the user should be able to: 
    - Add exercises to the most recent workout plan 
    - Add new exercises to a new workout plan
    - View the combined weight fo multiple exercises from the past seven workouts on the 'stats' page
    - View the total duration of each workout from the past seven workouts on the 'stats' page

## Setup 
 ### Tech used
 - MongoDB 
 - MongoDB Atlas
 - Heroku
 - Nodejs

### How to run the app
Branch and clone fitness tracker to your machine.
Install node dependencies in terminal
Start server

## Project milestones
Digging through starter code to assess what additional code is needed to get the workouts and stats working
Adding exports, mongoose, express and routers to api and server
Testing charts, ran into and error in the CLI
Troubleshot and found usercreate index and usefindandmodify on my mongoose server connection threw parse errors. I removed them and the server started running properly.
Need to fix my get at put requests, they are appearing as undefined, working with a TA for the 304 on GET and POST. Updating heroku app and relaunching.


