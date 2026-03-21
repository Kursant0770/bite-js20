# 🎓 School Project — Bite (Vite + React + JavaScript)

This is an educational project developed as part of a course. The main focus is practicing modern React development using JavaScript, Redux Toolkit, MUI (Material UI), and clean component architecture.

## 🚀 Tech Stack

- **React** + JavaScript — main UI library
- **Vite** — fast build tool and development server
- **Redux Toolkit** — global state management & API logic
- **React Router v6** — routing
- **MUI (Material UI)** — modern and customizable UI components
- **Architecture**: Component-Based + Modular Folder Structure

---

## ⚙️ Installation & Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

---

## The app will be available at:

`http://localhost:5173`

## 🏁 Production Build

### To create a production-ready build:

```bash
npm run build
```

The output will be generated in the `dist` folder — ready for deployment.

## 🌿 Git Branching Convention

To maintain clean structure and teamwork efficiency, use the following branch naming rules:

| Branch Type | Purpose                     | Example                  |
| ----------- | --------------------------- | ------------------------ |
| `feature/`  | New feature                 | `feature/add-auth-page`  |
| `bugfix/`   | Bug fixes                   | `bugfix/fix-mobile-menu` |
| `refactor/` | Code refactoring            | `refactor/clean-header`  |
| `docs/`     | Documentation updates       | `docs/readme-update`     |
| `test/`     | Adding or updating tests    | `test/add-auth-tests`    |
| `release/`  | Preparing a release version | `release/v1.0.0`         |

> ✅ Use `kebab-case` and English descriptions.

---

## 📂 Project Structure (Simplified)

```
src/
├── api/            # Axios instances & API logic
├── assets/         # Icons, images, fonts
├── components/
│   ├── ui/         # MUI components
│   └── shared/     # Reusable components
├── containers/     # Feature-level UI blocks / pages
├── layout/         # Layout components (Header, Footer, etc.)
├── store/          # Redux Toolkit: slices, store
├── routes/         # Routing configuration
├── utils/          # Helpers and constants
├── index.css       # Global styles
└── main.jsx        # App entry point
```

---

## 🎨 UI Components (MUI)

### The project uses:

- MUI (Material UI) components

All UI elements are consistent, reusable, and follow Material Design guidelines.

## Style Guide

#### Linters

We are using ESLint and Prettier to find bugs and errors before they happen. We'll spend less time testing new features and the team's code will be more consistent. We are following the [Airbnb JavaScript Style Guide](https://github.com/songhee24/VS-CODE__ReactJs-with-ESLint-Prettier-and-Airbnb).

## ✍️ Authors
