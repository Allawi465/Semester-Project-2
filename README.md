# Semester Project 2

Link to Trello board: https://trello.com/b/VphlnoYO

Link to Trello Gantt chart: file:///C:/Users/Allaw/Downloads/placker_gantt_export_202212181206.pdf

Link to design prototype: https://xd.adobe.com/view/8cce3ffd-13a5-42cd-8492-50ad539a4b50-d99d/

Link to style guide: 

Link to hosted application demo: https://noxb.netlify.app/

## Description

This is my semester project 2 for at Noroff Front-end development. we had crate an auction site where users can add items to be bid on and bid on items other users have put up for auction. we had 5 weeks to build the projects from start to finish, the the target group I chose is for everybody that need to sell things. 


## Installation

Clone the project and initialize git in your code editor.
Initialize git
```
 git clone https://github.com/Allawi465/Semester-Project-2.git
```
Install dependencies
```
npm i
```
Build SASS
```
npm run build
```

## Deployment

Project is configured to run deployment on Netlify on push to branch "master" Deploy static content to Pages

[![Netlify Status](https://api.netlify.com/api/v1/badges/8552669a-6d88-4835-9bfd-c0fd1087fc3f/deploy-status)](https://app.netlify.com/sites/noxb/deploys)

Project link: https://github.com/Allawi465/Semester-Project-2

## Assignment Brief

An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

## Built With

The project was just build with
- HTML 
- SCSS
- Bootstrap
- JavaScript
- Noroff API

## API
- The API for this project can be found under Social EndPoints in the Noroff API documentation.
- https://noroff-api-docs.netlify.app/

## User stories
- [x] A user with a stud.noroff.no email may register
- [x] A registered user may login
- [x] A registered user may logout
- [x] A registered user may update their avatar
- [x] A registered user may view their total credit
- [x] A registered user may create a Listing with a title, deadline date, media gallery and description
- [x] A registered user may add a Bid to another user’s Listing
- [x] A registered user may view Bids made on a Listing
- [x] A registered user may use credit to make a Bid on another user’s Listing
- [x]  An unregistered user may search through Listings

## Dependencies & configurations
  - eslint: "^8.27.0",
  - husky: "^8.0.2",
  - lint-staged: "^13.0.3",
  - live-server: "^1.1.0",
  - prettier: "^2.7.1",
  - sass: "^1.54.8",
  - live-server: "^1.1.0"
  
  ## Files that are ignored inside .gitignored

   - /node_modules
   - .eslintcache
   - .vscode/settings.json
   - /out
   - 6
   
  ## Configurations
  
  Project is configured to run prettier on all files on-save
  Project is configured to run eslint --fix as pre-commit hook
  
  ## Eslint configurations

 rules: no-undef: "Off", no-useless-escape: "Off"
 
 This is because eslint gives undefined errors of javeScript files that are used to build site

## Contact

If you have a suggestion that would make the site better, please contact me.

I am very grateful for the feedbacks and the support. 

Please contact me if you have any questions!

Don't forget to give the project a star! Thanks again!
