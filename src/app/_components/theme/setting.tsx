// src/app/_components/theme/setting.tsx
"use client";
import type { FC } from "react";

import { Switch } from "antd";
import { Moon, Sun } from "lucide-react";

import { Button } from "../shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/ui/dropdown-menu";
import { useTheme, useThemeActions } from "./hooks";

/**
 * Shadcn主题选择器
 */
export const ShadcnThemeSetting: FC = () => {
  const { changeMode } = useThemeActions();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="focus-visible:!tw-ring-0"
        >
          <Sun className="tw-h-[1.2rem] tw-w-[1.2rem] tw-rotate-0 tw-scale-100 tw-transition-all dark:tw--rotate-90 dark:tw-scale-0" />
          <Moon className="tw-absolute tw-h-[1.2rem] tw-w-[1.2rem] tw-rotate-90 tw-scale-0 tw-transition-all dark:tw-rotate-0 dark:tw-scale-100" />
          <span className="tw-sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeMode("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeMode("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeMode("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
