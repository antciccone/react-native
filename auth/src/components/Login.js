import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import firebase from 'firebase';
import Spinner from './common/Spinner';

class Login extends Component {
  // compononets will rerender when state changes
  state = { email: '', password: '', error: '', loading: false };

  // this returns a promis. promois is a consturct to handle async code
  onButtonPress() {
    const { email, password } = this.state
    this.setState({error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          this.setState({error: 'Authentication Failed', loading: false })
        });
    });
  }

  onLoginSuccess(){
    this.setState({email: '', password: '', error: '', loading: false })
  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner size='small' />
    } else {
     return (<Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>)
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="email@email.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email: email })}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password: password })}
            label="Password"
          />
        </CardSection>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export default Login;
