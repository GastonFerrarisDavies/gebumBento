export function Horarios () {
    return (
        <div className="col-span-1 row-span-1 bg-white p-0 m-0 rounded-md shadow flex flex-col justify-center items-center">
            <svg className="p-0 m-0 fill-[#131313]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32">
                <path path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z"></path>
            </svg>
            <div className="p-2 font-bold flex flex-col text-[#131313] justify-center items-center">
                <p className="text-[10px]" >Miércoles a Domingos</p>
                <p className="text-[10px]" >19:30 a 23:30</p>
            </div>
        </div>
    )
}