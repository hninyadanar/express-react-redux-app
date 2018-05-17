
import React from 'react';
import { Form, Icon, Input, Button, Upload, Radio, DatePicker } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class EditForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Male',
        }
        this.uploadedFile = '';
    }

    // componentWillMount() {
    //     this.props.form.setFields({
    //         username: {
    //             value: this.props.info.username
    //         },
    //     });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('----------------', this.props);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            values['file'] = this.uploadedFile;
            values['birthday'] = moment(values['birthday']).format('YYYY-MM-DD');
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
        console.log("USERNAME");
        console.log(this.props.info.username);

        return (

            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} defaultValue="Hello User" />} />
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select gender!' }],
                    })(
                        <RadioGroup>
                            <Radio value="Male">Male</Radio>
                            <Radio value="Female">Female</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('birthday', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <DatePicker />
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
                        Save
          </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(EditForm);

export default WrappedNormalLoginForm;