# Evaluate A News Article with Natural Language Processing

4th project at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Install npm
```
npm install
```
2. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

3. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
4. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

5. Open browser at http://localhost:8081/
