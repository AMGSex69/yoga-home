"use client";

import { useRef, useEffect, useState } from "react";
import Card, { CardData } from "./card";

type CarouselType = "Card1" | "Card2" | "Card3" | "Card4" | "Card5" | "Card6" | "Card7";

type CarouselProps = {
	type: CarouselType;
	data?: CardData[];
};

export function Carousel({ type, data }: CarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const scrollContainer = useRef<HTMLDivElement>(null);
	const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
	const [apiData, setApiData] = useState<Record<CarouselType, CardData[]>>({
		Card1: [],
		Card2: [],
		Card3: [],
		Card4: [],
		Card5: [],
		Card6: [],
		Card7: [],
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Загружаем данные только если не переданы через props
		if (!data) {
			setLoading(true);

			const fetchData = async () => {
				try {
					const endpoints = [
						"/api/classes",
						"/api/studio",
						"/api/events",
						"/api/trainers",
						"/api/single-classes",
						"/api/subscriptions",
					];

					const responses = await Promise.all(
						endpoints.map((endpoint) => fetch(endpoint))
					);

					const responseData = await Promise.all(
						responses.map((res) => res.json())
					);

					setApiData({
						Card1: responseData[0],
						Card2: responseData[1],
						Card3: responseData[2],
						Card4: responseData[3],
						Card5: responseData[4],
						Card6: responseData[5],
						Card7: responseData[6],
					});
				} catch (error) {
					console.error("Failed to fetch data:", error);
				} finally {
					setLoading(false);
				}
			};

			fetchData();
		}
	}, [type, data]);

	const getData = (): CardData[] => {
		// Используем переданные данные если они есть
		if (data) return data;

		// Используем данные из состояния API
		return apiData[type] || [];
	};

	const scrollToSlide = (index: number) => {
		slideRefs.current[index]?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
		setActiveIndex(index);
	};

	const nextSlide = () => {
		const currentData = getData();
		const nextIndex = (activeIndex + 1) % currentData.length;
		scrollToSlide(nextIndex);
	};

	const prevSlide = () => {
		const currentData = getData();
		const prevIndex = activeIndex === 0 ? currentData.length - 1 : activeIndex - 1;
		scrollToSlide(prevIndex);
	};

	useEffect(() => {
		// Перемещаем getData внутрь useEffect, чтобы избежать проблем с зависимостями
		const getCurrentData = (): CardData[] => {
			if (data) return data;
			return apiData[type] || [];
		};

		const currentData = getCurrentData();
		slideRefs.current = slideRefs.current.slice(0, currentData.length);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = slideRefs.current.indexOf(
							entry.target as HTMLDivElement
						);
						if (index !== -1) setActiveIndex(index);
					}
				});
			},
			{
				root: scrollContainer.current,
				threshold: 0.6,
			}
		);

		slideRefs.current.forEach((slide) => {
			if (slide) observer.observe(slide);
		});

		return () => observer.disconnect();
	}, [type, apiData, data]);

	const getCardWidth = () => {
		switch (type) {
			case "Card1":
				return "w-[373px]";
			case "Card2":
				return "w-[90vw] sm:w-[360px]";
			case "Card3":
				return "w-[266px] sm:w-[360px]";
			case "Card4":
				return "w-[266px] sm:w-[360px]";
			case "Card5":
				return "w-[90vw] sm:w-[360px]";
			case "Card6":
				return "w-[90vw] sm:w-[360px]";
			case "Card7":
				return "h-[14.07rem]";
			default:
				return "w-[90vw] sm:w-[360px]";
		}
	};

	if (loading && !data) {
		return (
			<div className="relative group px-4">
				<div className="flex gap-4 pb-4">
					{[...Array(3)].map((_, index) => (
						<div
							key={`loading-${index}`}
							className={`snap-center flex-shrink-0 ${getCardWidth()} h-48 bg-gray-200 animate-pulse rounded-lg`}
						/>
					))}
				</div>
			</div>
		);
	}

	const currentData = getData();

	return (
		<div className="relative group">
			{/* Навигационные кнопки для десктопа */}
			{currentData.length > 1 && (
				<>
					<button
						onClick={prevSlide}
						className={`absolute -left-2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 hidden md:block ${type === "Card2" ? "top-[175px] -translate-y-1/2" :
							type === "Card3" ? "top-[179px] -translate-y-1/2" :
								"top-1/2 -translate-y-1/2"
							}`}
						aria-label="Previous slide"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 18L9 12L15 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<button
						onClick={nextSlide}
						className={`absolute -right-2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 hidden md:block ${type === "Card2" ? "top-[175px] -translate-y-1/2" :
							type === "Card3" ? "top-[179px] -translate-y-1/2" :
								"top-1/2 -translate-y-1/2"
							}`}
						aria-label="Next slide"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 18L15 12L9 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</>
			)}

			<div
				ref={scrollContainer}
				className="flex gap-4 pb-4 overflow-x-auto snap-x scroll-smooth scrollbar-hide items-stretch"
			>
				{currentData.map((item, index) => (
					<div
						ref={(el) => {
							slideRefs.current[index] = el;
						}}
						key={`${type}-${index}`}
						className={`snap-center flex-shrink-0 ${getCardWidth()}`}
					>
						<Card
							type={type}
							data={{ ...item, className: item.className || "" }}
						/>
					</div>
				))}
			</div>

			{/* Индикаторы для всех разрешений */}
			{currentData.length > 1 && (
				<div className="flex justify-center gap-2 mt-4">
					{currentData.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? "bg-black" : "bg-gray-300"
								}`}
							onClick={() => scrollToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
