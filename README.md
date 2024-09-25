# Valorant Tracker

## Description
Valorant Tracker is a web application that allows users to track player statistics and leaderboard rankings in the game Valorant. The application utilizes the [Henrik Dev API](https://github.com/Henrik-3/unofficial-valorant-api) to fetch and display player data, including account details, current rank, and peak rank.

## Features
- **Player Search**: Search for a player using their Username#Tag and view their account details, including region, account level, and last update time.
- **Leaderboard**: View the top 10 players in different regions (EU, NA, LATAM, BR, AP, KR) with their Username#Tag.
- **Player Profile**: Detailed player profile page displaying current and peak ranks with corresponding images.

## Installation
Follow these steps to install and set up the project:

1. Clone the repository:
    ```sh
    git clone https://github.com/pineapplemanxd/valorant-tracker.git
    ```

2. Navigate to the project directory:
    ```sh
    cd valorant-tracker
    ```

3. Add your own API key in `js/config.js`:
    ```javascript
    // config.js
    const API_KEY = 'your-api-key-here';
    ```

4. Open `index.html` in your web browser to run the application.

## API
This project uses the [Henrik Dev API](https://github.com/Henrik-3/unofficial-valorant-api).


