# dance-party

This is a simple applicatoin that allows a user trigger a "dance party."

The user can click a suspicious looking button to cause the background to generate random colors - simulating dance lights.

A random dancing gif - referencing a giphy query search term "dance" - will appear

The user can then click giphy, to display random dance gifs

![image](assets/images/dance-party.gif)

# Developers

1. Clone down repo
2. Add a js file under path assets/js/key.js
3. Go to [Giphy](https://developers.giphy.com/) to get an API key
4. Paste your key into key.js as follows:
   const APIKey = "exampleapikey";

# Future Fixes

1. Only retrieves 50 results due to 50 results per page on Giphy. Updating code to handle pagination in the API request by making additional requests to fetch subsequent pages.

2. Revise random gif functionality to avoid the same gif from displaying

3. Music. Maybe an mp3 file to play when "click me" button is clicked
