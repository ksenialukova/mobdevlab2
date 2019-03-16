import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputFragment from './components/InputFragment';
import OutputFragment from './components/OutputFragment'
import EmptyFragment from './components/EmptyFragment'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      output: ''
    }
  }

  handlePress = (output) =>{
    this.setState({output: output})
  };

  render() {
    let fragment;

    if(this.state.output !== ''){
      fragment = <OutputFragment style={styles.container} output={this.state.output} />
    }else{
      fragment = <EmptyFragment style={styles.container}/>
    }

    return (
        <React.Fragment>
          <InputFragment style={styles.container} handleState={this.handlePress}/>
          {fragment}
        </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
