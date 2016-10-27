# belfast-cares-app

### Prerequisites

- NPM installed : https://nodejs.org/en/download/
- Git installed : https://git-scm.com/download/win
- Java 8 JDK : http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
- Android SDK : https://developer.android.com/studio/index.html

### Setting up your environment

```
npm install -g cordova
npm install -g ionic

ionic lib update

cd belfast-cares-app
ionic platform add browser

```

### Running the App
```
ionic build browser
ionic serve
```

To run on Android:
```
ionic platform add android
ionic platform build android
ionic run android
```
