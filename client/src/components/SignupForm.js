
import React from 'react';
import { Form, Icon, Input, Button, Upload } from 'antd';
const FormItem = Form.Item;

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.uploadedFile = '';
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('----------------', this.props);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      values['file'] = this.uploadedFile;
      this.props.handleSubmit(values);
    });

  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      beforeUpload: (file) => {
        // this.props.beforeUpload(file);
        this.uploadedFile = file;
        return false;
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload Image
              </Button>
          </Upload>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Signup
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignupForm);

export default WrappedNormalLoginForm;