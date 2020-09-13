import React from 'react'

export const PokeSearch = () => {
    return (
        <Search
            placeholder="Search Pokemon"
            onSearch={()=>(
                value => setSearch(value),
                Search!==''?
                gotoAllPage()
                :
                setCurrentPageUrl(currentPageUrl)
            )
            }
            onChange={e =>(
                setSearch(e.target.value)
            )}
        />
    )
}
