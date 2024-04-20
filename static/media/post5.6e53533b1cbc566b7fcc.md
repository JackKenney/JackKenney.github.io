2021.11.12

# Hibernation on Linux

Hibernation can be tricky to set up for laptops, but it is a great way to save power when the computer is not in use. The high level is that it saves the system state to disk and then completely shuts down the computer. This is opposed to just shallow suspend, or suspending into RAM and leaving power flowing through the RAM. These S1 and S2 suspends, respectively, are quicker to start back up and also preserve the state of the system exactly. Unfortunately, they consume a lot and a little power, respectively so it's worth setting up hibernate if you want to just close your laptop for hours at a time and come back to your session.

For Arch, there were many things to set up and get right, so I'll detail them here. The main setup instructions are [here](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate#Hibernation), but they are a little obfuscated and it's easy to miss steps.

## Systemd

Get `systemd` settings in order so the right kinds of sleep happen when you want them to.

We'll be following the `suspend-then-hibernate` protocol, which means we'll suspend to RAM for a bit, and then write to disk after some timeout.

1. Set up the lid to first suspend, then hibernate in `/etc/systemd/logind.conf` by changing the `HandleLidSwitch` to `suspend-then-hibernate`. [source](https://wiki.archlinux.org/title/Power_management#Power_management_with_systemd)

```
HandleLidSwitch=suspend-then-hibernate # defaults to suspend
```

2. Lastly, set up the hibernate delay seconds to be shorter in `/etc/systemd/sleep.conf`

```
HibernateDelaySec=5min # defaults to 180min
```

## GRUB

We want to add in a reference to our swap space so that the kernel knows where to save the state of the machine and to load it from during reboot. We do this by passing commands to the kernel in our GRUB configuration.

First we'll need the UUID of our swap partition. If you're using a swap file, it's a little more complicated and a swap offset is needed to indicate the start of the swap space.

```bash
lsblk -f
```

displays the partition UUIDs, so we can just copy the UUID for our swap space from there.

To add the parameter, we can go to `/etc/default/grub` and edit the `GRUB_CMDLINE_LINUX` value to include

```
resume=UUID=whateverYourUUIDForYourSwapPartitionIs
```

Now that we've added the new resume kernel parameter, we need to regenerate our GRUB entries so they reflect this new argument. [source](https://wiki.archlinux.org/title/GRUB#Generate_the_main_configuration_file)

```bash
# grub-mkconfig -o /boot/grub/grub.cfg
```

## Initramfs

Now we have to configure `initramfs` to load in the resumed files when the computer boots back up. We want this to happen early on in the user setup, but not too early, so we will add `resume` to the `HOOKS` declation in `/etc/mkinitcpio.conf`. 

Steps outlined [here](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate#Configure_the_initramfs)

Details on `HOOKS` found [here](https://wiki.archlinux.org/title/Mkinitcpio#HOOKS)

Finally, regenerate all the existing `initramfs` presets [[source](https://wiki.archlinux.org/title/Mkinitcpio#Manual_generation)]

```bash
# mkinitcpio -P
```

Very in depth hibernation troubleshooting based on the kernel itself can be found [here](https://www.kernel.org/doc/html/latest/power/basic-pm-debugging.html)

Hope this helps! :tada:
