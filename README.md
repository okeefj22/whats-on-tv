# What's on TV?
Irish TV Guide with a CLI.

The program scrapes the listings from [entertainment.ie](http://entertainment.ie) using predefined values in the [channel-list.json](https://github.com/okeefj22/whats-on-tv/blob/master/channel-list.json) file. The keys are channel names which users can use to get listings but they also correspond to an entertainment.ie URL as do the values. An example URL is as follows `http://entertainment.ie/TV_Listing/13-February-2017/82/RTE-2.htm` where RTE-2 would be an example key and 82 would be the corresponding value in the JSON file.

## Installation
```
npm i -g whats-on-tv
```

## Setup tab autocompletion
To setup tab autocompletion you simply run the following command.

```
whatson --setup
```

If you using Bash, it will create a file at `~/.whatson/completion.sh` and append a loader code to `~/.bash_profile`.

If you use Zsh of Fish, it just appends a loader code to `~/.zshrc` or `~/.config/fish/config.fish` respectively.


## Usage
If you have tab autocompletion setup, you can display a list of channels using the following command.

```
whatson <TAB>
```

Otherwise, you can check the [channel-list.json](https://github.com/okeefj22/whats-on-tv/blob/master/channel-list.json) file.

### Get today's full listings
```
whatson RTE-2
```

### Get listings for now or next
```
whatson RTE-2 now
whatson RTE-2 next
```

### Get listings for tomorrow
```
whatson RTE-2 tomorrow
```
