import React from "react";


export default function ScrollTop({Topper}) {
    return (
        <div class="fixed bottom-20 right-5">
            <button
                id="scrollToTop"
                class="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
                aria-label="Scroll to top"
                onClick={Topper}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>

    )
}