"use client";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="text-[#494542]">
				<a className="mr-[20px]" href="#studio">
					Студия
				</a>
				<a className="mr-[20px]" href="#classes">
					Классы
				</a>
				<a className="mr-[20px]" href="#trainers">
					Преподаватели
				</a>
				<a className="mr-[20px]" href="#events">
					Мероприятия
				</a>
				<a className="mr-[20px]" href="#massage">
					Массаж
				</a>
				<a className="mr-[20px]" href="#rent">
					Аренда
				</a>
				<a href="#contacts">Контакты</a>
			</nav>

			<div className="navbar-toggler">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden md:hidden p-2"
				>
					<svg
						width="25"
						height="9"
						viewBox="0 0 25 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="1"
							y1="8"
							x2="24"
							y2="8"
							stroke="#494542"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<line
							x1="1"
							y1="1"
							x2="24"
							y2="1"
							stroke="#494542"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>

				{isOpen && (
					<div className="open-nav fixed top-[94px] w-full left-0 right-0 bg-[#EEE5DC] p-4 z-50 shadow-lg">
						<a className="block py-2" href="#studio">
							Студия
						</a>
						<hr></hr>
						<a className="block py-2" href="#classes">
							Классы
						</a>
						<hr></hr>
						<a className="block py-2" href="#trainers">
							Преподаватели
						</a>
						<hr></hr>
						<a className="block py-2" href="#events">
							Мероприятия
						</a>
						<hr></hr>
						<a className="block py-2" href="#massage">
							Массаж
						</a>
						<hr></hr>
						<a className="block py-2" href="#rent">
							Аренда
						</a>
						<hr></hr>
						<a className="block py-2" href="#contacts">
							Контакты
						</a>
					</div>
				)}
			</div>

			<div className="header-content_last">
				<Button
					variant="outline"
					className="flex justify-center items-center md:flex h-[40px] w-[173px]"
				>
					Записаться на йогу
				</Button>
			</div>
		</>
	);
}
