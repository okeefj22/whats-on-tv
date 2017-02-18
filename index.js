#!/usr/bin/env node
"use strict";

// Required packages
const osmosis = require("osmosis");
const moment = require("moment");

// Read in the channel list
const channelList = require("./channel-list");

// Command line options
let channelName;
let time;

// Parse command line options (no validation, sorry!)
process.argv.forEach((arg, i, argv) => {
  switch (arg) {
    case "--channel":
      channelName = argv[i + 1];
      break;
    case "--time":
      time = argv[i + 1];
      break;
  }
});

// Get the corresponding channel number from the channelList object
const channelNum = channelList[channelName];

// Build URL
const url = `http://entertainment.ie/TV_Listing/${moment().format("DD-Mo-YYYY")}/${channelNum}/${channelName}.htm`;

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
        console.log(`${startTimes[0]}\t${programmes[0]}`);
    }
    else if (time === "next") {
        console.log(`${startTimes[1]}\t${programmes[1]}`);
    }
    else {
        for (let i = 0; i < startTimes.length; i++) {
            console.log(`${startTimes[i]}\t${programmes[i]}`);
        }
    }
  });
