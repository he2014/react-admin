import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="threeD">
                欢迎使用 FISSION 后台管理系统

                <style>
                    {`
                        
                        .threeD{ 
                            color:#fff;  
                            font-size: 40px;
                            text-shadow: 0 0 1px #999, 
                            1px 1px 2px #888, 
                            2px 2px 2px #777, 
                            3px 3px 2px #666, 
                            4px 4px 2px #555, 
                            5px 5px 2px #333;
}
                        `}

                </style>
            </div>

        );
    }
}

export default Home;