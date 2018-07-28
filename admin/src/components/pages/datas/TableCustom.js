import React, { Component } from 'react';
import { Input, Form } from 'antd';
import Immutable from "immutable";
import PropsTypes from "prop-types";

const FormItem = Form.Item;
const EditableContext = React.createContext();
const Provider = EditableContext.Provider
const Consumer = EditableContext.Consumer

const EditableRow = ({ form, index, ...props }) => (
    <Provider value={form}>
        <tr {...props} />
    </Provider>
);
const EditableFormRow = Form.create()(EditableRow);
class EditableCell extends Component {
    static propTypes = {
        editable: PropsTypes.bool,
        handleSave: PropsTypes.func

    }
    state = {
        editing: false,
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            const ImmutableValue = Immutable.Map(values);
            const ImmutableRecord = Immutable.Map(record);
            handleSave(ImmutableRecord.merge(ImmutableValue).toJS());
        });
    }

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        // console.log(this.props)
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <Consumer>
                        {(form) => {
                            // console.log(this.cell)
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                                size="small"
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                        <div
                                            className="editable-cell-value-wrap"
                                            style={{ paddingRight: 24 }}
                                            onClick={this.toggleEdit}
                                        >
                                            {restProps.children}
                                        </div>
                                    )
                            );
                        }}
                    </Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

export default { EditableFormRow, EditableCell };