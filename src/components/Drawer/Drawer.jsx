const Drawer = ({ data }) => {

    let photoList

    if (data.length > 0) {
        photoList = data.map((e, i) => 
            <li key={i}><a>{e.title} ({e.date})</a></li>
        )
    }

    return (
        <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn btn-outline m-1">Saved Photos</div>
            <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-slate-800">
                {photoList ? photoList : "There's nothing here, yet."}
            </ul>
        </div>
    )
}

export default Drawer