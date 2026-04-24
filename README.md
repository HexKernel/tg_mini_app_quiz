Repository Description:
Telegram Mini App developed for the NTI × University 2035 AI Hackathon. A lightweight React-based web application that simulates viral engagement through randomized quiz interaction and a meme-based reward reveal.

---

# Telegram Mini App Quiz — BananaTeam

This repository contains a Telegram Mini App–style web application developed for the AI Hackathon organized by the NTI Platform and University 2035. The project is designed as a lightweight prototype that explores user engagement patterns commonly seen in social media platforms. Users go through a short sequence of randomized questions, after which they are presented with a reward that resolves into a meme-based outcome. The concept focuses on anticipation, interaction flow, and repeatability rather than complexity.

The project aligns with the hackathon’s objectives, which include AI-assisted content generation, viral content design, and audience engagement strategies. The event takes place on 23–24 April in a hybrid format (on-site in Moscow and online). More information is available at: https://my.2035.university/AI_hackathon/now/stage/1

The application includes a fixed set of seven questions that are randomized on each run, along with shuffled answer options to ensure variability. The interaction follows a simple sequential decision flow, leading to a simulated scratch-style reward reveal. The final output is a meme, serving as a playful “prank” result. The application is built to be compatible with the Telegram WebApp environment and is intended to be launched through a Telegram bot interface.

This repository (https://github.com/Ratorgis/tg_mini_app_quiz/) contains the Telegram bot implementation in the main branch. The web application itself is developed in a separate branch named “webapp”, which includes the React (Vite) frontend, static assets such as memes, and configuration for deployment via Cloudflare Pages. The deployment is handled through GitHub integration, using the standard Vite build process (npm run build) with the output directory set to “dist”.

The project is developed by BananaTeam. Team members include:

https://github.com/nsolano  
https://github.com/fdychftvyk  
https://github.com/HexKernel  
https://github.com/Ratorgis  

The current version is frontend-only and does not include backend services, persistent storage, or analytics. These components may be added in future iterations depending on the project’s evolution and requirements.
