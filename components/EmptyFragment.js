import React from "react";
import {Text, View} from "react-native";


export default class EmptyFragment extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <View style={this.props.style}>
                <Text>Empty fragment</Text>
            </View>
        );
    }
}