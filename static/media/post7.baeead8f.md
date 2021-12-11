2021.12.11

# Making GIFs on the Linux Command Line

In the last post I talked about needing to sort files numerically, so here's the followup, where those files photos to turn into a GIF.

```
convert -limit memory 1 -limit map 1 *<pattern>.<extension> final.gif
```

To optimize it now that it's been created,

```bash
convert -limit memory 1 -limit map 1 final.gif -fuzz 10% -layers Optimize final_optimzed.gif
```

This is basically exactly what's in this [source](https://linoxide.com/make-animated-gif-linux/), but placed here for my convenience. :sweat_smile:

Cheers :beers: