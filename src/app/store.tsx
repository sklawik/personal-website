"use client";

import { create } from "zustand";

export let useTheme = create((set) => ({
  darkmode: false,
  setTheme: () =>
    set((state) => ({
      darkmode: !state.darkmode,
    })),
}));
