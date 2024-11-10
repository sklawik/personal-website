"use client";
import { create } from "zustand";

type themeState = {
  darkmode: boolean
}

export let useTheme = create((set) => ({
  darkmode: false,
  setTheme: () =>
    set((state: themeState) => ({
      darkmode: !state.darkmode,
    })),
}));
