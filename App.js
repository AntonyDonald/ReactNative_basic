

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {


  // -------------------------------------- Nested array and this Data for SectionList-----------------------------------------------------

  // const Data = [
  //   {
  //     title : "Title 1",
  //     data : ["item 1-1" , "item 1-2 " , "item 1-3"]
  //   },
  //   {
  //     title : "Title 2",
  //     data : ["item 2-1" , "item 2-2 " , "item 2-3"]
  //   },
  //   {
  //     title : "Title 3",
  //     data : ["item 3-1" , "item 3-2 " , "item 3-3"]
  //   },
  //   {
  //     title : "Title 4",
  //     data : ["item 4-1" , "item 4-2 " , "item 4-3"]
  //   },
  // ]



  //----------------------------------- this is for FlatList map function--------------------------------------------------------------  

  // const [items, setItems] = useState([
  //   { name: "item1" },
  //   { name: "item2" },
  //   { name: "item3" },
  //   { name: "item4" },
  //   { name: "item5" },
  //   { name: "item6" },
  //   { name: "item7" },
  //   { name: "item8" },
  //   { name: "item9" }
  // ]);
  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...items, { name: "item 60" }]);
  //   setRefreshing(false);

  // }

  // -----------------------------------this is for normal map function--------------------------------------------------------------  

  // const [items, setItems] = useState([
  //   { key: 1, item: "item1" },
  //   { key: 2, item: "item2" },
  //   { key: 3, item: "item3" },
  //   { key: 4, item: "item4" },
  //   { key: 5, item: "item5" },
  //   { key: 6, item: "item6" },
  //   { key: 7, item: "item7" },
  //   { key: 8, item: "item8" },
  //   { key: 9, item: "item9" }
  // ]);
  // const [refreshing , setRefreshing] = useState (false);

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...items , {key: 60 , item : "item 60"}]);
  //   setRefreshing(false);

  // }


  // -----------------------------------Basic useState Function----------------------------------------------------------------

  // const [name, setName] = useState("Antony");
  // // const [session , setSession] = useState({number : 0 , title : "Crazy"});
  // // const [current , setCurrent] = useState(true);

  // const onchangeHandler = () => {
  //   setName("Donald");
  //   // setSession({number : 6 , title : "Killer"});
  //   // setCurrent(false)
  // }

  // ---------------------------------------- for InputField --------------------------------------------------------------------

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // ---------------------------------for Modal --------------------
      setShowWarning(true)

      // -----------------------------------------Normal Alert Warning---------------------------------------------------  

      // Alert.alert('Warning', 'Please Enter More than 3 Character',
      //   [
      //     {
      //       text: 'Do Not show again',
      //       onPress: () => console.warn('Do Not show again Pressed!')
      //     },
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.warn('Cancel Pressed!')
      //     },
      //     {
      //       text: 'OK',
      //       onPress: () => console.warn('Ok Pressed!')
      //     },
      //   ], { cancelable: true, onDismiss: () => console.warn("Alert Dismiss") }
      // )

      // ---------------------------------------------ToastAndroid is also alert method. it have 3 types----------------------------------------------------  

      // --------------1st Method----------------------

      // ToastAndroid.show('Please Enter More than 3 Character',
      // // ToastAndroid.SHORT // 2sec
      // ToastAndroid.LONG // 3.5sec
      // )

      // --------------2nd Method---------------------- but it does not work--------------

      // ToastAndroid.showWithGravity('Please Enter More than 3 Character',
      // ToastAndroid.LONG, // 3.5sec
      // ToastAndroid.CENTER
      // )

      // -----------------------3rd Method--------------but it does not work----------------

      // ToastAndroid.showWithGravityAndOffset('Please Enter More than 3 Character',
      // ToastAndroid.LONG,
      // ToastAndroid.TOP,
      // 0,
      // 200
      // )

    }
  }

  return (
    <ImageBackground
     style={styles.body}
     source = {{uri : 'https://cdn.pixabay.com/photo/2016/05/12/07/24/grunge-1387126_960_720.jpg'}}
     >
      {/* when we use ScrollView that time this view is not compulsary because we will directly set this styles.body into scrollView Tag*/}
      {/* ------------------------------------------------Modal----------------------------------- */}
      <Modal
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        transparent
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.modal_warning}>
            <View>
              <Text style={styles.warning_title}>WARNING ! </Text>
            </View>
            <View style={styles.warning_text}>
              <Text>The name must be more than 3 character</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{ color: '#ff0f' }}
            >
              <Text style={styles.warning_text}>OK</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
      {/* ----------------------------------------------------------------------------------- */}
      <Text style={styles.text}> Please Write Your Name :</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g.Antony'
        onChangeText={(value) => setName(value)}
      />
      {/* <Button
title= {submitted ? 'Clear' : 'Submit'}
onPress={() => handleSubmit()}
></Button> */}

      {/* this TouchableOpacity is alternative for button because this TouchableOpacity,TouchableHighlight,Presable button have styles */}
      {/* ---------------------------------------------- */}
      {/* <TouchableOpacity
style = {styles.button}
onPress={() => handleSubmit()}
activeOpacity = {0.5}
>
<Text> {submitted ? 'Clear' : 'Submit'}</Text>
</TouchableOpacity> */}
      {/* ----------------------------------------------- */}
      {/* <TouchableHighlight
style = {styles.button}
onPress={() => handleSubmit()}
underlayColor = "#fff"
>
<Text> {submitted ? 'Clear' : 'Submit'}</Text>
</TouchableHighlight> */}
      {/* ------------------------------------------------ */}
      {/* <TouchableWithoutFeedback
onPress={() => handleSubmit()}
>
  <View style = {styles.button}>
  <Text> {submitted ? 'Clear' : 'Submit'}</Text>
  </View>
</TouchableWithoutFeedback> */}
      {/* -------------------------------------------------*/}

      {/* this pressable button have many state 
examble : onLongPress,delayLongPress and we set  hitSlop(1.46.41 on react native video) to the button.
android_ripple style for android devices  */}

      <Pressable
        onPress={() => handleSubmit()}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#ff8f" : "#00ff0f" },
          styles.button
        ]}
      >
        <Text> {submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>

      {submitted ?
        <View>
          <Text style={styles.text}>Your Name is : {name}</Text>
          <Image
            style={styles.Image}
            source={require('./assets/done.png')}
            resizeMode= 'stretch'
          />
        </View>
        :
        <View>
        <Image
          style={styles.Image}
          // ---------------this imagefrom local folder---------------------
          // source={require('./assets/error.png')}
          //--------------- this image from google-----------------------
          source={{uri : 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png'}}
          resizeMode= 'stretch'
          blurRadius={10}
        />
        </View>
        
      }





      {/* this sectionList method is similar to FlatList method but we will seperate the nested array with section Header */}
      {/* <SectionList 
      keyExtractor={(item , index) =>index.toString()}
      sections={Data}
      renderItem = {({item}) => (
        <Text style={styles.text} >{item}</Text>
      )}
      renderSectionHeader= {({section}) =>(
        <View style={styles.item}>
        <Text style={styles.text} >{section.title}</Text>
        </View>
      )}
      /> */}

      {/* ---------------------------------------FlatList map Function--------------------------------------------------  */}
      {/* <FlatList
      // the keyExtractor used for for index value into Key Value. the value if keyExtractor is must in string format. this is a map function so it needs a key value
      // keyExtractor={(item , index) =>index.toString()}
      //   data={items}
                                         // renderItems is also map function 
      //   renderItem={({ item }) => (
      //     <View style={styles.item}>
      //       <Text style={styles.text} >{item.name}</Text>
      //     </View>
      //   )}
      //   refreshControl={
      //     <RefreshControl
      //       refreshing={refreshing}
      //       onRefresh={onRefresh}
      //       colors={["#f03"]}
      //     />
      //   }
      // />
  */}


      {/* -----------------------------------------ScrollView---------------------------------------------------------- */}
      {/* use ScrollView or FlatList because these are diff method but work is same   */}

      {/* <ScrollView 
    refreshControl={
      <RefreshControl 
      refreshing = { refreshing}
      onRefresh = {onRefresh}
      colors = {["#f03"]}
      />
    }> */}

      {/* -------------------------------------Normal Map Function-------------------------------------------------------------- */}

      {/* map function        */}

      {/* {
        items.map((data) => {
          return (


            <View style={styles.item}>
              <Text style={styles.text} key={data.id}>{data.item}</Text>
            </View>
          )

        })
      } */}

      {/* -----------------------------  one state but multiple value (number and title)----------------------- */}

      {/* <Text style = {styles.text}>My fav number is {session.number} and my nick name is {session.title}</Text>
      <Text style = {styles.text}>{current ? "Current Session" : "Next Session"}</Text> */}
      {/* <View style = {styles.button}>
      <Button title='Update State' onPress={() => onchangeHandler()}></Button>
      </View> */}
      {/* ----------------------------------------Linking----------------------------------------------------------- */}

      {/* <Button title='Go to YouTube' onPress={() => {Linking.openURL("https://www.youtube.com/")}}></Button> */}

      {/* ------------------------------------------Style Applying--------------------------------------------------------- */}


      {/* <View style = {styles.view1}>
      <Text style = {styles.text}>1</Text>
      </View>
      <View style = {styles.view2}>
      <Text style = {styles.text}>2</Text>
      </View>
      <View style = {styles.view3}>
      <Text style = {styles.text}>3</Text>
      </View> */}
      {/* </ScrollView> */}
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    // width : "100%",
    // height : "80%",`
    alignItems: "center",
    // justifyContent: "center",
    // borderWidth : 10,
    // borderColor : "#110fff",
    // borderRadius : 10,
    // margin : 40
  },
  // item: {
  //   backgroundColor: "#0fffffff",
  //   margin: 10,
  //   alignItems: "center",
  //   justifyContent: "center"

  // },
  text: {
    color: "#000",
    fontSize: 50,
    fontStyle: "italic",
    margin: 10,
    // textTransform : 'uppercase'
  },
  input: {
    borderWidth: 1,
    width: 200,
    fontSize: 30,
    textAlign: "center",
    borderColor: "#555",
    borderRadius: 10,
    marginBottom: 10,
  },
  // -------------------------for modal------------------------------------
  modal_warning: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20
  },
  centered_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00000099"
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_text: {
    color: "#000",
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  warning_button: {
    backgroundColor: "#09f",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: 125,
  },
  // --------------------------Image----------------------------------------------------
  Image: {
    height: 100,
    width: 100,
    margin: 20
  },
  // -------------------------------------------------------------------------------------
  button: {
    // this backgroundColor was commented because we apply styles directly in pressable button. because refer presable button above
    // backgroundColor : "#00ff0f",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  }
  // view1 : {
  //   width : 200, 
  //   height : 200,
  //   backgroundColor : "#f08",
  //   alignItems : "center",
  //   justifyContent : "center"
  // },
  // view2 : {
  //   width : 200, 
  //   height : 200,
  //   backgroundColor : "#0fffffff",
  //   alignItems : "center",
  //   justifyContent : "center"
  // },
  // view3 : {
  //   width : 200, 
  //   height : 200,
  //   backgroundColor : "#f03",
  //   alignItems : "center",
  //   justifyContent : "center"
  // },
  // button : {
  //   width : 150,
  //   height : 50,
  // }
})



export default App;