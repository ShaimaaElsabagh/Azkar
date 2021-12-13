

import * as React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  AsyncStorage
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Colors } from './Constants';
import { Style } from './Constants'
import {Do3a2Style} from'./Constants'
import { AzkarStyle } from './Constants'
var { width, height } = Dimensions.get('window');
export default class Do3a2 extends React.Component {

  constructor() {
    super()
    this.state = {
      list: [
        {
          item: "اللَّهُمَّ أنَْتَ رَبيِّ لَا إلِهََ إلَِّا أنَتَ، خَلَقْتنَيِ وَأنََا عَبدُْكَ، وَأنََا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. \nرواه البخاري (6306) عن شداد بن أوس وقد وصف النبي هذا الدعاء بأنه سيد الاستغفار."
        },
        {
          item:"اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّك أَنْتَ الْغَفُورُ الرَّحِيمُ. \nرواه البخاري (834) ومسلم (6869) عن أبي بكر."
        },
        {
          item:"اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ.\nرواه مسلم (6750) عن عبد الله بن عمرو."
        },
        {
          item:"اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ. \nرواه مسلم (1090) عن عائشة."
        },
        {
          item:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ. \nرواه البخاري (6347) ومسلم (6877) عن أبي هريرة."
        }
      ],
      new_do3a2: "",
      alertView: false,

    }
  }





   remove(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list })
    this.store(list)

  }





  add_new_do3a2() {
    let list = this.state.list;
    if (this.state.new_do3a2 != "") {
      let newObj = {
        item: this.state.new_do3a2
      }
      list.unshift(newObj)
    } else {
      null
    }


    this.setState({
      list,
      new_do3a2: "",
      alertView: false
    })

    this.store(list)

  }


  async componentDidMount() {
    this.getDo3a2();
  }


  async getDo3a2() {
    let arr = await AsyncStorage.getItem("do3a2")
    arr = JSON.parse(arr)


    if (arr == null) {
      arr = this.state.list
    }
    
    else{
      arr=arr
    }

    this.setState({ list: arr })

  }



  async store(arr) {
    await AsyncStorage.setItem("do3a2", JSON.stringify(arr))

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

          <Text style={Style.HeaderText}>الادعية</Text>
        </View>

        <ScrollView style={{
          backgroundColor:  Colors.secColor,
          flex: 1,

        }}>
          <View style={{
            alignItems: "center"
          }}>

            {
              this.state.list.map((list, index) => (
                <>

                  <TouchableOpacity style={Do3a2Style.mainTouchale}
                    key={index}

                    onLongPress={() => {
                      this.remove(index)
                    }}
                  >
                    <Text style={AzkarStyle.TextStyle}>{list.item}</Text>

                  </TouchableOpacity>
                </>
              ))
            }




            <TouchableOpacity style={{
              width: 130,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              elevation: 4,
              marginBottom: 30,
              backgroundColor:Colors.mainColor

            }}

              onPress={() => {
                this.setState({
                  alertView: true
                })
              }}

            >

              <Text style={{
                color:  Colors.secColor,
                fontSize: 16,

              }}>اضافة دعاء جديد</Text>

            </TouchableOpacity>
          </View>
        </ScrollView>


        {
          this.state.alertView ? (
            <>

              <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: "rgba(0,0,0,0.5)",

                position: 'absolute',
              }}>

                <View style={{
                  width: width,
                  height: height
                }}>
                  <Animatable.View
                    animation="fadeIn"
                    style={{
                      width: '70%',
                      height: '30%',
                      backgroundColor:  Colors.secColor,
                      alignSelf: 'center',
                      marginTop: "55%",
                      borderRadius: 20,
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.23,
                      shadowRadius: 2.62,
                      elevation: 4,
                    }}>





                    <Text
                      style={{
                        color: "#211E1E",
                        textAlign: "center",
                        marginTop: width * 0.07,
                        fontSize: 18,
                        fontWeight: "bold"
                      }}>
                      اضافة دعاء
                    </Text>



                    <TextInput

                      value={this.state.new_do3a2}
                      onChangeText={(value) => {
                        this.setState({ new_do3a2: value })
                      }}

                      placeholder="اكتب الدعاء.."
                      placeholderTextColor="#999"
                      multiline

                      style={AzkarStyle.TextinputStyle}
                       

                    />


                    <View style={{
                      width: '90%',
                      height: width * 0.15,
                      alignSelf: 'center',
                      marginTop: 18,
                      flexDirection: 'row',
                      justifyContent:"space-around"
                    }}>

                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ alertView: false })
                        }}


                        style={AzkarStyle.AlertTouchable}
                      >



                        <Text style={{
                          color:  Colors.secColor,
                          fontSize: 17,
                          textAlign: "center",
                          fontWeight: "normal"
                        }}>الغاء
                        </Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={() => {
                          this.add_new_do3a2()
                        }}


                        style={AzkarStyle.AlertTouchable}
                      >



                        <Text style={{
                          color:  Colors.secColor,
                          fontSize: 17,
                          textAlign: "center",
                          fontWeight: "normal"
                        }}>حفظ
                        </Text>
                      </TouchableOpacity>

                    </View>

                  </Animatable.View>
                </View>
              </View>

            </>
          ) : null
        }
      </>

    )
  }
}

