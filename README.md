# Web App Branch

This branch contains the frontend web application for the Telegram Mini App Quiz project.

The app is built with React and Vite. It presents users with a short randomized quiz, shuffles answer options on each run, and ends with a scratch-style reveal screen. The revealed result is intended to display a meme/prank image.

The Telegram bot and general project information are maintained in the main branch. This branch is only for the deployable web interface.

## Functionality

The web app includes a seven-question randomized quiz flow, shuffled answer choices, Telegram WebApp SDK initialization, a reward reveal screen, and a simple scratch-to-reveal interaction.

## Tech Stack

React, Vite, JavaScript, CSS, Telegram WebApp SDK, Cloudflare Pages.

## Deployment

This branch is intended to be deployed through Cloudflare Pages.

Recommended Cloudflare Pages settings:

Branch: webapp  
Framework preset: Vite  
Build command: npm run build  
Build output directory: dist  
Root directory: /

## Meme Assets

The meme image assets are managed outside this branch and should be provided from the main project asset location or a public URL.

If the web app needs to display those images during deployment, the image paths in src/App.jsx must point to accessible public URLs or files included in the deployed branch.

Example:

const MEMES = [
  "https://example.com/meme1.png",
  "https://example.com/meme2.png",
  "https://example.com/meme3.png"
];

Using paths such as /memes/meme1.png only works if those files exist in the deployed webapp branch under public/memes/.
