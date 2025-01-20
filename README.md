# YouTube Video Player (React)

A simple, distraction-free YouTube video player built with React. Just type the name of a video and get started. 
Take control of YouTube— search & watch what you want. Rule the algo, not be ruled by the algo. 😎

## Features
- **Simple and Fast**: Type the video name and instantly get results.
- **No Distractions**: View only what you search for—no homepage, no recommendations.
- **No Ads**: Enjoy a seamless, ad-free experience.

## Technical Specifications
- **Frontend**: React, ES6 JavaScript
- **Search**: Throttled search using lodash
- **Transpiling**: Babel & Webpack
- **API**: YouTube Data API v3 to fetch video data

## Setup Instructions

### Prerequisites
1. Create a **YouTube Data API v3** key. Follow these steps:
   1. Go to [Google Developer Console](https://console.developers.google.com).
   2. Click on **Library** in the left panel.
   3. Select **YouTube Data API v3** and enable it.
   4. In the **Credentials** tab, create a new API key and copy it.
   5. In the index.js file, replace your-API-KEY-here with the YouTube Data API key you generated.

### Configure the Project
1. Clone the repository
2. Navigate into the project directory
3. Initialize the project and install dependencies:
```bash
npm init
npm install
```

#### Start the server:
```bash
npm start
```

Open your browser and go to **http://localhost:8080**.

Enjoy using the YouTube Video Player!
