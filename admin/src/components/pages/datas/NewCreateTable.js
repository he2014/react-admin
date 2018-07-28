import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import TableForm from "./TableForm"
import http from "../../../api/api"

class NewCreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmLoading: false,
            visible: false,

            tableItemData: {
                userId: {
                    value: ""
                },
                money: {
                    value: ""
                },
                balance: {
                    value: ""
                },
                returnBalance: {
                    value: ""
                }
            }
        }
        this.tableData = {}
    }


    submitData = async (data) => {
        await http.submitTable(data);
        this.setState({
            visible: false,
            confirmLoading: false,
        });
        this.tableData = {};
    }
    handleOk = () => {
        if (this.tableData.userId && this.tableData.userId && this.tableData.balance && this.tableData.returnBalance) {
            this.setState({
                confirmLoading: true,
            });
            this.submitData(this.tableData);
        }

    }
    showModal = () => {
        this.setState({
            visible: true,
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    handleFormChange = (changedFields, key) => {
        this.tableData[key[0]] = changedFields.value;

    }
    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal} size="small" style={this.props.style}>新建</Button>
                <Modal title="新建"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <TableForm onChange={this.handleFormChange} {...this.state.tableItemData} />
                </Modal>
            </div>
        );
    }

}

export default NewCreateTable;