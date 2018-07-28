import React, { Component } from 'react';
import http from "../../../api/api"
import TableCustom from "./TableCustom"
import { Table, Spin, Popconfirm } from 'antd';
import Immutable from "immutable";
import NewCreateTable from "./NewCreateTable"//自定义表单组件， antd 的CollectionCreateForm 组件已经集成 此功能

class EditableTable extends Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '用户Id',
            dataIndex: 'userId',

        }, {
            title: '金额(美分)',
            dataIndex: 'money',
            editable: true,
        }, {
            title: '金币',
            dataIndex: 'balance',
            editable: true,
        },
        {
            title: '返还金币',
            dataIndex: 'returnBalance',
            editable: true,
        }
            ,
        {
            title: '国家',
            dataIndex: 'currency',

        }
            ,
        {
            title: '充值流水号',
            dataIndex: 'rechargeSerialId',
        }
            , {
            title: '操作',
            dataIndex: '',
            render: (text, record) => {
                return (
                    this.state.dataSource.length > 1
                        ? (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.rechargeSerialId)}>
                                <a href="javascript:;">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state = {
            loading: false,


        };
    }
    getTableData = async () => {
        const result = await http.getRecord();
        this.setState({
            loading: true,
            dataSource: result.data,
        })

    }
    componentDidMount() {
        this.getTableData();


    }
    handleDelete = async (key) => { //删除记录 
        const dataSource = Immutable.List([...this.state.dataSource]);
        const newDataSource = dataSource.filter(item => item.rechargeSerialId !== key).toJS();
        await http.deleteExchangeRecord({ id: key });
        this.setState({ dataSource: newDataSource });
    }

    handleSave = (row) => {

    }
    render() {
        const { dataSource } = this.state;
        const { EditableFormRow, EditableCell } = TableCustom;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (

            <div>{
                !this.state.loading ? <div className="http-loading"><Spin tip="Loading..." /></div>
                    : <div>
                        <NewCreateTable style={{ marginBottom: 16 }} />
                        <Table
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            dataSource={dataSource}
                            columns={columns}
                            rowKey={(row) => {
                                return row.rechargeSerialId
                            }}
                        />
                    </div>
            }

            </div>

        );
    }
}

export default EditableTable