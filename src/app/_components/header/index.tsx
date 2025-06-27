import type { FC } from "react";

import { HeaderLogo } from "./logo";
import $styles from "./styles.module.css";
import { ShadcnThemeSetting } from "../theme/setting";

export const Header: FC = () => (
  <header className={$styles.header}>
    <HeaderLogo />
    <div className={$styles.themeSetting}>
      <ShadcnThemeSetting />
    </div>
  </header>
);
