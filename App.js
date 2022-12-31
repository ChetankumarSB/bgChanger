import React, {useState} from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
StatusBar
} from "react-native"

const App = () => {


const [randomColor,setRandomcolor] = useState("rgb(36,0,126)")

const changeBG = () => {
  let color = "rgb("+ 
  Math.floor(Math.random()*256) +
  ","+ 
  Math.floor(Math.random()*256) +
  ","+ 
  Math.floor(Math.random()*256) +
  ")";
  setRandomcolor(color)
};

const restcolor = () => {
  setRandomcolor("rgb(0,0,0)")
}



return(
  <>
  <StatusBar backgroundColor={randomColor}/>
  <View style={[styles.container,{backgroundColor:randomColor}]}>
    <TouchableOpacity onPress={changeBG}>
      <Text style={styles.text}>
        Tap me
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={restcolor}>
      <Text style={[styles.text, {marginTop:20}]}>
        Reset
      </Text>
      </TouchableOpacity>
    </View>
  </>
)

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase"

  }
})

export default App;