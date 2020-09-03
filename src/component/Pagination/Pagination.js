import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
return (
        <div>
            {gotoPrevPage && <button  onClick={gotoPrevPage}onClick={console.log('click')}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}onClick={console.log('click')}>Next</button>}
        </div>
    )
}