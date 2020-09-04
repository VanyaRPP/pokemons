import React from 'react'
import s from './stylePagination.module.css'



export default function pagination({ gotoNextPage, gotoPrevPage, pageNumber }) {

return (
    <div className={s.container}>
        <div className={s.pDiv}>
            {gotoPrevPage && <button  onClick={gotoPrevPage}>Prev</button>}
        </div>
        <div className={s.pDiv}>
            {pageNumber}
        </div>
        <div className={s.pDiv}>
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    </div>

    )
}