"use client";
import Navbar from "../components/navbar";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Main() {
	return (
		<>
			<header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#EEE5DC]">
				<div className="container mx-auto">
					<div className="header-content flex justify-between items-center h-[94px]">
						<a href="#main">
							<Image
								className="header-content_logo"
								src="/logo.png"
								alt="logo"
								quality={100}
								width={56}
								height={42}
								style={{ width: 'auto', height: 'auto' }}
							></Image>
						</a>
						<Navbar />
					</div>
				</div>
			</header>
			<main
				className="main-page relative rounded-[20px] pt-[6.7rem] md:pt-[8.57rem]"
				id="main"
			>
				<div className="container mx-auto">
					<div className="main-content">
						<div className="main-text">
							<h2 className="text-3rem sm:text-3xl md:text-[42px] leading-tight">
								Добро пожаловать в Йога Хом, место силы и спокойствия
							</h2>
						</div>
						<div className="main-buttons flex flex-col md:flex-row gap-4 mt-[40px] mb-[61px]">
							<Button
								variant="solid"
								className="main-button1 flex justify-center items-center w-full h-[2.85rem] md:w-[211px]"
								onClick={() => window.open('https://n1140972.yclients.com', '_blank')}
							>
								Записаться на йогу
								<svg
									className="ml-[14px]"
									width="23"
									height="7"
									viewBox="0 0 23 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.2999 3.5587C22.4607 3.39792 22.4607 3.13724 22.2999 2.97646L19.6798 0.35635C19.519 0.195568 19.2583 0.195568 19.0976 0.35635C18.9368 0.517133 18.9368 0.777813 19.0976 0.938596L21.4265 3.26758L19.0976 5.59656C18.9368 5.75735 18.9368 6.01803 19.0976 6.17881C19.2583 6.33959 19.519 6.33959 19.6798 6.17881L22.2999 3.5587ZM-3.59928e-08 3.67929L22.0088 3.67929L22.0088 2.85587L3.59928e-08 2.85587L-3.59928e-08 3.67929Z"
										fill="#EEE5DC"
									/>
								</svg>
							</Button>
							<Button
								variant="outline"
								className="main-button2 flex justify-center items-center w-full md:w-[228px]"
								onClick={() => window.open('https://wa.me/79180161192', '_blank')}
							>
								Проконсультироваться
								<svg
									className="ml-[10px]"
									width="23"
									height="7"
									viewBox="0 0 23 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.2999 3.62023C22.4607 3.45944 22.4607 3.19876 22.2999 3.03798L19.6798 0.417874C19.519 0.257091 19.2583 0.257091 19.0976 0.417874C18.9368 0.578656 18.9368 0.839337 19.0976 1.00012L21.4265 3.3291L19.0976 5.65809C18.9368 5.81887 18.9368 6.07955 19.0976 6.24033C19.2583 6.40112 19.519 6.40112 19.6798 6.24033L22.2999 3.62023ZM-3.59928e-08 3.74081L22.0088 3.74081L22.0088 2.91739L3.59928e-08 2.91739L-3.59928e-08 3.74081Z"
										fill="#494542"
									/>
								</svg>
							</Button>
						</div>
						<div className="relative main-img lg:w-[1200px]">
							<Image
								src="/main.jpg"
								alt="group"
								width={1200}
								height={511}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
								style={{
									width: '100%',
									height: 'auto',
								}}
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
