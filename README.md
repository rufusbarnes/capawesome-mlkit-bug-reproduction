# README

> [!IMPORTANT]  
> Patched in version 7.1.1

Minimum reproducable example for [this issue](https://github.com/capawesome-team/capacitor-mlkit/issues/258) occuring on v7.1.0 of https://github.com/capawesome-team/capacitor-mlkit.

### Steps to reproduce

1. Install dependencies with `npm -i`
2. Build the app with `npm run build && npx cap sync`
3. Launch the app on a physical iPhone using Xcode in debug mode.
4. Press scan button
5. Press stop button
6. Repeat steps 2 and 3 until a crash occurs
