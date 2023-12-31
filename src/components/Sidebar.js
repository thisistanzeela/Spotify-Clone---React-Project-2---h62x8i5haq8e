import React from 'react'
import logo from "../img/logo.svg"
import { Icon } from "../Icons"
import Menu from "./Sidebar/Menu"
import { Link } from "react-router-dom";

function Sidebar() {

	// const sidebar = useSelector(state => state.player.sidebar)

	return (
		<aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">

			<a href="#" className="mb-7 px-6">
				<img src={logo} alt="" className="h-10"/>
			</a>

			<Menu />

			<nav className="mt-6">
				<ul>
					<Link to="/playlist" >
					<li>
						<a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
							<span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
								<Icon name="heartFilled" size={12} />
							</span>
							Playlist
						</a>
					</li>
					</Link>
				</ul>
			</nav>


			{/* {sidebar && <SidebarCover />}/ */}

		</aside>
	)
}

export default Sidebar
