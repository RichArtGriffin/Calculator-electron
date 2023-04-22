"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("before-quit", () => {
  console.log("before-quit");
});

app.on("ready", () => {
  const aspectRatio = 2 / 3; // Define el aspecto deseado (por ejemplo, 2:3 para una calculadora)
  let win = new BrowserWindow({
    width: 275,
    height: 412,
    minHeight: 137,
    minWidth: 206,
    maxHeight: 824,
    maxWidth: 550,
    maximizable: false,
    icon: path.join(__dirname, "assets", "img", "icon-calculator.png"),
  });
  win.setMenuBarVisibility(false);

  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.loadURL(`file://${__dirname}/index.html`);

  win.on("resize", () => {
    const [width, height] = win.getSize();
    const newHeight = Math.round(width / aspectRatio);
    if (height !== newHeight) {
      win.setSize(width, newHeight);
    }
  });
});