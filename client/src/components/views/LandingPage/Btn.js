import React from 'react'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Btn() {
    
    return (
        <>
            <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
        </>
    )
}

export default Btn
