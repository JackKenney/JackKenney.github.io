2024.05.27

# Making a windows 10 bootable USB on a Mac

This guy has all the answers so I'm going to save them for posterity.

https://alexlubbock.com/bootable-windows-usb-on-mac

## Prepare flash drive

Plug in your USB

```
diskutil list
```

find it in the list, make note of the disk number (e.g. disk6)

Wipe the disk and make it MS-DOS, and call it `WINDOWS10`

```
diskutil eraseDisk MS-DOS "WINDOWS10" MBR disk{your_disk_number_here}
```

## Mount the Windows 10 ISO

Run this and make note of which volumes are mounted

```
ls /Volumes
```

Go to finder, double click the Windows 10 ISO you got from [Microsoft](https://www.microsoft.com/en-us/software-download/windows10ISO)

```
ls /Volumes
```

You'll see a volume like: `CCCOMA_X64FRE_EN-US_DV9` appear.

## Check how big install.wim is

```
ls -lh /Volumes/CCCOMA_X64FRE_EN-US_DV9/sources/install.wim
```

If it's over 4GB (it will be lol), you'll have to split the file because of MS-DOS

## Copy the boot files to the drive

First copy all the other files

```
rsync -avh --progress --exclude=sources/install.wim /Volumes/CCCOMA_X64FRE_EN-US_DV9/ /Volumes/WINDOWS10
```

Install `wimlib` if you don't have it, e.g.,

```
brew install wimlib
```

## Copy the install.wim to the drive, splitting as needed

Not sure why you wouldn't just always run the command like this - either it needs to split it or it doesn't split it, either way it works.

```
wimlib-imagex split /Volumes/CCCOMA_X64FRE_EN-US_DV9/sources/install.wim /Volumes/WINDOWS10/sources/install.swm 3800
```

## Eject the drive in finder

title

## Plug it in and you're off to the races

> Simply eject the WINDOWS10 volume by clicking on the eject symbol in Finder, and remove the USB drive. It's now ready to use as a bootable installation disk.
> Finally, if the USB drive won't boot, you may need to enable "legacy boot support" in your BIOS, if you have such an option.

Thank you Alex Lubbock!
