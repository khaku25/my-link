# Project: my_link

## Project Overview
This is a React application built with [Vite](https://vite.dev/). It provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and ESLint rules.

### Core Technologies
- **React**: Frontend library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **ESLint**: Linter for identifying and reporting on patterns in JavaScript code.

## Building and Running

### Development
To start the development server with HMR:
```bash
npm run dev
```

### Build
To build the project for production:
```bash
npm run build
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

### Linting
To run ESLint:
```bash
npm run lint
```

## Development Conventions

### Code Style
- Follow standard React and JavaScript (ESM) practices.
- The project uses `eslint.config.js` for linting rules. Ensure your code passes `npm run lint` before committing.

### Project Structure
- `src/`: Contains the main application code.
  - `main.jsx`: Entry point for the React application.
  - `App.jsx`: Root component.
  - `assets/`: Static assets like images and SVGs.
- `public/`: Static files that are served directly.
- `vite.config.js`: Configuration for Vite.

### Testing
- Currently, no testing framework is configured. When adding tests, consider using [Vitest](https://vitest.dev/) for a Vite-native testing experience.

### Formatting
- The project doesn't have an explicit Prettier configuration, but consistent formatting is encouraged.
