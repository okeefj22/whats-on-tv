# What's on TV?
Irish TV Guide with a CLI.

The program scrapes the listings from [entertainment.ie](http://entertainment.ie) using predefined values in the [channel-list.json](https://github.com/okeefj22/whats-on-tv/blob/master/channel-list.json) file. The keys are channel names which users can use to get listings but they also correspond to an entertainment.ie URL as do the values. An example URL is as follows `http://entertainment.ie/TV_Listing/13-February-2017/82/RTE-2.htm` where RTE-2 would be an example key and 82 would be the corresponding value in the JSON file.

## Installation
```
cd {path-to-repo}
npm link
```

## Usage
### Get listings for a certain channel
You must first find the exact channel name in [channel-list.json](https://github.com/okeefj22/whats-on-tv/blob/master/channel-list.json).

```
whatson --channel RTE-2
```

#### Get listings for now or next
```
whatson --channel RTE-2 --time now
whatson --channel RTE-2 --time next
```
