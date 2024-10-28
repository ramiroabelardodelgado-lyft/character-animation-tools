# Modified NLA Script for Duik

This script is a modification of Duik's NLA (Non-Linear Animation) script. It allows you to create non-linear animations by pre-composing layers and then animating the pre-comps. The animation will be applied to the original layers in the main composition.

## How it Works

The script works by iterating over all the layers in the main composition and checking if they have a name that starts with the specified `nameTag`. If they do, it will then check if the layer is a pre-comp and if it is, it will animate the pre-comp.

The script also adds some additional functionality to the original NLA script such as the ability to animate the first and last keyframes of the pre-comp.

## Usage

1. **Pre-compose Layers:** Select the layers you want to animate and pre-compose them.
2. **Name your Pre-comps:** Ensure your pre-comp names start with the specified `nameTag` (defined within the script).
3. **Animate the Pre-comp:**  Apply your desired animation to the pre-comp. This can include position, scale, rotation, etc.
4. **Paste the Script:** Paste the script on the properties you want to get NLA capabilities as an scripted expression. It will apply the animation from the pre-comp to the original layers within the main composition.

## Features

* **Non-Linear Animation:** Achieve complex animations by animating pre-comps.
* **First and Last Keyframe Animation:**  Control the animation of the first and last keyframes of the pre-comp.
* **Improved Workflow:**  Simplify your animation process by working with pre-comps.

## Notes

* This script is designed to be used as a replacement for the NLA script from the Duik plugin. ( optimized for our current character animation usage / requirements at EDU )
* Make sure to adjust the `nameTag` variable in the script if needed.
