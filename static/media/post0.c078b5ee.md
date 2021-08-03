# Custom Fonts in Ubuntu 20.04

Adding custom fonts and using them in various programs can be tricky in Ubuntu as of 2021, so here's a quick resource set to smooth things out:

Coding with font ligatures can be nice like with [Dank Mono](https://scottw.com/blog/dank-mono/) and [FiraCode](https://github.com/tonsky/FiraCode), so [Ligalex Mono](https://github.com/ToxicFrog/Ligaturizer/releases) adds them to [IBM Plex](https://github.com/IBM/plex/releases) Mono, which is an nice open source font for coding.

Double clicking on OTF files works, or adding them to your `~/.local/share/fonts` manually.

Getting these fonts to show up everywhere is not as easy as just clicking install, unfortunately. 
To get fonts to show up in Terminal(s) and other programs like VSCode, I had to create and modify a `.conf` file described [here](https://github.com/tonsky/FiraCode/issues/840#issuecomment-531471498).

Then finally running:

```bash
sudo fc-cache -vf
```

Worked to have them show up in Terminal profile font selection and VSCode fonts.

TL;DR

* Download [Ligalex Mono](https://github.com/ToxicFrog/Ligaturizer/releases)
* Create `.conf` file [like this](https://github.com/tonsky/FiraCode/issues/840#issuecomment-531471498)
* Run `sudo fc-cache -vf`
* Use wherever!
