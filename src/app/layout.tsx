import type { Metadata } from "next";

import "./styles/index.css";

import type { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "instant-view",
  description: "view quick and easy news",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body>{children}</body>
  </html>
);

export default RootLayout;
