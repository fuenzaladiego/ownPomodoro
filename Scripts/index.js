import { pomodoroWatch } from "./pomodoro.js";
const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    pomodoroWatch("clock","#activate-watch","#desactivate-watch","#reset");
})