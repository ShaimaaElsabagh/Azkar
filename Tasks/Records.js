import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading } from 'native-base';
import { Text, View, StatusBar, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Record_Masbaha from './Record_Masbaha';
import Record_Azkar from './Record_Azkar';
import { Colors } from './Constants';
import { Style } from './Constants'

export default class Records extends Component {
    render() {
        return (
            <Container>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.mainColor} />

                <Tabs >
                    <Tab
                        heading={<TabHeading
                             style={{
                            backgroundColor: Colors.mainColor
                        }}>
                            <Icon name="tasks" size={18} color={Colors.secColor}
                             style={{
                                marginRight: 8
                            }} />


                            <Text style={{
                                color: Colors.secColor,
                                fontSize: 18
                            }}>سجل المسبحة</Text>

                        </TabHeading>
                        }>

                        <Record_Azkar />

                    </Tab>




                    <Tab 
                    heading={<TabHeading 
                        style={{
                        backgroundColor: Colors.mainColor
                    }}>
                        <Icon name="tasks" size={18} color={Colors.secColor}
                        style={{
                            marginRight: 8
                        }} />

                        <Text style={{
                            color: Colors.secColor,
                            fontSize: 18
                        }}>سجل الاذكار</Text>

                    </TabHeading>}>

                        <Record_Masbaha/>

                    </Tab>
                </Tabs>
            </Container>
        );
    }
}