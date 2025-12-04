2021.09.08

# Dell XPS 13 9360 Boot Issues

Not strictly a Linux issue, but does affect linux booting, so I'll put it here just for record purposes.

If there are booting problems on a Dell XPS 13 9360 it's best to keep all the drivers updated:

[Props to this post for figuring out this bug](https://www.dell.com/community/XPS/XPS-13-9360-hard-drive-not-installed/m-p/7323487/highlight/true#M30234)

## Prerequisites

If you have to, make a new [reinstallation drive]() to get a working version of Windows.

I recommend using ACHI with this laptop because the RAID hard disk configuration seems to have problems.
You can change that in the BIOS.

## Updating Drivers and Firmware

To install the drivers boot into windows on the computer and go to [Dell Support](https://www.dell.com/support/home/en-us)
and search for the "Service Tag".

Service Tags can be found on the bottom of the laptop, or by running

```cmd
wmic bios get serial number
```

[Source](https://www.dell.com/support/kbdoc/en-us/000130711/how-to-locate-your-system-service-tag-using-command-prompt)

Then you can use the service tag to use the "Dell SupportAssistant" to install all the drivers automatically.

:tada: It should be all set to reboot and avoid the boot problems.
