// src/app/(pages)/page.tsx
import { FC } from "react";

import $styles from "./page.module.css";

const App: FC = () => (
  <main className={$styles.container}>
    <div className={$styles.block}></div>
  </main>
);
export default App;
