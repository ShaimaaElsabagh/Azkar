

import * as React from 'react'
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'
import { Colors } from './Constants';
export default class Record_Azkar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: []
        }
    }


    componentDidMount() {

        this.get_data()
    }

    async save_counter(record) {


        await AsyncStorage.setItem('record', JSON.stringify(record))

    }

    async get_data() {

        let record = JSON.parse(await AsyncStorage.getItem("record"))
        if (record == null) {
            record = this.state.record
        } else {
            record = record

        }
        this.setState({
            record: record,
        })
    }




    async remove(index) {

        let record = this.state.record;
        record.splice(index, 1);
        this.setState({ record })
        this.save_counter(record)

    }


    render() {
        return (
            <>

{
    this.state.record.length !=0 ?(
       <>
                <ScrollView style={{
                    backgroundColor: Colors.secColor,
                }}>
                    <View style={{
                        alignItems: "center"
                    }}>


                        {
                            this.state.record.map((record, index) => (
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

                                                عدد الاذكار الكلي :
                                            </Text>


                                            <Text style={{

                                                color: Colors.secColor,
                                                fontSize: 18,
                                                fontWeight: "normal",
                                                marginRight: 5
                                            }}>{record.number}</Text>




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
                                            }}>{record.date}</Text>




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

                                                color:Colors.secColor,
                                                fontSize: 18,
                                                fontWeight: "normal",
                                                marginRight: 5
                                            }}>{record.time}</Text>





                                        </View>


                                    </TouchableOpacity>
                                </>
                            ))
                        }
                    

                    </View>
                </ScrollView>
                </>
    ):(
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
                }}>سجل الاذكار فارغ</Text>
            </View>
        </>
    )}

            </>

        )
    }
}

