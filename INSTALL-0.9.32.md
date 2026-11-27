# ESDS 0.9.32 — Android build

This branch packages the Obsidian plugin as a folder-ready ZIP containing:
- main.js
- styles.css
- manifest.json

## Install on Android
1. Download the GitHub Actions artifact named ESDS-0.9.32-Android (or use the branch source archive as a fallback).
2. Extract the ZIP.
3. Copy the three plugin files into your vault at `.obsidian/plugins/english-study-design-studio/`.
4. In Obsidian, open Community plugins and reload/enable English Study Design Studio.

The source archive contains repository documentation and tests in addition to the plugin files. Use the Actions artifact for the compact install ZIP.

## Validation boundary
The workflow runs the semantic-class/role contract test and JavaScript syntax check before packaging. The ZIP is not considered Android-runtime verified until installed and checked in Obsidian on a device.

Build workflow is triggered by pushes to this branch; the downloadable install ZIP appears under Actions > Package ESDS Android plugin > Artifacts after a successful run.
