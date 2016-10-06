import React from 'react';
import { IndexLink, Link } from "react-router";

const Navbar = () => {
	const pages = [
		'French',
		'German',
		'Japanese',
		'Spanish'
	];

	return(
		<ul>
			<li><IndexLink to='/'>Home</IndexLink></li>

			{/* Simple map function to show I'm up to date with es6 functions */}
			{ pages.map((lang, i) => (
				<li key={i}><Link to={lang}>{lang}</Link></li>))
			}
		</ul>
	);
}

export default Navbar;
