import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
      titleColor: 'black',
    };
  }

  handleButtonClick = (newMessage, newColor, newTitleColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor, titleColor: newTitleColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <TitleComponent title="Choose a Color" color={this.state.titleColor} />
        <ButtonComponent
          backgroundColor="green"
          message="Green button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#32CD32" 
          titleColor="green"
        />
        <ButtonComponent
          backgroundColor="blue"
          message="Blue button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#0000FF"
          titleColor="blue"
        />
        <ButtonComponent
          backgroundColor="brown"
          message="Brown button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#A52A2A"
          titleColor="brown"
        />
        <ButtonComponent
          backgroundColor="yellow"
          message="Yellow button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FFFF00"
          titleColor="yellow"
        />
        <ButtonComponent
          backgroundColor="red"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF6347"
          titleColor="red"
        />
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#000000"
          titleColor="black"
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange, titleColor } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange, titleColor)}
      >
        <Text style={[
            styles.buttonText,
            { color: backgroundColor === 'yellow' ? 'black' : 'white' }
          ]}>
          {message.split(' ')[0]} {}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginVertical: 10,
    width: '90%', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    marginTop: 30,
    fontSize: 20,
    color: 'gray',
  },
});

export default App;
