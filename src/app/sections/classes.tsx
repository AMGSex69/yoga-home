"use client";
import { Button } from "../ui/button";
import { Carousel } from "../ui/carousel";

interface ClassesProps {
	classesData: Array<Record<string, unknown>>;
}

export default function Classes({ classesData }: ClassesProps) {
	return (
		<>
			<section className="classes py-12 md:pt-[88px]" id="classes">
				<div className="container mx-auto">
					<div className="text-center mb-8 md:mb-[101px]">
						<h2 className="text-2xl md:text-[42px] md:text-center text-left">
							Выбери одно или несколько<span> </span>
							<span className="md:hidden inline">из 10 </span>
							направлений йоги себе по душе
						</h2>
						<p className="mt-4 md:mt-[35px] text-lg md:text-[22px]">
							Соединитесь со своим телом и душой, войдя
							<br />в состояние умиротворения и спокойствия с помощью
							<br />
							авторских техник преподавателей нашей студии
						</p>
					</div>
					<div className="md:hidden flex flex-col gap-4 mt-8 mb-[5.75rem]">
						<Button variant="solid" className="w-[18rem]" onClick={() => window.open('https://n1140972.yclients.com', '_blank')}>
							Перейти к расписанию
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
						<Button variant="outline" className="w-[16.1rem]" onClick={() => document.getElementById('subscriptions')?.scrollIntoView({ behavior: 'smooth' })}>
							Наши абонементы
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
									fill="#494542"
								/>
							</svg>
						</Button>
					</div>
					<div className="carousel">
						<Carousel type="Card1" data={classesData} />
					</div>
					<div className="hidden md:flex flex-col md:flex-row gap-4 mt-8 md:mt-[40px]">
						<Button variant="solid" className="w-full md:w-[228px]" onClick={() => window.open('https://n1140972.yclients.com', '_blank')}>
							Перейти к расписанию
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
						<Button variant="outline" className="w-full md:w-[228px]" onClick={() => document.getElementById('subscriptions')?.scrollIntoView({ behavior: 'smooth' })}>
							Наши абонементы
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
									fill="#494542"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
