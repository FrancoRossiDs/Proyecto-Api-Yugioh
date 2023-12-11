# Yu-Gi-Oh Card Search Application

## Overview

This web application leverages the Yu-Gi-Oh API to provide a user-friendly interface for searching and filtering Yu-Gi-Oh cards. The project is built using JavaScript and features modular components for fetching cards, setting up pagination, and applying filters based on various criteria.

## Table of Contents

- [Usage](#usage)
- [Filters](#filters)
- [Project Structure](#project-structure)
- [API Source](#api-source)
- [Contribution](#contribution)
- [License](#license)

## Usage

Visit the hosted application on GitHub Pages: [Yu-Gi-Oh Card Search]([https://your-username.github.io/your-repo/](https://francorossids.github.io/Proyecto-Api-Yugioh/)

## Filters

The application supports a variety of filters to refine your card search:

- **General Filters**
  - Card Name
  - Card ID

- **Monster Filters**
  - Attribute
  - Type
  - Class
  - Level

- **Spell Filters**
  - Spell Type

- **Trap Filters**
  - Trap Type

To reset all filters and start a new search, click the "Reset" button.

## Project Structure

The project is organized into several modules:

- **main.mjs**: The main script that integrates different modules and handles user interactions.
- **getCards.mjs**: Module for fetching Yu-Gi-Oh cards from the API.
- **pagination.mjs**: Module for setting up and managing pagination.
- **typeCards.mjs**: Module for applying filters based on card types.

## API Source

The Yu-Gi-Oh API used in this project is provided by [YGOPRODeck](https://ygoprodeck.com/api-guide/).

## Contribution

Contributions to this project are welcome! If you have any ideas for improvement or encounter issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).



