import React, { useState } from "react";

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};
	return (
		<>
			<header className="bg-white shadow-lg md:hidden">
				<div className="flex items-center justify-between p-4">
					{/* Logo */}
					<div className="flex items-center">
						<img src="path-to-logo.png" alt="Logo" className="h-8" />
					</div>

					{/* Search Bar */}
					<div className="flex-1 mx-4">
						<input
							type="text"
							placeholder="Search for Programmes and Events"
							className="w-full p-2 text-sm bg-green-100 rounded-full focus:outline-none"
						/>
					</div>

					{/* Hamburger Menu Icon */}
					<div>
						<button
							onClick={toggleDrawer}
							className="text-green-700 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Off-canvas Drawer Menu */}
				<div
					className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
						isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
				>
					<div
						className={`absolute top-0 right-0 w-3/4 max-w-xs p-4 bg-white h-full shadow-lg transform transition-transform duration-300 ${
							isDrawerOpen ? "translate-x-0" : "translate-x-full"
						}`}
					>
						<button
							onClick={toggleDrawer}
							className="mb-4 text-green-700 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Menu Items */}
						<ul>
							<li className="mb-2">
								<button className="w-full text-left text-gray-700 focus:outline-none">
									Menu Item 1
								</button>
							</li>
							<li className="mb-2">
								<button className="w-full text-left text-gray-700 focus:outline-none">
									Menu Item 2
								</button>
							</li>
							<li className="mb-2">
								<button className="w-full text-left text-gray-700 focus:outline-none">
									Menu Item 3
								</button>
							</li>
							<li className="mb-2">
								<button className="w-full text-left text-gray-700 focus:outline-none">
									Menu Item 4
								</button>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
