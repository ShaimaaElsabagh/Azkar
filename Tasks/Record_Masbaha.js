import * as React from 'react'
var { width, height } = Dimensions.get('window');
import { Text, View, TouchableOpacity, Modal, StatusBar, Image, Alert, TextInput, StyleSheet, Button, ScrollView, ImageBackground, Dimensions, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Colors } from './Constants';
export default class Record_Masbaha extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Masbaha_record: []

        }
    }

    componentDidMount() {

        this.get_data()
    }

    async save_counter(Masbaha_record) {

        await AsyncStorage.setItem('Masbaha_record', JSON.stringify(Masbaha_record))

    }

    async get_data() {

        let Masbaha_record = JSON.parse(await AsyncStorage.getItem("Masbaha_record"))
        if (Masbaha_record == null) {
            Masbaha_record = this.state.Masbaha_record
        } else {
            Masbaha_record = Masbaha_record

        }
        this.setState({
            Masbaha_record,
        })
    }


    async remove(index) {

        let Masbaha_record = this.state.Masbaha_record;
        Masbaha_record.splice(index, 1);
        this.setState({ Masbaha_record })
        this.save_counter(Masbaha_record)

    }




    render() {
        return (
            <>

                {
                    this.state.Masbaha_record.length != 0 ? (
                        <>
                            <ScrollView style={{
                                backgroundColor: Colors.secColor,
                            }}>
                                <View style={{
                                    alignItems: "center"
                                }}>
                                    {
                                        this.state.Masbaha_record.map((Masbaha_record, index) => (
                                            <>
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
                                                        this.remove(index)
                                                    }}
                                                >
                                                    <View style={{
                                                        flexDirection: "row",
                                                        flex: 3.3,
                                                       
                                                        justifyContent: "flex-start",

                                                    }}>

                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "bold",
                                                            marginRight: 5
                                                           
                                                        }}>

                                                            عدد التسبيحات الكلي :
                                                        </Text>


                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "normal",
                                                            marginRight: 5
                                                        }}>{Masbaha_record.number}</Text>




                                                    </View>




                                                    <View style={{
                                                        flexDirection: "row",
                                                        flex: 3.3,
                                                        
                                                        justifyContent: "flex-start",
                                                        marginTop: 5
                                                    }}>


                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "bold",
                                                            marginRight: 5
                                                        }}>

                                                            التاريخ  :
                                                        </Text>
                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "normal",
                                                            marginRight: 5
                                                        }}>{Masbaha_record.date}</Text>





                                                    </View>



                                                    <View style={{
                                                        flexDirection: "row",
                                                        flex: 3.3,
                                                        justifyContent: "flex-start",
                                                        marginTop: 5
                                                    }}>

                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "bold",
                                                            marginRight: 5
                                                        }}>

                                                            الوقت  :
                                                        </Text>
                                                        <Text style={{

                                                            color: Colors.secColor,
                                                            fontSize: 18,
                                                            fontWeight: "normal",
                                                            marginRight: 5
                                                        }}>{Masbaha_record.time}</Text>





                                                    </View>


                                                </TouchableOpacity>
                                            </>
                                        ))
                                    }


                                </View>
                            </ScrollView>
                        </>
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
                                }}>سجل التسبيحات فارغ</Text>
                            </View>
                        </>
                    )}

            </>




        )
    }
}