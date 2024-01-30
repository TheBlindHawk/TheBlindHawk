import React, { useState } from 'react'

const NavStateContext = React.createContext<{fontSize: string}>({fontSize: "50px"})

export const useNavState = () => React.useContext(NavStateContext)

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
    const [sideNav, setSideNav] = useState<{width: string}>({width: "0%"});
    const [page, setPage] = useState<{width: string}>({width: "100%"});
    const [menu, setMenu] = useState<{display: string}>({display: "block"});
    const [titles, setTitles] = useState<{fontSize: string}>({fontSize: "50px"});

	const openNav = () => {
		setSideNav({width: "20%"});
		setPage({width: "80%"});
		setMenu({display: "none"});
		setTitles({fontSize: "40px"});
	}

	const closeNav = () => {
		setSideNav({width: "0%"});
		setPage({width: "100%"});
		setMenu({display: "block"});
		setTitles({fontSize: "50px"});
	}

    return (
		<NavStateContext.Provider value={titles}>
			<div className="sidenav" style={sideNav}>
				<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
				<a href="/" className="menulist">Home</a>
				<a href="/techno" className="menulist">Techno</a>
				<a href="/gallery" className="menulist">Gallery</a>
				<a href="/gaming" className="menulist">Gaming</a>
				<a href="/about" className="menulist">About</a>
			</div>

			<div style={{width: "80%"}}>
				<span className="menu" style={menu} onClick={openNav}>&#9776; menu
				</span>
			</div>

			<div className="page" style={page}>
				{children}
			</div>
		</NavStateContext.Provider>
    )
}