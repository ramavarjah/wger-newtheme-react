import React from 'react';
/* eslint-disable */
import { Modal, Button, Checkbox, Row, Col } from 'antd';

import { Link } from 'react-router-dom';
import { Input } from 'antd'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
// export const WeightLogModal = () => {
//   const [show, setshow] = useState(true);

//   const showModal = () => {

//   }

// };

/* eslint-disable */

export class WeightLogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

// Check Box function


  render() {
    return (
      <>
        <Button
          style={{ position: 'relative', top: -404, left: 34, width: 320 }}
          type="primary"
          onClick={this.showModal}
        >
          Open Modal
        </Button>
        <Modal
          title="Add Weight Log"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {/* <Checkbox.Group style={{ width: '100%' }} onChange={onChange}> */}
            <Row>
            
                <Checkbox value="A">Sunday</Checkbox>
              </Row>
            
              <Row>
            
            <Checkbox value="A">Monday</Checkbox>
          </Row>

          <Row>
            
            <Checkbox value="A">Tuesday</Checkbox>
          </Row>
          <Row>
            
            <Checkbox value="A">Wednesday</Checkbox>
          </Row>
          <Row>
            
            <Checkbox value="A">Thursday</Checkbox>
          </Row>
          <Row>
            
            <Checkbox value="A">Friday</Checkbox>
          </Row>
          <Row>
            
            <Checkbox value="A">Saturday</Checkbox>
          </Row>
          <Row>
            
            <Checkbox value="A">Sunday</Checkbox>
          </Row>

          <Row>
              <h4>Description</h4>
              <Input style={{height:110}}></Input>
          </Row>
                          

        </Modal>
      </>
    );
  }
}
export default WeightLogModal;
