2023.03.17 

# Customizing Mac Terminals

Many employers, including my current one, provide Apple computers to work with.
As such it's helpful to have a few things straight so that you can get working right away.

For one, Macs use `zsh` for the default shell, which I'm finding quite useful.
It's pretty customizable, and it's bash compatible so all my bash scripts work as expected which is 
refreshing having tried `fish` for a while and having to fix a bunch of broken scripts.

To make the shell pretty, I found oh-my-zsh to be pretty customizable, so I wrote a custom
shell theme (which is just the entrypoint line for commands and such).

You can find the gist here: [https://gist.github.com/JackKenney/25dd3fe461309aff129e9420c691eea7#file-jackkenney-zsh-theme](https://gist.github.com/JackKenney/25dd3fe461309aff129e9420c691eea7#file-jackkenney-zsh-theme)

Just put it in your `~/.oh-my-zsh/custom/themes/` folder, 
and then set `ZSH_THEME="jackkenney"` in your `~/.zshrc`.

Viola, a pretty neat little bash thingy with a nice indicator for which git branch your on
and if the branch is dirty. The full path is off to the right, which I find really helpful as well.

`omz` is clearly a really feature-rich thing I've barely scratched the surface with here as far as 
auto-completion for different things goes, but it looking good and being useful is a solid start.