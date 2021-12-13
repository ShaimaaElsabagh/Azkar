

import * as React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Linking,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Container, Header, Button, Fab } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from 'react-native-vector-icons/AntDesign';
import Masbaha from './Masbaha'
import Do3a2 from "./Do3a2"
import Zekr from "./Zekr"
import Record_Azkar from "./Record_Azkar"
import Splash from "./Splash"
import Records from "./Records"
import Record_Masbaha from './Record_Masbaha';
import Fav from './Fav'
import { Colors } from './Constants';
import { Style } from './Constants'
class Home extends React.Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.mainColor} />

                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: '100%',
                    height: 60,
                    backgroundColor: Colors.mainColor,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5

                }}


                >

                    <Text style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 21
                    }}>حصن المسلم</Text>
                </View>



                <ScrollView style={{
                    backgroundColor: "#fff",
                    flex: 1,
                }}>

                    <View style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        alignItems: "center",
                    }}>

                        <TouchableOpacity style={Style.TouchableStyle}
                            onPress={
                                () => {
                                    this.props.navigation.navigate("zekr")
                                }
                            }
                        >

                            <View style={Style.IconContiner}>
                                <Icon name="cloud-moon" size={25} color="#fff" />
                            </View>

                            <View style={Style.TextContiner}>
                                <Text style={Style.TextStyle}>الاذكار</Text>
                            </View>
                        </TouchableOpacity>




                        <TouchableOpacity style={Style.TouchableStyle}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("masbaha")
                                }
                            }
                        >

                            <View style={Style.IconContiner}>
                                <Icon name="spinner" size={25} color="#fff" />
                            </View>

                            <View style={Style.TextContiner}>
                                <Text style={Style.TextStyle}>المسبحة</Text>

                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity style={Style.TouchableStyle}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("fav")
                                }
                            }
                        >

                            <View style={Style.IconContiner}>
                                <Icon2 name="heart" size={25} color="#fff" />
                            </View>

                            <View style={Style.TextContiner}>
                                <Text style={Style.TextStyle}>الاذكار المفضلة</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={Style.TouchableStyle}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("records")

                                }
                            }
                        >

                            <View style={Style.IconContiner}>
                                <Icon name="list-ol" size={25} color="#fff" />
                            </View>

                            <View style={Style.TextContiner}>
                                <Text style={Style.TextStyle}>السجل</Text>
                            </View>
                        </TouchableOpacity>




                        <TouchableOpacity style={Style.TouchableStyle}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("do3a2")
                                }
                            }
                        >

                            <View style={Style.IconContiner}>
                                <Icon name="pray" size={25} color="#fff" />
                            </View>


                            <View style={Style.TextContiner}>
                                <Text style={Style.TextStyle}>بعض الادعية من القرأن</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>


        )
    }
}

export default createAppContainer(
    createStackNavigator(
        {
            splash: Splash,
            Home: Home,
            masbaha: Masbaha,
            do3a2: Do3a2,
            zekr: Zekr,
            fav: Fav,
            records: Records,
        }, {
        headerMode: "none"
    }

    )
)


