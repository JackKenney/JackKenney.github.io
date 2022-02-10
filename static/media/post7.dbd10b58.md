2021.12.11

# Making GIFs on the Linux Command Line

In the last post I talked about needing to sort files numerically, so here's the followup, where those files photos to turn into a GIF.

```
convert *<pattern>.<extension> final.gif
```

To optimize it now that it's been created,

```bash
convert final.gif -fuzz 10% -layers Optimize final_optimzed.gif
```

The original [source](https://linoxide.com/make-animated-gif-linux/) recommended we use the `-limit` flag to reduce the amount of load on the system, but on my system, I experimented a bit and found that there wasn't much of a difference. The RAM was pretty constant and the program is single-threaded, so as long as you have a multi-core machine you'll be fine to run it full. 

Cheers :beers:
