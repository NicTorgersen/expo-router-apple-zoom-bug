# Expo Router Apple Zoom Bug Repro

This repository is a minimal reproducible example for an iOS issue involving Expo Router, `Link.AppleZoom`, and dismissing a modal with `router.back()`.

In this repro, if the modal is closed too quickly after opening, the app can become unresponsive and future modal interactions can break.

I have personally not tested this on versions of iOS earlier than 26.3.

## Expected behavior

When tapping the image preview:

- the image modal should open with the Apple Zoom transition
- tapping the `X` button should close the modal cleanly
- the app should remain interactive after closing
- the modal should be able to open and close repeatedly without side effects

## Actual behavior

If the modal is dismissed very quickly after it starts opening:

- the app can become partially or fully unresponsive
- taps stop working correctly
- modal navigation can break for subsequent attempts
- the app may need to be reloaded or restarted to recover

## How to reproduce

1. Start the app with `bun run ios`.
2. Wait for the app to open on the iOS Simulator or device.
3. On the welcome screen, tap the cat image preview.
4. Immediately tap the `X` close button while the modal transition is still in progress, or as soon as the modal appears.
5. Repeat a few times if needed.

## Repro result

After a fast open-and-close interaction, you may observe one or more of the following:

- the current screen stops responding to touches
- opening the modal again no longer works correctly
- other modals within `expo-router` stop working
- the navigation state feels stuck or visually broken
- the app requires a relaunch to return to normal behavior (reloading dfoes not help)

## Prerequisites

- [Bun](https://bun.sh)
- Xcode
- an iOS Simulator or physical iPhone

This is primarily an **iOS-specific repro**, and tested on iOS 26.3.

## Environment in this repo

Key package versions currently used:

- `expo` `~55.0.5`
- `expo-router` `~55.0.4`
- `expo-image` `~55.0.6`
- `react` `19.2.0`
- `react-native` `0.83.2`

## Getting started

Install dependencies with Bun:

```sh
bun install
```

Run the app on iOS:

```sh
bunx expo run:ios --device
```

## How this repro is implemented

- `src/app/index.tsx`
  - renders a single preview image
  - opens the detail route with Expo Router's `Link`
  - wraps the image in `Link.AppleZoom`
- `src/app/_layout.tsx`
  - defines `view-image` as a stack screen
  - uses `presentation: "modal"`
- `src/app/view-image/[path].tsx`
  - renders the fullscreen image modal
  - dismisses the modal using `router.back()` from the close button