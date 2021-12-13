import * as React from 'react'
import {
    Text,
    View,
    StatusBar,
    Image,
} from 'react-native'

import * as Animatable from 'react-native-animatable';
var spalsh = require('../img/splash.png');

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.replace("Home");

        }, 4000);
    }

    render() {

        return (
            <>

                <StatusBar barStyle="dark-content" backgroundColor="#fff" />


                <Animatable.View
                
                animation="fadeInDown"
                
                style={{
                    backgroundColor: "#fff",
                    flex: 1,
                    alignItems: "center",
                }}>


                    <Image
                        source={spalsh}
                        resizeMode="center"
                        style={{
                            marginTop: 80
                        }}
                    />

                    <Text style={{
                        color: "#3C69AE",
                        marginTop: -100,
                        fontSize: 24,
                        fontWeight: "bold",
                        letterSpacing: 1
                    }}>
                        أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </Text>

                </Animatable.View>

            </>
        )
    }
}




