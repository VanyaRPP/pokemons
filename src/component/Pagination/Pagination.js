import React from 'react'
import { Button } from 'antd';

export default function pagination({ gotoNextPage, gotoPrevPage }) {
return (
        <div>
            {gotoPrevPage && <Button type="primary" shape="circle" onClick={gotoPrevPage}>Previous</Button>}
            {gotoNextPage && <Button type="primary" shape="circle" onClick={gotoNextPage}>Next</Button>}
        </div>
    )
}