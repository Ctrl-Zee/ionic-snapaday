Getting started with Capacitor Android Dev
In your phone settings: 1. Turn developer mode on 2. Enable USB debugging

Install OEM USB drivers for you phone https://developer.android.com/studio/run/oem-usb
Make sure Java SDK 11 or greater is installed.
Makue sure the environemnt variable JAVA_HOME is pointed at the correct JDK.
IMPORTANT: Restart your terminal after changing the variable.

To see the app on your phone with live debugging run
ionic cap run android -l --external
