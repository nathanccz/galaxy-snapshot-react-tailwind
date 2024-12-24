const Drawer = ({ data, dateChanger, isOpen }) => {

    let photoList

    if (data.length > 0) {
        photoList = data.map((e, i) => 
            <li key={i} className="text-xs">
                <a onClick={() => { dateChanger(e.date)}} className="flex">
                    <div className="basis-2/3">
                        {e.title} ({e.date})
                    </div>
                    <div className="basis-1/3 shrink">
                    <img src={e.url} alt={e.title} />
                    </div>
                </a>
            </li>
        )
    }

    return (
        <details className="dropdown dropdown-top" id="dropdownMenu">
            <summary className="btn btn-outline m-1 md:w-40 lg:w-48">My Saved Photos</summary>
            <ul className="menu dropdown-content rounded-box z-[1] w-52 md:w-60 lg:w-64 p-2 shadow bg-slate-700">
                {photoList ? photoList : "There's nothing here, yet."}
                {/* {photoList && <li className="btn btn-outline btn-error mt-2 w-3/4 mx-auto">Clear all</li>} */}
            </ul>
        </details>
    )
}

export default Drawer