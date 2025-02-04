---
sidebar_position: 20
---

# Streaming Games

To stream games from your PC to another device, like your TV or your phone.

## Requirements

- [Sunshine Requirements](https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/overview.html#system-requirements)
- A reliable network connection between your PC and the device you want to stream to
  > Both devices should be on the same network, preferably via Ethernet
- (optional) Steam: It provides a nice UI for launching games and Sunshine can automatically add your Steam games to its library

## Setup

- [Steam](https://store.steampowered.com/about/) or [Playnite](https://playnite.link/) is the game launcher. It should be installed on the PC you want to stream games from.
- [Sunshine](https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/installation.html) is the streaming server. It should be installed on the PC you want to stream games from
- [Moonlight](https://moonlight-stream.org/) is the streaming client. It should be installed on the device you want to stream games to

:::info

You can manage your Sunshine applications and configurations from its web UI at [localhost:47990](https://localhost:47990/)

:::

### Sunshine Applications

- [Playnite](https://playnite.link/): I use the full screen mode to launch Playnite from Moonlight.

## Challenges

### Network Bandwidth

TVs usually have a 100Mbit port instead of 1Gbit. This isn't enough to stream games at 1080p 60fps.

#### Solutions

- Use a USB 3 dongle that supports Android TV devices like TP-Link UE300. ([<Icon icon="fa-brands fa-reddit" size="lg" /> UE305 or UE306 don't work](https://www.reddit.com/r/bravia/comments/qdrgjl/usb_ethernet/))
- Use a device that has a 1Gbit Ethernet port.
  - Raspberry Pi 4 if you want to DIY the whole thing
  - Nvidia Shield TV if you want a more polished experience

### Display Resolution

I'm using a 21:9 monitor, but my TV is 16:9. This means that I have to change the resolution of my monitor to 16:9 before I can stream games to my TV.

#### Solutions

Use `Do Command` and `Undo Command` functionality of Sunshine Applications combined with a resolution management software to automate this process. You can find proper commands on [the Sunshine documentation](https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/guides/app_examples.html#changing-resolution-and-refresh-rate).

You can download QRes for Windows from [here](https://www.majorgeeks.com/files/details/qres.html).

For Windows, you can use the following commands:

*Change the resolutions and refresh rate based on your display settings*

- `Do Command`: `cmd /C D:\Programs\qres\QRes.exe /x:1920 /y:1080 /r:60`
- `Undo Command`: `cmd /C D:\Programs\qres\QRes.exe /x:1920 /y:1200 /r:60`

### Controller Connectivity

The XBox wireless dongle doesn't work with Android TV. I'm using Bluetooth instead which has a bit of input lag.

### Video Stuttering

Even after reducing the bitrate, I'm still getting some stuttering. I'm not sure if this is because of the network bandwidth or the TV itself. I'm going to investigate this further after I fixed the network bandwidth issue.

### Controller Haptic Feedback

Haptic feedback doesn't work in the XBox controller when connected to the TV.
