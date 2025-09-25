"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

function applyTheme(isDark: boolean): void {
   const root = document.documentElement;
   if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
   } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
   }
}

export default function ThemeSwitch() {
   const [isDark, setIsDark] = useState<boolean>(true);

   useEffect(() => {
      const stored =
         typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      const prefersDark =
         typeof window !== "undefined" &&
         window.matchMedia &&
         window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialDark = stored ? stored === "dark" : prefersDark;
      setIsDark(initialDark);
   }, []);

   useEffect(() => {
      if (typeof window === "undefined") return;
      applyTheme(isDark);
   }, [isDark]);

   return (
      <div className="flex items-center gap-2">
         <Sun className="size-4 text-muted-foreground" />
         <Switch
            checked={isDark}
            onCheckedChange={(checked) => setIsDark(!!checked)}
            aria-label="Toggle dark mode"
         />
         <Moon className="size-4 text-muted-foreground" />
      </div>
   );
}
