import React from 'react'
import s from './stylePagination.module.css'
import { Button } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';



export default function pagination({ gotoNextPage, gotoPrevPage, pageNumber }) {

return (
    <div className={s.container}>
        <div className={s.pDiv}>
            {gotoPrevPage && <Button type="primary" shape="circle" onClick={gotoPrevPage}><ArrowLeftOutlined /></Button>}
        </div>
        <div className={s.pDiv}>
            <Button disabled>
                {pageNumber}
            </Button>
        </div>
        <div className={s.pDiv}>
            {gotoNextPage && <Button type="primary"  shape="circle" onClick={gotoNextPage}><ArrowRightOutlined /></Button>}
        </div>
    </div>

    )
}