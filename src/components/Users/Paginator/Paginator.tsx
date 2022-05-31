import React from 'react';
import s from "./Paginator.module.css";
import {DOTS, usePagination} from "./usePagination";
import arrowLeftBlue from "../../../icons/arrowLeftBlue.png"
import arrowLeftGrey from "../../../icons/arrowLeftGrey.png"
import arrowRightBlue from "../../../icons/arrowRightBlue.png"
import arrowRightGrey from "../../../icons/arrowRightGrey.png"

type PaginatorPropsType = {
    currentPage: number
    onPageChange: (currentPage: number | string) => void
    totalCount: number
    siblingCount: number
    pageSize: number
}

export const Paginator = (props: PaginatorPropsType) => {
    const {
        currentPage,
        onPageChange,
        totalCount,
        siblingCount,
        pageSize,
    } = props

    const paginationRange: any = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    const finalPageStyle = (pageNumber: number | string) => {
        return `${s.paginationItem} ${currentPage === pageNumber && s.selectedPage}`
    }
    const finalListPagesStyle = `${s.paginationItem}  ${s.listPages}`
    const finalDotsStyle = `${s.paginationItem}  ${s.dots}`
    const range = pageSize * currentPage
    const finalListPages = totalCount === 1
        ? `${totalCount} of ${totalCount} user`
        : `${range - (pageSize - 1)}-${totalCount > 4
            ? range > totalCount ? totalCount : range
            : totalCount} 
        of ${totalCount} users`

    return (
        <div className={s.paginationContainer}>
            <div className={finalListPagesStyle}>
                {finalListPages}
            </div>
            <div className={s.pagesContainer}>
                <div className={s.paginationItem}>
                    {currentPage === 1
                        ? <img src={arrowLeftGrey} alt="prev" className={s.arrow}/>
                        : <img src={arrowLeftBlue} alt="prev" onClick={onPrevious} className={s.arrow}/>}
                </div>
                {paginationRange.map((pageNumber: number | string, i: number) => {
                    if (pageNumber === DOTS) {
                        return <span key={paginationRange[i]} className={finalDotsStyle}>{DOTS}</span>;
                    }
                    return (
                        <span key={paginationRange[i]}
                              className={finalPageStyle(pageNumber)}
                              onClick={() => onPageChange(pageNumber)}
                        >
                        {pageNumber}
                    </span>
                    );
                })}
                <div className={s.paginationItem}>
                    {currentPage === lastPage
                        ? <img src={arrowRightGrey} alt="next" className={s.arrow}/>
                        : <img src={arrowRightBlue} alt="next" onClick={onNext} className={s.arrow}/>}
                </div>
            </div>
        </div>
    );
};