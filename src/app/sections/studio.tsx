"use client";
import { Carousel } from "../ui/carousel";

interface StudioProps {
	studioData: Array<Record<string, unknown>>;
}

export default function Studio({ studioData }: StudioProps) {
	return (
		<>
			<section className="studio" id="studio">
				<div className="container mx-auto mt-[79px]">
					<div className="studio-content text-center text-[#494542]">
						<h2 className="font-[400px] text-2xl md:text-[42px] leading-[114%]">
							Йога проходит в уютном,
							<br />
							светлом пространстве студии
						</h2>
						<p className="text-lg md:text-[22px] mt-[30px] font-[400px] leading-[30px]">
							Здесь вы соединитесь с собой, выполняя дыхательные
							<br className="hidden md:block" />и двигательные практики, получая истинное
							<br className="hidden md:block" />
							удовольствие от процесса познания вашего тела
						</p>
					</div>
					<div className="carousel w-full mx-auto pt-[60px] md:pt-[107px]">
						<Carousel type="Card2" data={studioData} />
					</div>
				</div>
			</section>
		</>
	);
}
