import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
export default EmployeeCreate
