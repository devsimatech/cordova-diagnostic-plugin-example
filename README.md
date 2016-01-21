Cordova/Phonegap Diagnostic Plugin Example
==========================================

This repo contains an example project which illustrates use of the [Diagnostic Cordova/Phonegap plugin](https://github.com/dpa99c/cordova-diagnostic-plugin).

# Legacy Android version

__Note:__ this branch contains a version of the project designed for testing a [legacy version of the plugin](https://github.com/dpa99c/cordova-diagnostic-plugin/tree/api-22) for building against legacy Android APIs (22 and below). The legacy plugin version contains all the functionality on the [master branch](https://github.com/dpa99c/cordova-diagnostic-plugin) __except__ support for Android 6 runtime-permissions, which introduces a minimum of API 23.
If possible, you should use the master branch, which additionally supports Android 6 runtime-permissions.

Phonegap Build (at the time of writing) does not support API 23, so its users and others who wish to build against API 22 or below, should use the legacy version.

The plugin is registered in on [npm](https://www.npmjs.com/package/cordova.plugins.diagnostic) as `cordova.plugins.diagnostic`.
__However__ the version of the plugin published to npm is the master branch containing Android 6 runtime permissions code and adding the API 23+ dependency, so you'll need to install the legacy version of the plugin directly from the GitHub repo, specifying the branch:

    cordova plugin add https://github.com/dpa99c/cordova-diagnostic-plugin#api-22

## Contents
* [Downloading](#downloading)
* [Building and running](#building-and-running)
* [Pre-built app](#pre-built-app)
* [Screenshots](#screenshots)
* [License](#license)
 
# Downloading

To download the example project, clone it using git:

    $ git clone https://github.com/dpa99c/cordova-diagnostic-plugin-example#api-22

# Building and running

The plugin currently supports the Android and iOS platforms.

For example, to run on the Android platform, execute the following commands from the project root:

- Install the API 22 platform into the project: `$ cordova platform add android@4`
- Build and run the project: `$ cordova run android`

# Pre-built app
If you're unable to build the project or just want to try it out, here is the project as a pre-built app installer:

- [Android (APK)](build/cordova-diagnostic-plugin-example.apk)
- [iOS (IPA)](build/cordova-diagnostic-plugin-example.ipa)

# Screenshots

## Android

![Android screenshot](https://raw.githubusercontent.com/dpa99c/cordova-diagnostic-plugin-example/master/screenshots/android_1.png)
![Android screenshot](https://raw.githubusercontent.com/dpa99c/cordova-diagnostic-plugin-example/master/screenshots/android_2.png)
![Android screenshot](https://raw.githubusercontent.com/dpa99c/cordova-diagnostic-plugin-example/master/screenshots/android_3.png)

## iOS

![iOS screenshot](https://raw.githubusercontent.com/dpa99c/cordova-diagnostic-plugin-example/master/screenshots/ios_1.png)
![iOS screenshot](https://raw.githubusercontent.com/dpa99c/cordova-diagnostic-plugin-example/master/screenshots/ios_2.png)

# License
================

The MIT License

Copyright (c) 2016 Dave Alden / Working Edge Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.