# Unity on Ubuntu

_7 September 2021_

There are a few tricky things about installing Unity on Ubuntu. 

[Unity Download](https://unity3d.com/get-unity/download)

## UnityHub AppImage

First is that they serve an Appimage for UnityHub, which is not the Unity Editor, but is similar.
I put this into my `~/addons/unity/` folder along with PNG icon I got from the web.

To get this to show up in Gnome, I had to make a `.desktop` entry, included here:

```
[Desktop Entry]
Encoding=UTF-8
Name=UnityHub
Comment=3D animation game making
Exec=/home/echo/addons/unity/UnityHub.AppImage %F
Icon=/home/echo/addons/unity/icon.png
MimeType=application/x-iso9660-appimage;
Type=Application
Categories=Utility;Application;
```

place this in `~/.local/share/applications/` so Gnome can find it.

## Assets

It's not super clear where assets go on Ubuntu because the `xdg-open` link doesn't appear to do anything. BUT IT DOES.

Once you click the link for the asset (e.g. [this texture pack](https://assetstore.unity.com/packages/2d/textures-materials/nature/terrain-tools-sample-asset-pack-145808)), you can now find it in the "Package Manager" for Unity Editor.

So,

1. Open your project
2. Go to Windows -> Package Manager
3. Change the Package Manager's location to "My Assets"
4. Refresh
5. Now you can `Download` the assets you added into your Unity editor.
6. From there you can `Import` them into your project. :tada:

[Source](https://forum.unity.com/threads/how-to-open-in-unity-from-asset-store-linux-mint-17-1.368095/#post-7463585)
