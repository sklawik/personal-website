"use client";
import { create } from "zustand";


type useThemeType = {
  darkmode: boolean,
  setTheme: ()=>void;
};

type themeState = {
  darkmode: boolean
}

export let useTheme = create<useThemeType>((set) => ({
  darkmode: false,
  setTheme: () =>
    set((state: themeState) => ({
      darkmode: !state.darkmode,
    })),
}));
