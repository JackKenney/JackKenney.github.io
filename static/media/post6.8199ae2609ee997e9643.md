2021.12.11

# Sorting Files Numerically

I ran into a use case where I needed to list files numerically (not lexicographically) for a GIF creation. I'll detail the GIF in my next post, but I think the numeric sorting is more general.

I did it with the `find` command

```bash
find *<pattern>.<extension> | sort -n -k1.<start of the number in the filename>
```

[source](https://stackoverflow.com/a/13361153/13989862)
