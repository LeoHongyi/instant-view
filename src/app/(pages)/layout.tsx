// src/app/(pages)/layout.tsx
import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

import { Header } from "../_components/header";
import $styles from "./layout.module.css";
import Theme from "../_components/theme";
import "./global.css";
export const metadata: Metadata = {
  title: "home",
  description: "home desc",
};

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <Theme>
    <div className={$styles.layout}>
      <Header />
      {children}
    </div>
  </Theme>
);
export default AppLayout;
