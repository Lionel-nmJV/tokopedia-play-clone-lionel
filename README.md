# Tokopedia Play 

Welcome to the Tokopedia Play Clone project! This is a clone of the popular video platform, Tokopedia Play, where users can watch and interact with videos from YouTube.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API](#API)
- [note](#note)

## Features

1. User Authentication:
   - Users can sign up and create an account.
   - Users can log in to access their account.

2. Profile Management:
   - Users can update their profile information.
   - Users can delete their profile.

3. Video Landing Page:
   - Users land on the Tokopedia Play video feed, which features videos from YouTube.
   - Videos are displayed with their thumbnails.

4. Video Detail Page:
   - Users can click on a video to see its detail page.
   - Detail page includes comments, and it's under development to include product lists and wishlists.

5. Video Search:
   - Users can search for videos based on trends or randomly.

6. Liked Videos:
   - Users can find videos based on their liked videos.

## Technologies Used

List the main technologies, frameworks, and libraries used in this project.

- Frontend: -
- Backend: NodeJS
- Database: MongoDB
- Other notable dependencies:     
    "bcrypt"
    "cookie-parser"
    "dotenv"
    "express"
    "jsonwebtoken"
    "mongoose"
    "nodemon"

## Setup

Provide instructions on how to set up the project locally on the developer's machine.

1. Clone the repository.
2. Install dependencies.
3. Set up the database.
4. Run the development server.

## Usage

```bash
git clone
```

Go to the file directories named (#server) and install dependencies
```bash
npm install express mongoose jsonwebtoken nodemon dotenv bcrypt cookie-parser
```

Run database using mongosh
```bash
mongosh "mongodb+srv://cluster0.4bkzqig.mongodb.net/" --apiVersion 1 --username mycluster
```

And put the password "2804"

Run the server, and it will run at port 3000
```bash
npm start
```
## API
And i will gave the [API](https://gist.github.com/Lionel-nmJV/3a5588d5a0ca0ac96deccb444c354e47) connection documentation using github gist

## note

- connection string mongodb into nodejs: mongodb+srv://mycluster:2804@cluster0.4bkzqig.mongodb.net/?retryWrites=true&w=majority
- some of the features still under development such as dislike, list product
- the database i use is "test" and there's 3 collection named "users", "youtubes", "comments"
- at github gist i dont know why some of response and the request not fully include into ``` this ```
- You can use postman for the API

