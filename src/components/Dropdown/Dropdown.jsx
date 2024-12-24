const Drawer = ({ data, dateChanger, isOpen }) => {

    let photoList

    if (data.length > 0) {
        photoList = data.map((e, i) => 
            <li key={i} className="text-xs">
                <a onClick={() => { dateChanger(e.date)}}>{e.title} ({e.date})
                    <img src={e.url} alt={e.title} />
                </a>
            </li>
        )
    }

    return (
        <details className="dropdown dropdown-top" id="dropdownMenu">
            <summary className="btn btn-outline m-1 md:w-40 lg:w-48">Saved Photos</summary>
            <ul className="menu dropdown-content rounded-box z-[1] w-52 md:w-60 lg:w-64 p-2 shadow bg-slate-700">
                {photoList ? photoList : "There's nothing here, yet."}
            </ul>
        </details>
    )
}

export default Drawer