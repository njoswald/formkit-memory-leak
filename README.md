# FormKit Memory Issue
To run the repository, run the follwing:
1. `npm install`
2. Ensure that there is a FormKit pro key in the formkit.config.ts file
3. Modify app.vue for testing with or without pro inputs
4. When finished, run `npx nuxi build` or `npm run build`

## Clinic.js
For clinic.js testing, run `clinic doctor --on-port 'autocannon -c -10 -a 500 localhost:3000' "--" node .output/server/index.mjs` after the project is built

## Chrome DevTools
1. Open the node server with `node --expose-gc --inspect .output/server/index.mjs`. 
2. Open DevTools with `chrome:/inspect`. 
3. After taking an initial snapshot, I run the following command on a linux terminal: `for i in {1..1000}; do curl -s http://localhost:3000 > /dev/null; done` 
4. Take another snapshot.

Keep repeating steps 3 and 4 to see an increase of retained memory between each snapshot. 