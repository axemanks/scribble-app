# Updates
## added social media share icons and cleaned up fonts an layout a bit

# ToDo
add image preview to be sent along with link when sharing to social media

Would like to implement a dashboard to see prevous generations, would require auth
Or maybe a front end where you can see community generated items.

# Open Graph notes
The landscape rectangle (1200 × 630 pixels) looks fantastic on Facebook shares, justifiably because Facebook develops the Open Graph system.
The minimum requirement is 200 by 200 pixels.
should not be more than 8 MB

og:image is needing to be passed and it is set in the header, but the url needs to be dynamic depending on what
prediction is being displayed
The url is working now, just need to figure out how ot implement getting the new screenshot of image, or maybe just display the AI generated. I think it would look better to have the scetch and AI image in the preview.

-------------------------------------------------------------------------
# 🖍️ Scribble Diffusion

Try it out at [scribblediffusion.com](https://scribblediffusion.com)

## How it works

This app is powered by:

🚀 [Replicate](https://replicate.com/?utm_source=project&utm_campaign=scribblediffusion), a platform for running machine learning models in the cloud.

🖍️ [ControlNet](https://replicate.com/rossjillian/controlnet?utm_source=project&utm_campaign=scribblediffusion), an open-source machine learning model that generates images from text and scribbles.

▲ [Vercel](https://vercel.com/), a platform for running web apps.

⚡️ Next.js [server-side API routes](pages/api), for talking to the Replicate API.

👀 Next.js React components, for the browser UI.

🍃 [Tailwind CSS](https://tailwindcss.com/), for styles.

## Development

1. Install a recent version of [Node.js](https://nodejs.org/)
1. Copy your [Replicate API token](https://replicate.com/account?utm_source=project&utm_campaign=scribblediffusion) and set it in your environment:
   ```
   echo "REPLICATE_API_TOKEN=<your-token-here>" > .env.local
   ```
1. Install dependencies and run the server:
   ```
   npm install
   npm run dev
   ```
1. Open [localhost:3000](http://localhost:3000) in your browser. That's it!
