import { BsCart3 } from 'react-icons/bs'

export default function SideBar() {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className='icon' />SHOP
                </div>
                <span className='icon close-icon'></span>
            </div>
            <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <li className='icon'/> Setting
                </a>
            </li>
        </ul>
        </aside>
    )
}
