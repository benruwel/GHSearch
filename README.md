<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://img.icons8.com/bubbles/300/000000/github.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center" style="color : #FCA311;">GitHub Search</h3>

  <p align="center">
    Search repos and users from the GitHub API
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [BDD](#bdd)
    * [User Route](#user-route)
    * [Repo Route](#repo-route)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project


This web application consumes the GitHub API wherby the users can search GitHub's users by their
usernames. The app also enables users to search through all GitHub's repos that have a specific term in their readme docs.

### Built With
This is a client-side web application that uses:
* [Bootstrap](https://getbootstrap.com)
* [Angular](https://angular.io/)
* [GitHub API](https://developer.github.com/v3/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Download npm to manage the node packages. Run this in your terminal:
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/benruwel/GHSearch.git
```
2. Install NPM packages
```sh
npm install
```
3. To have unlimited requests use this [guide](https://developer.github.com/v3/) to generate an API key

4. Place your API key in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```



<!-- USAGE EXAMPLES -->
## BDD

### User Route:

* Enter the username to search
_i : "benruwel"_

* The username is placed at the end of the API route ~ `GET users/benruwel`
* The result is the user's GitHub info and public repos _o : {name : string, login : string, ...}_

### Repo Route:

* Enter the term to search
_i : "npm"_

* The username is placed at the end of the API route ~ `GET /search/repositories?q=npm+in:name+in:description`
* The result is a lsit of repos that have that term in their name and/or description


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Email ruwelmwangi@gmail.com

Project Link: [https://github.com/benruwel/GHSearch](https://github.com/benruwel/GHSearch)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Icons8](https://icons8.com/icons/set/github)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Coolors Generator](https://coolors.co/)
* [RxJs](https://rxjs-dev.firebaseapp.com/)
* [Font Awesome](https://fontawesome.com)
* [Google Fonts](https://fonts.google.com/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
