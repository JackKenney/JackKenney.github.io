# Secure Copying from SSH Remote

Secure copying is super useful for people using clusters or remote working situations and once configured works smoothly.

A simple SSH config file could looks like this:

```
Host kenney-remote
  HostName remoteserver.kenney.dev
  User jack
```

And once that's set up we can do simple `scp` commands to copy folders like this:

```bash
scp -r kenney-remote:/home/jack-remote/files-of-interest/* /home/jack-local/put-them-here-please
```

And that works all well and good, but sometimes we want to do more complex copying, like excluding files that are big and we don't need. For this we can use the `rsync` command. For example:

```bash
rsync -av -e ssh --exclude="*.extensionIDontLike" kenney-remote:/home/jack-remote/files-of-interest/* .
```

[source](https://www.cyberciti.biz/faq/scp-exclude-files-when-using-command-recursively-on-unix-linux/)

Which would recursively copy everything to my current directory that isn't excluded.

The `-a` does the recursion, and the `-e ssh` tells `rsync` to expect an SSH Host in the source (or destination) directories.

:tada:
