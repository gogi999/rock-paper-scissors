# Rock Paper Scissors

This is a PC representation of the hand game called "Rock, Paper and Scissors". It has one human player and a computer acting as the second player.

# Description

When the user starts the program, he sees the first page with the option to select the weapons (rock, paper, scissors) and with the button "Rules". The Score is set at 0. The player is able to select his weapon and the computer makes its choice. When a player makes a choice of the weapons, he sees on the screen his choice, and also he sees the computer's choice. A game consists of rounds. After each round either a player or computer will be the winner of the round or it can be Tie if both choose the same weapon in the same round. If the player wins the round, the Score increases by 1 and if the computer wins the game, the Score decreases ba 1.

When the user presses the button "Rules", he sees the modal with the rules of the game.

The system maintains the state of the score after refreshing the browser. Local storage is used for this purpose.

# Application's main features

- Initial screen - When the program starts, the first page shows three Select weapon options: rock, paper, or scissors, in addition to the button "Rules". The Score is set at 0.
- Score - The purpose of the Score is to keep track of the points.
- Play game - The player is allowed to select a weapon and after the round, the winner is shown. The game consists of as many rounds as the user wants to play. After first round, the user needs to press the button "Play Again" in order to start a new round.
- Rules - Rules of the game are displayed after pressing a button "Rules". It is used to determine the winner.
- Responsiveness - Tablet and Desktop.

# Technologies Built With:

- HTML
- SASS
- JS
- React JS
- Redux
- Styled Components

# List of all libraries: 

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- react
- react-dom
- react-redux
- react-scripts
- redux
- redux-devtools-extension
- sass
- styled-components
- web-vitals

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
