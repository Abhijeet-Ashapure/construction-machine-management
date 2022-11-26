# Simple Inventory management Search App

To create a simple Inventory management App in react native

## Prerequisites

Setup react native development environment, you can refer - https://reactnative.dev/docs/environment-setup 

## Getting Started

**IOS - Running the application for the first time:**

- run the command `yarn install` or `npm install` from the project root directory to install all the necessary packages.
- run the command `pod install` inside ios folder within the project root directory.
- run the command `yarn start` or `npm start` to kick start the server
- load the project in xcode by opening `.xcworkspace` file present in ios folder and click on play button to run the project or simply execute the command `react-native run-ios` to run the project

**Android - Running the application for the first time:**

- run the command `yarn install` or `npm install` from the project root directory to install all the necessary packages.
- run the command `yarn start` or `npm start` to kick start the server
- Simply execute the command `react-native run-android` to run the project

## Project Structure

- 🗂 actions/: contains redux action creators.

- 🗂 components/: contains reusable components used across the application.

- 🗂 config/: has api interfaces and environment configurations  

- 🗂 reducers/: this folder contains all code used in handling the redux state of the app.

- 🗂 sagas/: it has all the files related to handle the sideeffects of redux like api calling

- 🗂 screens/: it has screens & UI of the app

- 🗂 store/: has store file

- 🗂 utils/: has utility methods

- 📄 package.json: contains a list of packages installed and other script commands

PS: I wrote the code keeping in mind the scalability factor that's why for state management I have used redux so that it can be easily scaled.

Regarding test cases, I have been only able to write a few of the test cases for button component & utility functions due to time constraints, however I have good understanding on detox, react test renderer, jest & enzyme for testing.

for any queries, please drop an email to abhijeetashapure@gmail.com