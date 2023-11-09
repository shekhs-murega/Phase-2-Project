## Dog Breed App
The Dog Breed App is a user-friendly web application designed for dog enthusiasts and curious minds alike. With this app, you can explore a vast array of dog breeds, each with its unique characteristics and charm. Browse through a comprehensive list of breeds, select one that piques your interest, and delve into detailed descriptions, including life expectancy and weight ranges. It's your one-stop source for canine knowledge, helping you make informed decisions about your future furry companions.

## Table of contents
- [Features](#features)
 - [Installation](#installation)
- [Usage](#usage)
- [Components]()
- [Routes]()
- [API Intergration]()
- [Styling]()
- [Deployment]()
- [Contributing](#contributing)
- [License](#license)

## Features
- View a list of various dog breeds.
- Select a breed to view detailed information.
- Display breed descriptions, life expectancy, and weight ranges.
- Subscribe to newsletters to receive dog-related updates.

## Installation
To run the Dog Breed App on your local machine, follow these steps:
1.Clone the repository to your local machine using Git:
   ```bash
   git clone https://github.com/shekhs-murega/Phase-2-Project.git
   ```
2.Navigate to the project directory:
   ```bash
   cd dog-breed-app
   ```
3.Install the necessary dependencies using npm:
  ```bash
   npm install
   ```
4.Start the development server:
  ```bash
   npm start
   ```
5.The app will be accessible in your browser at `http://localhost:3001`.

## Usage
-Visit the website and click the data tab to view a list of breeds.
-Click on a breed to display detailed information about that breed 
-You can also subscribe to newsletters by entering your email and clicking the "Subscribe" button.

## Components
The app is structured into several components:
- `App.js`: The main component that renders other components.
- `Data.js`: Displays the list of dog breeds and shows detailed information about a selected breed.
- `Header.js`: Displays the application header with navigation and subscription form.
- `Footer.js`: The footer of the application.

## Routes
The app uses React Router to navigate between different pages:

- `/`: Home page, it's the main page of the app.
- `/about`: Gives a brief description of the  Dog Breed App.
- `/data`: A list of dog breeds fetched from the API.

## API Intergration
The app integrates with the Dog API to fetch the list of dog breeds:

  - API URL: https://dogapi.dog/api/v2/breeds?page[number]=1

## Styling
The app's styling is defined in the CSS files within each component's directory and also uses a Semantic UI CSS and Bootstrap.css.

## Deployment
This app is deployed using [Netlify](https://www.netlify.com/).

- Live App: [![Netlify Status](https://api.netlify.com/api/v1/badges/2471de47-696b-4292-9c43-8dbd932ec456/deploy-status)](https://app.netlify.com/sites/cozy-strudel-8c4878/deploys)

To deploy the app yourself, follow these steps:

1. Build your app:
   ```bash
   npm run build
   ```

## Contibuting
Contributions to this project are welcome. You can open issues, fork the repository, make changes, and submit pull requests.

## License
This project is licensed under the MIT License.

