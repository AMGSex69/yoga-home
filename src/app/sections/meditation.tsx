"use client";

import Image from "next/image";

export default function Meditation() {
	return (
		<>
			<section className="meditation" id="massage">
				<div className="container mx-auto mt-[120px] text-[#494542]">
					<div className="flex flex-col md:flex-row items-start gap-8">
						{/* Десктопная версия текста */}
						<div className="hidden md:block content flex-1 text-left">
							<h2 className="font-[400px] text-[42px] leading-[48px]">
								Посетите практики <br />
								гвоздестояния и медитаций <br />с поющими чашами
							</h2>
							<p className="text-[22px] mt-[35px]">
								Восстановите внутренний покой и гармонию, <br />
								снимите напряжение и усталость с помощью <br />
								звуковых медитаций и гвоздестояния. <br />
								Практики проводятся мастерами, <br />в индивидуальном формате и
								мини-группах.
							</p>
						</div>

						{/* Мобильная версия текста */}
						<div className="md:hidden text-center mb-8">
							<h2 className="font-[400px] text-[32px] leading-[48px]">
								Посетите практики <br />
								гвоздестояния и медитаций <br />с поющими чашами
							</h2>
							<p className="text-[18px] mt-[35px]">
								Восстановите внутренний покой и гармонию, <br />
								снимите напряжение и усталость с помощью <br />
								звуковых медитаций и гвоздестояния. <br />
								Практики проводятся мастерами, <br />в индивидуальном формате и
								мини-группах.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Image
								src={"/nails.jpg"}
								alt={"nails"}
								width={253}
								height={410}
								className={"rounded-[20px] object-cover w-full max-w-[253px] h-auto mx-auto"}
							/>
							<Image
								src={"/cup.jpg"}
								alt={"cup"}
								width={253}
								height={410}
								className={"rounded-[20px] object-cover w-full max-w-[253px] h-auto mx-auto"}
							/>
						</div>
					</div>
				</div>
				<section className="group-photo">
					<div className="container mx-auto mt-[149px]">
						<Image
							src={"/class5.jpg"}
							alt={"class5"}
							width={1200}
							height={549}
							className={"rounded-[20px] w-full h-auto object-cover"}
						/>
					</div>
				</section>
			</section>
		</>
	);
}
