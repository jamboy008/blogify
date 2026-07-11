import React from 'react'
import {  Outlet} from "react-router-dom";

function PublicLayout() {
	return (
		<>
			<header></header>
			<main>
				<Outlet/>
			</main>
			<footer></footer>
		</>
	)
}

export default PublicLayout
