
import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends Component {

  displayPicker(){
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return days.map((day) => <Picker.Item label={day} value={day}/>)
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input label='name'
            placeholder='anthony'
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}/>
        </CardSection>

        <CardSection>
          <Input label='phone'
            placeholder='12345'
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}/>
        </CardSection>

        <CardSection test={{flexDirection: 'column'}}>
          <Text style={styles.picker}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
          >
            {this.displayPicker()}
          </Picker>
        </CardSection>

      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

const styles = {
  picker: {
    fontSize: 18,
    paddingLeft: 20
  }
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)
