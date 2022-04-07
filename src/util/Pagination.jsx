import React, { useState } from "react";

const usePagination = ( list, itemsPerPage ) => {

    const [ pageLimit, setPageLimit ] = useState(4);
  	const [ currentPage, setCurrentPage ] = useState(1);
  	const pagesCreated = Math.ceil( list.length / itemsPerPage );

	const nextGrp = () => setCurrentPage(currentPage => Math.min(currentPage + pageLimit, pagesCreated));

	const prevGrp = () => setCurrentPage(currentPage => Math.max(currentPage - pageLimit, 1));	

	const next = () => setCurrentPage(currentPage => Math.min(currentPage + 1, pagesCreated));

	const prev = () => setCurrentPage(currentPage => Math.max(currentPage - 1, 1));

	const pageChange = (page) => {
		const pageNumber = Math.max(1, page);
		setCurrentPage(currentPage => Math.min(pageNumber, pagesCreated));
	}

	const getPaginationGroup = () => {
		if( pagesCreated > 5 ){
			if( pagesCreated % pageLimit === 0 ){
				let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
				return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
			}else{
				setPageLimit( pagesCreated % 4);
				let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
				return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
			}
		}else{
				return new Array(pagesCreated).fill().map((_, idx) => idx + 1);
		}
	};
 
	const pageData = () => {
		const begin = ( currentPage - 1 ) * itemsPerPage;
		const end = begin + itemsPerPage;
		return list.slice(begin, end);
	}

  	return { getPaginationGroup, next, prev, nextGrp, prevGrp, pageChange, pageData, currentPage, pagesCreated };
}

export { usePagination };
