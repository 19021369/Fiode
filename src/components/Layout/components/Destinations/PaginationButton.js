import React from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

function PaginationButton({setCurrentPage, currentPage, totalPages}) {
    const handlePageClick= ({selected}) => {
        setCurrentPage(selected);
    }
    const PaginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 1,
            },
        },
    };
    return (
        <motion.div
            variants={PaginationVariants}
            initial="hidden"
            animate="visible"
        >
            <ReactPaginate
                breakLabel={<span className="mr-4">...</span>}
                nextLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
                        <BsChevronRight />
                    </span>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={20}
                previousLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
                        <BsChevronLeft />
                    </span>
                }
                containerClassName="flex items-center justify-center mt-8 mb-4"
                pageClassName="block border-solid border-lightGray hover:bg-gray-300 w-10 h-10 flex items-center justify-center rounded-md"
                activeClassName="bg-purple-600 text-white"
            />
        </motion.div>
    );
}

export default PaginationButton;
