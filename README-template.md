# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./desktop.jpg)
![](./mobile-1.jpg)
![](./mobile-2.jpg)
![](./mobile-3.jpg)
![](./mobile-4.jpg)

### Links

- Solution URL: [Github repository](https://github.com/remcoj89/room-homepage)
- Live Site URL: [Deployed on Vercel](https://room-homepage-pearl-nine.vercel.app/)

## My process

 1. Figuring out the structure of the design how is it build op. What components belong to gether and thinkig of where i want to use flex-box or grid and desided to start with the mobile first approache
 2. Setting-up the development folder by installing react with vite, sass, and removing the default components with there styling to start from a clean slate.
 3. Creating the scss 7-1 folder structure, reseting the css default settings, creating variables and mixins based on the given stylesheet.
 4. Build the first Section called HeroSection this section contains the: Navigation-bar, Hero-Image and the Hero content.
 5. Build the About section.
 6. Build the .button-container this container includes the left and right button to navigate in the HeroSection. Also manipulating the state by using the useContext Hook.
 7. Created a data.json file with the HeroSection Data and a ContextProvider to manage the data.
 8. fixing all the styling problems that are left and try to optimize the responsivenes of the page.
 9. Bringing the App in production Using Vercel.
 10. Test if the app works how it supposed to do and fix the possible errors

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

The lessons I have drawn from this assignment include a better understanding of the useContext hook. I have learned how to use it to control the state, allowing the state to be utilized in multiple components.

I have gained a better insight into styling components and the use of variables and mixins in SCSS. Additionally, I made an effort to adhere as much as possible to the 7-1 folder structure, making it simpler to manage CSS.


### Continued development


The areas were I want to imporve myself is to get a better understanding in the react libary. I want to know more about how to manage the state
with for example redux and get a deeper understanding of the different react Hooks.

I also want to improve my (s)css skill to create a more pixle perfect web applications and play arround width animations


### Useful resources

- [Sass guidelines](https://sass-guidelin.es) - This helped me for the structure and usage of the scss framework the explanation is very clear and detailed.
- [Reac documentation](https://react.dev/) - The react documentation helped me mostly width the state manegement of the the app.


## Author

- Website - [Remco Jonk](https://www.remcojonk.nl)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/remcoj89)


## Acknowledgments
