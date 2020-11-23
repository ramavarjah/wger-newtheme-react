import React, { Component } from "react";
import { Form, DatePicker, TimePicker, Button, Select, Input } from "antd";
import {connect} from 'react-redux';
import {addWorkout}  from '../store/actions/workouts'
const { RangePicker } = DatePicker;
const { Option } = Select;

export class Workout extends Component {
  state ={
    notes:'',
  }

  handleOnChange = (event) => {
    console.log(event)    
  }

  handleDatePickerChange = (Date, dateString, id) => {
    console.log(id)
  }
 
  handleSave=(event)=>{
    event.preventDefault();
    const {notes} = this.state;
    const notesdata = {notes}; 
    this.props.addWorkout(notesdata)
    this.setState({
      notes:'',
    });
    const data = this.test
    console.log(data,'test')    
  }


  render() {
    return (
      <div style={{ position: "relative", top: 91 }}>
        <h1 className="Weight_title" style={{ textdecoration: "underline" }}>
          Weight Log
        </h1>
        <hr />
        <span style={{ position: "relative", top: 48, left: 58 }}>
          <h3>Date and Time*</h3>
          <DatePicker name="Date"  onChange={(date, dateString) => this.handleDatePickerChange(date, dateString,1)} style={{ width: 257 }} />
        </span>
        <span style={{ position: "relative", left: 412, top: -21 }}>
          <h3>General impression*</h3>
          <Select  onChange={this.handleOnChange}  style={{ width: 309, position:"relative", top: -43 }} clearIcon={true}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </span>
        <span>
          <Input 
            style={{
              height: 178,
              width: 667,
              position: "relative",
              top: 94,
              left: -252,
            }}
          ></Input>
        </span>
        <span>
        <Button onClick={this.handleSave}> Save</Button>
        </span>
      </div>
    );
  }
}

export default connect(null, {addWorkout})(Workout)