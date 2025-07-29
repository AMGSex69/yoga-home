"use client";

import { Carousel } from "../ui/carousel";

interface SubscriptionsProps {
	singleClassesData: Array<Record<string, unknown>>;
	subscriptionsData: Array<Record<string, unknown>>;
}

export default function Subscriptions({
	singleClassesData,
	subscriptionsData,
}: SubscriptionsProps) {
	return (
		<>
			<section className="one-time-subscription">
				<div className="container mx-auto mt-[120px] text-center text-[#494542]">
					<h2 className="font-[400px] text-[42px] leading-[114%]">
						Разовые абонементы Йога Хом
					</h2>
					<div className="one-tine-subscription-content mt-8">
						<Carousel type="Card5" data={singleClassesData} />
					</div>
				</div>
			</section>
			<section className="monthly-subscription">
				<div className="container mx-auto mt-[60px] text-center text-[#494542]">
					<h2 className="font-[400px] text-[42px] leading-[48px]">
						Месячные абонементы Йога Хом
					</h2>
					<div className="monthly-subscription-content mt-8">
						<Carousel type="Card6" data={subscriptionsData} />
					</div>
				</div>
			</section>
		</>
	);
}
