const Search = () => {
    return(
    <div className="w-full h-[50px] flex items-center justify-center">
        <div className="border-2 border-black  rounded-2xl bg-white shadow-md">
            <input
                type="text"
                placeholder="search..."
                className="outline-none px-3 bg-transparent text-gray-800 placeholder-gray-400"
            />
        </div>
    </div>
)}

export default Search;