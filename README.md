# React + TypeScript + Vite + TailwindCSS + shadcn

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Install dependencies
```bash
npm install
```

### Run the project
```bash
npm run dev
```

### Generate new shadcn component
```bash
npx shadcn@latest add button
```

### Clean architecture
I tried to follow as much as possible the clean architecture principles.
The project is divided into 3 layers:
- **Presentation**: Contains the React components and the styles.
- **Domain**: Contains the business logic and the interfaces.
- **Data**: Contains the data fetching logic.

