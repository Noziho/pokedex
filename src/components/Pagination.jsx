import React from 'react'

const Pagination = ({totalItem, itemPerPage, setCurrentPage}) => {
    let pages = [];

    for (let i = 1; i<=Math.ceil(totalItem/itemPerPage); i++){
        pages.push(i);
    }
    return (
        <div className={'paginationContainer'}>
            {pages.map((page, index) => {
                return <button className={'buttonContainer'} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>
    )
}
export default Pagination
