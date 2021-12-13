import * as React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    AsyncStorage,
    Dimensions
} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from 'react-navigation';
import { Colors } from './Constants';
import { MabahaStyle } from './Constants'
import{Style} from './Constants'
var { width, height } = Dimensions.get('window');
export default class Masbaha extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: "سبحان الله",

                },
                {
                    title: "الحمد لله",

                },
                {
                    title: "لا اله إلا الله",

                },
                {
                    title: "الله أكبر",

                },
                {
                    title: " أستغفر الله",

                }
            ],
            num: 0,
            count: 0,
            all_counter: 0,
            fontSize: 16,
            Masbaha_record: [],
            passing_counter: 0,

        }
    }
    componentDidMount() {
        this.getMasbaha(),
            this.get_record()
    }


    async store() {

        await AsyncStorage.setItem('all_counter', JSON.stringify(this.state.all_counter))
        await AsyncStorage.setItem('fontSize', JSON.stringify(this.state.fontSize))
        
    }


    async getMasbaha() {
        let all_counter = JSON.parse(await AsyncStorage.getItem('all_counter'))
        let fontSize = JSON.parse(await AsyncStorage.getItem('fontSize'))
      
        if (all_counter != null) {

            this.setState({ all_counter })

        }
        if (fontSize != null) {

            this.setState({ fontSize })

        }



        
    }


    async save_counter(Masbaha_record) {

        await AsyncStorage.setItem('Masbaha_record', JSON.stringify(Masbaha_record))

    }
    async get_record() {
        let Masbaha_record = JSON.parse(await AsyncStorage.getItem('Masbaha_record'))
        if (Masbaha_record == null) {
            Masbaha_record = this.state.Masbaha_record
        } else {
            Masbaha_record = Masbaha_record
        }
        this.setState({
            Masbaha_record
        })
    }






    async PlusFont() {
        this.setState({ fontSize: this.state.fontSize + 1 })
        this.store()
        
    }


    async MinusFun() {

        if (this.state.fontSize > 16) {
            this.setState({ fontSize: this.state.fontSize - 1 })
        }
        else {

        }
        this.store()
        
    }






    async Change() {
        let count = this.state.count
        let num = this.state.num
        count++

        if (count > 3) {
            num++
            count = 0
        } else {
            num = num
        }
        if (num == this.state.list.length) {
            num = 0
        }

       
        this.state.all_counter++
        let passing_counter = this.state.passing_counter
        passing_counter++
        this.store( )
        this.setState({
            num: num,
            count: count,
            all_counter: this.state.all_counter,
            passing_counter
        })

        
    }


    async reloud_counter() {
        let all_counter = this.state.all_counter
        all_counter = 0
        let num = this.state.num
        num = 0
        let count = this.state.count
        count = 0
        this.setState({
            all_counter,
            num,
            count,
            fontSize: 16
        })

        
        let passing_counter = this.state.passing_counter
        let Masbaha_record = this.state.Masbaha_record
        let d = new Date()
        let date = d.getDate() + "/" + (1 + d.getMonth()) + "/" + d.getFullYear()
        let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

        if(passing_counter !=0){
        let new_item = {
            number: passing_counter,
            date: date,
            time: time,
        }
        Masbaha_record.unshift(new_item)}
        this.save_counter(Masbaha_record)
        
        this.setState({
            list,
            passing_counter,
            all_counter,
            Masbaha_record,
        })

    }






    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.mainColor}/>
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

                    <Text style={Style.HeaderText}>المسبحة</Text>
                </View>

                <ScrollView style={{
                    backgroundColor:Colors.secColor,
                    flex:1
                }}>


                <View style={{
                    backgroundColor: Colors.secColor,
                    alignItems: "center",
                    flex:1
                   

                }}>

                    {
                        this.state.list.map((list, index) => (
                            <>
                                <TouchableOpacity style={[MabahaStyle.mainTouchale , {backgroundColor: (this.state.num == index) ? Colors.mainColor : Colors.secColor,}]}
                                    key={index}
                                    onPress={() => {
                                        this.setState({
                                            num: index
                                        })
                                    }}

                                >

                                    <Text style={{
                                        color: (this.state.num == index) ? Colors.secColor : Colors.mainColor,
                                        fontWeight: "bold",
                                        fontSize: this.state.fontSize

                                    }}>{list.title}</Text>

                                </TouchableOpacity>

                            </>
                        ))
                    }


                    <TouchableOpacity style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        elevation: 3,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 15,
                        backgroundColor:Colors.mainColor
                    }}

                        onPress={() => {
                            this.Change()
                        }}

                    >
                        <Text style={{
                            color: Colors.secColor,
                            fontWeight: "bold",
                            fontSize: 22,

                        }}>{this.state.count}</Text>

                    </TouchableOpacity>


                    
                </View>
                <View style={{
                        backgroundColor:Colors.secColor,
                        width: '100%',
                        height: 65,
                        marginTop: 36,
                        flexDirection: "row",
                        justifyContent: "center",
                       


                    }}>
                        <TouchableOpacity style={[MabahaStyle.BottomTouchable , {backgroundColor:Colors.mainColor}]}

                            onPress={() => {
                                this.reloud_counter()
                            }}

                        >
                            <Icon name="redo-alt" color={Colors.secColor} size={18} />
                        </TouchableOpacity>


                        <TouchableOpacity style={[MabahaStyle.BottomTouchable , {backgroundColor:Colors.secColor}]}

                            onPress={() => {
                                this.PlusFont()
                            }}

                        >
                            <Icon name="plus" color={Colors.mainColor} size={18} />
                        </TouchableOpacity>


                        <TouchableOpacity style={[MabahaStyle.BottomTouchable , {backgroundColor:Colors.mainColor}]}

                            onPress={() => {
                                this.MinusFun()
                            }}

                        >
                            <Icon name="minus" color={Colors.secColor} size={18} />
                        </TouchableOpacity>


                        <TouchableOpacity style={[MabahaStyle.BottomTouchable , {backgroundColor:Colors.secColor}]}


                        >
                            <Text style={{
                                color: Colors.mainColor,
                                fontSize: 18,
                                fontWeight: "bold"
                            }}>{this.state.all_counter}</Text>
                        </TouchableOpacity>



                    </View>


                </ScrollView>
            </>


        )
    }
}