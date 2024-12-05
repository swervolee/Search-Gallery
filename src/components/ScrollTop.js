import React from "react";

export default function ScrollTop({ Topper }) {
    return (
        <div className="fixed bottom-10 right-5 sm:bottom-10 sm:right-5">
            <button
                id="scrollToTop"
                className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500 sm:p-3 md:p-4"
                aria-label="Scroll to top"
                onClick={Topper}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-3 sm:h-3 md:w-5 md:h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                    />
                </svg>
            </button>
        </div>
    );
}
