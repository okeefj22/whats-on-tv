#!/usr/bin/env node
"use strict";

// Required packages
const osmosis = require("osmosis");
const moment = require("moment");
const chalk = require("chalk");

// Read in the channel list
const channelList = require("./channel-list");

// Command line options
let channelName;
if (process.argv[2]) channelName = process.argv[2];
else process.exit(1); 

let time;
if (process.argv[3]) time = process.argv[3];

// Get the corresponding channel number from the channelList object
const channelNum = channelList[channelName];

// Build URL
let url;
if (time === "tomorrow") {
    url = `http://entertainment.ie/TV_Listing/${moment().add(1, "days").format("DD-MMMM-YYYY")}/${channelNum}/${channelName}.htm`;
}
else {
    url = `http://entertainment.ie/TV_Listing/${moment().format("DD-MMMM-YYYY")}/${channelNum}/${channelName}.htm`;
}

// Arrays for start times and programmes
const startTimes = [];
const programmes = [];

// Fetch latest Entertainment.ie listings
osmosis
  .get(url)
  .find("ul > li > p > a > em")
  .then((result) => {
    startTimes.push(result.innerHTML);
  })
  .find("ul > li > p > a > strong")
  .then((result) => {
    programmes.push(result.innerHTML.replace(/<(?:.|\n)*?>/gm, ""));
  })
  .done(() => {
    if (time === "now") {
        printListing(startTimes[0], programmes[0]);
    }
    else if (time === "next") {
        printListing(startTimes[1], programmes[1]);
    }
    else {
        for (let i = 0; i < startTimes.length; i++) {
            printListing(startTimes[i], programmes[i]);
        }
    }
  });

function printListing(start, programme) {
    console.log(`${chalk.yellow.bold(start)}\t${chalk.white.bold(programme)}`);
}
