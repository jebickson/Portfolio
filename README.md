# Jebickson Samuel — Portfolio

Run `node server.mjs`, then open http://127.0.0.1:5173.

Edit dist/profile.js for projects, dist/social.js for LinkedIn, and dist/index.html for biography and certification details. The homepage and gallery.html share project dialogs, local fonts, and responsive styles.

Includes Signalist, Sportz WebSocket, and CloudNotes. Experience describes these projects. Certification details await the owner's credentials. Contact and meeting actions open email; the site sends no messages itself.

The sidebar stays vertical on all devices. Reveal animations honor reduced-motion preferences.

## Deploy to Vercel

Production URL: https://jebickson.vercel.app

The site is ready to deploy as static HTML, CSS, and JavaScript. `vercel.json` sets the framework to Other, skips the build step, and publishes `dist/`.

From this folder, run:

```powershell
npx vercel login
npx vercel --prod
```

This checkout is linked through the ignored `.vercel/project.json` file to the `jebickson` project in the `jebisam12-3803s-projects` scope. On a fresh checkout, link to that existing project when prompted.

For a GitHub import, import `jebickson/Portfolio` on Vercel and keep the repository root (`./`) as the Root Directory. Use Framework Preset **Other**, leave the Build Command empty, and set Output Directory to **dist**. The checked-in configuration supplies these settings automatically once it is pushed to GitHub.

`server.mjs` is only for local preview; Vercel serves the files in `dist/` directly.
