[![Netlify Status](https://api.netlify.com/api/v1/badges/04795361-a7ce-4e2f-8a76-913ca98c79ae/deploy-status)](https://app.netlify.com/sites/antoine-regembal/deploys)

# Hi, this is the repository of my personal website.

# This website is under construction

I voluntarily left this repository public under MIT licence in order to allow each person to clone or fork this project, modify it, improve it and I hope, to help others learning React despite the fact the code may not be the best you can find on the internet.

If you clone this project and create improvements, a pull request would be appreciated :) 

Antoine

## How to edit content

You can modify everything. If you just want to change text content, icons, pictures ... edit the `App.content.json` file.
- The `common` node is supposed to contain data who's the same regardless of the activated language, like your name (By default two language : English, Français),
- If you create new nodes under a langage node and display it on a component, be sure to do it on every other langages nodes, 
- Pictures are located in the `src/Medias` folder,
- Icons engine is located in the `App.logos.js` file. If you want to add new icons, imitate current implementation and browse [react-icons](https://react-icons.netlify.com/#/) to find your new icons,
- Navigation Bar is automatically generated, but you need to add a `navIcon` value to your sections in order to make an icon appear. The `navIcon` string must match an icon name present in the icon engine (see `App.logos.js`),
- If you want to create more sections such as "Presentation", "Cursus", ... Add the new one into the `/src/Components/Portfolio/Portfolio.js` component,
- To add a new route to the site, edit the `App.router.js` file.

## Used libraries

- [react-icons](https://react-icons.netlify.com/#/)
- [react-grid-system](https://github.com/sealninja/react-grid-system)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-router-hash-link](https://github.com/rafrex/react-router-hash-link)
- [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline)
- [react-eva-icons](https://www.google.com/search?q=react-eva-icons)
