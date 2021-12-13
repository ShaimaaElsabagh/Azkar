


import * as React from 'react'
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import { Colors } from './Constants';
import { Style } from './Constants'
export default class Fav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: [
                {
                },
            ],

            numOfItemsIsLiked: 0,


        }
    }



    componentDidMount() {
        this.getlist();
        setTimeout(() => {
            this.checkIfIsLiked();
        }, 100);
    }

    async store(arr) {
        await AsyncStorage.setItem('zekr', JSON.stringify(arr));
    }

    async getlist() {
        let arr = await AsyncStorage.getItem('zekr');

        if (arr == null) {
            arr = [];
        } else {
            arr = JSON.parse(arr);
        }
        this.setState({ fav: arr });
    }




    delete(index) {
        let fav = this.state.fav;
        fav[index].favo = false;
        fav[index].color = Colors.secColor
        this.setState({ fav });
        this.store(fav);
        setTimeout(() => {
            this.checkIfIsLiked();
        }, 100);
        ToastAndroid.showWithGravity(
            'تم المسح!',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
    }

    checkIfIsLiked() {
        let fav = this.state.fav,
            numOfItemsIsLiked = 0;
        for (let i = 0; i < fav.length; i++) {
            if (fav[i].favo == true) {
                numOfItemsIsLiked++;
            }
        }

        this.setState({ numOfItemsIsLiked });
    }

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
                    <Text style={Style.HeaderText}>الاذكار المفضلة</Text>
                </View>

                {this.state.numOfItemsIsLiked != 0 ? (
                    <ScrollView style={{
                        backgroundColor: Colors.secColor,
                    }}>
                        <View style={{
                            alignItems: "center"
                        }}>


                            {
                                this.state.fav.map((fav, index) => (
                                    <>
                                        {
                                            fav.favo ? (

                                                <TouchableOpacity style={{
                                                    width: '85%',
                                                    borderRadius: 10,
                                                    elevation: 5,
                                                    backgroundColor: Colors.mainColor,
                                                    marginTop: 5,
                                                    padding: 28,
                                                    marginBottom: 10
                                                }}

                                                    key={index}

                                                    onLongPress={() => {
                                                        this.delete(index)
                                                    }}

                                                >
                                                    <View style={{
                                                        flexDirection: "row",
                                                        flex: 3.3,
                                                        justifyContent: "flex-end",
                                                    }}>
                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "normal",
                                                            marginRight: 5
                                                        }}>{fav.item}</Text>


                                                    </View>
                                                </TouchableOpacity>
                                            ) : null
                                        }
                                    </>
                                ))
                            }


                        </View>
                    </ScrollView>
                ) : (
                    <>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: Colors.secColor,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>


                            <Text style={{
                                color: Colors.mainColor,
                                fontSize: 28,
                                letterSpacing: 1,
                                fontWeight: 'bold'
                            }}>ليس لديك اي اذكار مفضلة </Text>
                        </View>
                    </>
                )}

            </>

        )
    }
}

