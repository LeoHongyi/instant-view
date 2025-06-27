// src/app/(pages)/layout.tsx
import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

import { Header } from "../_components/header";
import $styles from "./layout.module.css";
export const metadata: Metadata = {
  title: "home",
  description: "home desc",
};

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={$styles.layout}>
    <Header />
    {children}
  </div>
);
export default AppLayout;
