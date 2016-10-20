# belfast-cares-app

### Prerequisites

npm installed
git installed
java8 JDK : http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
android studio : https://developer.android.com/studio/index.html
JAVA_HOME set

run SDK manager : C:\Users\apoclyps\AppData\Local\Android\sdk\tools\android.bat

```
npm install -g cordova
npm install -g ionic

ionic lib update

ionic start belfast-cares-app sidemenu

cd myApp
ionic platform add ios
ionic build ios
ionic emulate ios
```

Make sure to cd into your new app directory:
```
cd belfast-cares-app
```

To run your app in the browser (great for initial development):
```
ionic serve
```

To run on iOS:
```
ionic run ios
```

To run on Android:
```
ionic run android
```
