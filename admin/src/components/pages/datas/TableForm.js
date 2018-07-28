import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};



const TableForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields[Object.keys(changedFields)[0]], Object.keys(changedFields));
    },
    mapPropsToFields(props) {
        return {
            formDatas: Form.createFormField({
                userId: {
                    ...props.userId,
                    value: props.userId.value,
                },
                money: {
                    ...props.money,
                    value: props.money.value,
                },
                balance: {
                    ...props.balance,
                    value: props.balance.value,
                },
                returnBalance: {
                    ...props.returnBalance,
                    value: props.returnBalance.value,
                }

            }),
        };
    },
    onValuesChange(props, values) {//返回每次输入框改变后的值
        // props.onChange({ ...values });
    },
})((props) => {
    const { getFieldDecorator } = props.form;
    return (
        <Form >
            <FormItem {...formItemLayout} label="用户Id" >
                {getFieldDecorator('userId', {
                    rules: [{
                        required: true,
                        message: 'Please input your userId',
                    }],
                })(
                    <Input placeholder="Please input your userId" />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="金额(美分)">
                {getFieldDecorator('money', {
                    rules: [{
                        required: true,
                        message: 'Please input your money',
                    }],
                })(
                    <Input placeholder="Please input your money" />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="金币">
                {getFieldDecorator('balance', {
                    rules: [{
                        required: true,
                        message: 'Please input your balance',
                    }],
                })(
                    <Input placeholder="Please input your balance" />
                )}
            </FormItem>
            <FormItem {...formItemLayout} label="返还金币">
                {getFieldDecorator('returnBalance', {
                    rules: [{
                        required: true,
                        message: 'Please input your returnBalance',
                    }],
                })(
                    <Input placeholder="Please input your returnBalance" />
                )}
            </FormItem>
        </Form>
    );
});


export default TableForm;