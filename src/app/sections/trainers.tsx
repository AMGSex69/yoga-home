"use client";
import { Carousel } from "../ui/carousel";

interface TrainersProps {
	data: Array<Record<string, unknown>>;
}

export default function Trainers({ data }: TrainersProps) {
	return (
		<>
			<section className="trainers" id="trainers">
				<div className="container mx-auto mt-[90px] text-center">
					<h2 className="font-[400px] text-[42px] leading-[114%] mb-[120px]">
						Наши преподаватели помогут
						<br />
						вам поставить технику
						<br />и аккуратно вас направят
					</h2>
					<Carousel type="Card4" data={data} />
				</div>
			</section>
		</>
	);
}
