import { Link, Outlet } from "react-router-dom"

const Customer = () => {
    return (
        <div>
            <div>
            <Link className="underline" to='/customer/customercare'>help</Link>
        </div>
        <div>
            <Outlet />
        </div>
        </div>
    )
}

export default Customer