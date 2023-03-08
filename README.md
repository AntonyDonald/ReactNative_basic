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
      
            1, import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
            
            2,Code -- 
                   
                                                  let option = {
                                                              saveToPhotos: true,
                                                              mediaType: 'photo',
                                                               }

                   for open camera -->              const openCamera = async () => {
                                                        const granded = await PermissionsAndroid.request(
                                                            PermissionsAndroid.PERMISSIONS.CAMERA,
                                                              );
                                                              if (granded === PermissionsAndroid.RESULTS.GRANTED) {
                                                                  const result = await launchCamera(option);
                                                                  setCameraImage(result.assets[0].uri);
                                                              }
                                                              }
                                                              
                    for open Gallery  -->             const openGallery = async () => {
                                                        const result = await launchImageLibrary(option);
                                                        setCameraImage(result.assets[0].uri)
                                                        }
      
      3, refer youtube  -- https://www.youtube.com/watch?v=mD59nVo-ZSA&ab_channel=TechwithMuskan
      
  For Image Crop Picker
  
      1, npm i react-native-image-crop-picker
      
      2, android/build.gradle
            
            allprojects {
                 repositories {
                 ...
                  maven { url 'https://maven.google.com' }
                  maven { url "https://www.jitpack.io" }
                              }
                        }
                        
      3, android/app/build.gradle
      
                  1. android {
                      ...

                      defaultConfig {
                          ...
                          vectorDrawables.useSupportLibrary = true
                          ...
                            }
                            ...
                         }

                  2. android {
                            compileSdkVersion 27
                            buildToolsVersion "27.0.3"
                            ...

                            defaultConfig {
                              ...
                              targetSdkVersion 27
                              ...
                            }
                            ...
                        }
        4, refer youtube -- https://www.youtube.com/watch?v=brE91Obyn78&ab_channel=IntellectDeveloper          
  
        5, Permission.js -- Component
        
                  import { PermissionsAndroid, Platform } from 'react-native';

                  export const androidCameraPermission = () => new Promise(async (resolve, reject) => {
                      try {
                          if (Platform.OS === 'android' && Platform.Version > 22) {
                              const granted = await PermissionsAndroid.requestMultiple([
                                  PermissionsAndroid.PERMISSIONS.CAMERA,
                                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                                  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
                              ]);
                              if (
                                  granted['android.permission.CAMERA'] !== 'granted' ||
                                  granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
                                  granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
                              ) {
                                  showError('please Allow Permission')
                                  return resolve(false)
                              }
                              return resolve(true)
                          }
                          return resolve(true)
                      } catch (error) {
                          return resolve(false)
                      }
                  })
                  
          6 , this is for Image crop picker code
                        
                        const onSelectImage = async () => {
                          const permissionStatus = await androidCameraPermission()
                          if (permissionStatus || Platform.OS === 'android') {
                              Alert.alert(
                                  "Upload Aadhaar",
                                  'Choose an Option',
                                  [
                                      { text: 'Camera', onPress: openCamera },
                                      { text: 'Gallery', onPress: openGallery },
                                      { text: 'Cancel', onPress: () => { } },
                                  ]
                              )
                          }


                      }

                      const openCamera = async () => {
                          ImagePicker.openCamera({
                              width: 300,
                              height: 400,
                              cropping: true
                          }).then(image => {
                              console.log(image);
                          });
                      }
                      const openGallery = async () => {

                          ImagePicker.openPicker({
                              width: 300,
                              height: 400,
                              cropping: true
                          }).then(image => {
                              console.log(image);
                          });
                      }
        
            
