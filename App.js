import React from 'react';
import {StyleSheet, ImageBackground, SafeAreaView, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {LinearGradient} from 'expo';
import {CheckBox} from 'react-native-elements'

const Rating = () => {
    return (
        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
            <IconEntypo name='star' size={22} color='#fe3a22'/>
            <IconEntypo name='star' size={22} color='#fe3a22'/>
            <IconEntypo name='star' size={22} color='#fe3a22'/>
            <IconEntypo name='star' size={22} color='#fe3a22'/>
            <IconEntypo name='star' size={22} color='#fe3a22'/>
            <View style={{
                width: 10,
                height: 22,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                marginLeft: -11,
                zIndex: 1
            }}/>
            <Text style={{color: '#ff3b22', fontSize: 16, fontWeight: '600'}}>Rating</Text>
        </View>
    )
}

const Options = (props) => {
    const {text} = props;
    return (
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'flex-end'}}>
            <View style={{backgroundColor: '#1ed88f', padding: 3, marginRight: 15, borderRadius: 15}}>
                <Icon name="check" size={16} color="#fff"/>
            </View>
            <Text>{text.toUpperCase()}</Text>
        </View>
    )
}

const Button = (props) => {
    return (
        <TouchableOpacity style={{width: '100%', marginTop: 30, alignItems: 'center'}}>
            <LinearGradient colors={['#00f6ab', '#00ce7e']} style={{
                width: '90%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7
            }}>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>CONTINUE</Text>
                <Text style={{color: '#fff', fontWeight: '600'}}>{props.checked && 'One week for free then '} $4.99/week</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default class App extends React.Component {

    state = {
        checked: false
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('./assets/img/header.png')} style={{width: '100%', height: 300}}/>
                <ScrollView style={{marginTop: -300, padding: 0}}>
                    <View style={{
                        paddingTop: 20,
                        marginTop: 350,
                        width: '100%',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }}>
                        <Text style={{fontWeight: '500'}}>Join Millions of Happy Users</Text>
                        <Rating/>
                        <Options text='personalized training plan'/>
                        <Options text='personalized training plan'/>
                        <Options text='personalized training plan'/>
                        <Button checked={this.state.checked}/>
                        <CheckBox iconRight title='Not sure yet? Enable free trial'
                                  checked={this.state.checked}
                                  onPress={() => this.setState({checked: !this.state.checked})}
                                  containerStyle={{
                                      backgroundColor: this.state.checked ? 'rgba(0, 217, 138, 0.2)' : '#fff',
                                      width: '90%',
                                      borderRadius: 7,
                                      borderColor: this.state.checked ? 'rgba(0, 217, 138, 1)' : '#a5b1bb',
                                      height: 50
                                  }}
                                  textStyle={{color: '#00d98a'}}
                        />
                        <Text style={{color: '#a5b1bb', marginTop: 20, fontSize: 16, textDecorationLine: 'underline'}}>Restore
                            Purchases</Text>
                        <Text style={{fontSize: 12, width: '90%', marginTop: 10, color: '#9b9b9b', lineHeight: 20}}>Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere leo mattis massa maximus
                            ullamcorper sed ut purus. Nulla et pharetra felis. Fusce laoreet sodales odio, ac vehicula
                            lacus convallis efficitur. Sed quis tortor ac nisl lacinia egestas. Aliquam sollicitudin
                            accumsan ligula nec posuere. Donec imperdiet in metus a feugiat. Integer nec rhoncus nibh,
                            at vulputate justo.</Text>
                        <Text style={{fontSize: 12, width: '90%', marginTop: 10, color: '#9b9b9b', lineHeight: 20}}>Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere leo mattis massa maximus
                            ullamcorper sed ut purus. Nulla et pharetra felis. Fusce laoreet sodales odio, ac vehicula
                            lacus convallis efficitur. Sed quis tortor ac nisl lacinia egestas. Aliquam sollicitudin
                            accumsan ligula nec posuere. Donec imperdiet in metus a feugiat. Integer nec rhoncus nibh,
                            at vulputate justo.</Text>
                        <Text style={{fontSize: 12, width: '90%', marginTop: 10, color: '#9b9b9b', lineHeight: 20}}>Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere leo mattis massa maximus
                            ullamcorper sed ut purus. Nulla et pharetra felis. Fusce laoreet sodales odio, ac vehicula
                            lacus convallis efficitur. Sed quis tortor ac nisl lacinia egestas. Aliquam sollicitudin
                            accumsan ligula nec posuere. Donec imperdiet in metus a feugiat. Integer nec rhoncus nibh,
                            at vulputate justo.</Text>
                        <Text style={{fontSize: 12, width: '90%', marginTop: 10, color: '#9b9b9b', lineHeight: 20}}>Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere leo mattis massa maximus
                            ullamcorper sed ut purus. Nulla et pharetra felis. Fusce laoreet sodales odio, ac vehicula
                            lacus convallis efficitur. Sed quis tortor ac nisl lacinia egestas. Aliquam sollicitudin
                            accumsan ligula nec posuere. Donec imperdiet in metus a feugiat. Integer nec rhoncus nibh,
                            at vulputate justo.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
