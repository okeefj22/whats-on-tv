#!/usr/bin/env node
"use strict";

// Required packages
const osmosis = require("osmosis");
const fs = require("fs");

// Define URL
const url = "http://entertainment.ie/tv";

// Empty channels object
const channels = {};

// Fetch Entertainment.ie channel listings
osmosis
  .get(url)
  .find("#channels > .slider > ul > li > a")
  .then((result) => {
    let href = result.href.split(/\/|\./);
    let channel = href[href.length - 2];
    let num = href[href.length - 3];
    channels[channel] = num;
  })
  .done(() => {
    let json = JSON.stringify(channels, null, 2);
    fs.writeFile("channel-list.json", json, "utf-8");
  });
