import React, { Component } from 'react';
import { Table, Spin, Pagination, Button, Icon } from 'antd';
import http from "../../../api/api"



class DynamicTable extends Component {
    columns = [{

        title: '用户Id',
        dataIndex: 'userId',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '金额(美分)',
        dataIndex: 'money',
    }, {
        title: '金币',
        dataIndex: 'balance',
    },
    {
        title: '反币数',
        dataIndex: 'returnBalance',
    },
    {
        title: '充值产品Id',
        dataIndex: 'paymentProductId',
    },
    {
        title: '支付类型',
        dataIndex: 'currency',
    },
    {
        title: '充值流水',
        dataIndex: 'rechargeSerialId',
    },
    {
        title: '优惠卷Id',
        dataIndex: 'couponDefineId',
    }
    ];

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },

        // getCheckboxProps: record => ({//
        //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //     name: record.name,
        // }),
    };
    rowEvent = (record) => {
        return {
            onClick: () => {
                console.log(record)
            },
            // onMouseEnter: () => {},  // 鼠标移入行
            // onXxxx...,
        }

    };
    state = {
        data: [],
        isLOading: false
    }
    getRecord = async function () {
        let result = await http.getRecord();
        this.setState({
            data: result.data,
            isLOading: true
        })
    }
    onChange = (page, pageSize) => {
        console.log(page + "___" + pageSize)
    }
    componentDidMount() {
        this.getRecord()
    }
    render() {
        return (
            <div className={!this.state.isLOading ? "http-loading" : ""}>
                {this.state.isLOading ?
                    <div><div className="title-bar">
                        <Button type="primary" size="small">
                            新建<Icon type="plus" />
                        </Button>
                    </div>
                        <Table bordered pagination={false} onRow={this.rowEvent} rowSelection={this.rowSelection} columns={this.columns} dataSource={this.state.data} />
                        <Pagination style={{ marginTop: "20px", float: "right" }} onChange={this.onChange} pageSize={20} total={20} />
                    </div>
                    : <Spin tip="Loading..." />
                }
            </div>
        );
    }
}

export default DynamicTable;