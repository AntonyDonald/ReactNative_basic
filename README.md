# ReactNative_basic

create project
      npx react-native init projectName
      npx react-native start
      npx react-native run-android

run program cmd => npx react-native run-android

navigation 
     npm install @react-navigation/native
     npm install react-native-screens react-native-safe-area-context
     npm install @react-navigation/native-stack
     npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
     
Async Storage
      npm install @react-native-async-storage/async-storage

SQLite storage
      npm install --save react-native-sqlite-storage
      
 QR code Scanner 
      https://www.npmjs.com/package/react-native-qrcode-scanner
 
 for gif 
 
 [android/app/build.gradle ]
 
    implementation 'com.facebook.fresco:animated-gif:2.6.0'
    implementation 'com.facebook.fresco:animated-webp:2.0.0'
    implementation 'com.facebook.fresco:webpsupport:2.0.0'
    
for Icons

      1,Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

            apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
      
      2,Edit android/settings.gradle :
      
            include ':react-native-vector-icons'
            project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
      
      3,android/app/build.gradle 
      
      dependencies{
      ...
      implementation project(':react-native-vector-icons')
      }
      
  For Image Picker
  
      1, android/app/src/main/AndroidManifest.xml
      
            <uses-permission android:name="android.permission.CAMERA"/>
            <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
            <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
            
      2,npm i react-native-image-picker
      
      3, refer youtube  -- https://www.youtube.com/watch?v=mD59nVo-ZSA&ab_channel=TechwithMuskan
  
