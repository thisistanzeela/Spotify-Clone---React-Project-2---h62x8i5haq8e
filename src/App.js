import React from 'react'
import Sidebar from '../src/components/Sidebar'
import BottomBar from '../src/components/BottomBar'
import Content from '../src/components/Content'
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Sidebar/>
				<Content/>
			</div>
			<BottomBar/>
		</Router>
	);
}

export default App;
