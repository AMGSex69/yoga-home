"use client";
import Image from "next/image";

export default function Intro() {
	return (
		<>
			<section className="intro">
				<div className="container mx-auto pt-[90px] mt-[6rem]">
					<div className="studio-content text-center text-[#494542]">
						<h2 className="font-[400px] text-2xl md:text-[42px] leading-[114%]">
							Йога хом — это дом здорового тела,{" "}
							<span className="mobile-show">вашей </span>красоты и{" "}
							<span className="desktop-show">внутреннего </span>
							<span className="mobile-show">духовного </span>роста
							<span className="desktop-show">
								, место силы, где уютно, как дома
							</span>
						</h2>
						<p className="text-lg md:text-[22px] mt-[35px] font-[400px] leading-[30px]">
							Уже 4 года мы помогаем вам обрести красивую осанку
							<br className="hidden md:block" />и здоровую спину, познать себя и свой внутренний мир,
							<br className="hidden md:block" />
							стать увереннее и счастливее
						</p>
					</div>
					<div className="hidden md:flex md:justify-center md:gap-4 lg:gap-5 mt-[91px] mb-[33px] max-w-full">
						<div className="flex-1 max-w-[300px] lg:max-w-[374px]">
							<Image
								src="/main1.jpg"
								className="rounded-[20px] w-full h-auto object-cover"
								alt="studio1"
								width={374}
								height={247}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 374px"
								style={{
									width: '100%',
									height: 'auto',
									maxWidth: '374px'
								}}
							/>
						</div>
						<div className="flex-1 max-w-[300px] lg:max-w-[374px]">
							<Image
								src="/main2.jpg"
								className="rounded-[20px] w-full h-auto object-cover"
								alt="studio2"
								width={374}
								height={247}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 374px"
								style={{
									width: '100%',
									height: 'auto',
									maxWidth: '374px'
								}}
							/>
						</div>
						<div className="flex-1 max-w-[300px] lg:max-w-[374px]">
							<Image
								src="/main3.jpg"
								className="rounded-[20px] w-full h-auto object-cover"
								alt="studio3"
								width={374}
								height={247}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 374px"
								style={{
									width: '100%',
									height: 'auto',
									maxWidth: '374px'
								}}
							/>
						</div>
					</div>
				</div>
				<div className="md:hidden flex mt-[5.7rem] h-[477px] w-full">
					<Image
						src="/main3.jpg"
						className="w-full object-cover"
						alt="main3"
						width={718}
						height={477}
					/>
				</div>
			</section>
		</>
	);
}
