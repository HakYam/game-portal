# Game Portal

Welcome to the Game Portal project! This project is a web application designed to provide a comprehensive overview of various video games. Users can search, filter, and sort games based on different criteria such as genre, platform, and rating.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/HakYam/game-portal.git
   cd game-portal
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the application:
   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

Once the application is running, you can:
- Use the search bar in the navigation to find games by name.
- Filter games by genre using the genre list on the left side (visible on larger screens).
- Select a platform to filter games by platform.
- Sort games by different criteria using the sort selector.

## Features

- **Responsive Design**: The layout adapts to different screen sizes.
- **Search Functionality**: Search for games by name.
- **Filtering**: Filter games by genre and platform.
- **Sorting**: Sort games based on criteria like rating and release date.
- **Dark Mode**: Toggle between light and dark modes for better readability.

## Project Structure

```
game-portal/
│
├── public/
│   ├── vite.svg
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── bulls-eye.webp
│   │   ├── logo.webp
│   │   └── ...
│   │
│   ├── components/
│   │   ├── ColorModeSwitch.tsx
│   │   ├── CriticScore.tsx
│   │   ├── Emoji.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameCardContainer.tsx
│   │   ├── GameCardSkeleton.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── GenreList.tsx
│   │   ├── NavBar.tsx
│   │   ├── PlatformIconList.tsx
│   │   ├── PlatformSelector.tsx
│   │   ├── SearchInput.tsx
│   │   └── SortSelector.tsx
│   │
│   ├── hooks/
│   │   ├── useData.tsx
│   │   ├── useGames.tsx
│   │   ├── useGenres.tsx
│   │   └── usePlatforms.tsx
│   │
│   ├── services/
│   │   ├── api-client.tsx
│   │   └── image-url.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── theme.ts
│   └── vite-env.d.ts
│
├── .eslintrc.cjs
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- This project uses data from the [RAWG Video Games Database](https://rawg.io/).
- Special thanks to the [Chakra UI](https://chakra-ui.com/) team for their UI components.
