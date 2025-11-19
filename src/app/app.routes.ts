import { Routes } from "@angular/router";
import { authGuard } from "./auth-guard";

export const routes: Routes = [
  {
    path: "chat",
    canActivate: [authGuard],
    loadComponent: () => import("./pages/chat/chat").then((com) => com.Chat),
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login/login").then((com) => com.Login),
  },
  {
    path: "",
    loadComponent: () => import("./pages/login/login").then((com) => com.Login),
  },
];
