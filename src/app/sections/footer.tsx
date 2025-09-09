"use client";

import Image from "next/image";

export default function Footer() {
	return (
		<>
			<section
				className="bg-[#859974] footer mt-0 py-16 md:py-20 rounded-t-[20px] md:rounded-t-[30px]"
				id="contacts"
			>
				<div className="container mx-auto">
					<h2 className="text-2xl sm:text-3xl md:text-[42px] leading-tight text-[#EEE5DC] md:text-center lg:text-center text-left">
						Присоединяйтесь к нам <br />и следите за обновлениями <br />
						Йога Хом в социальных сетях
					</h2>
					<p className="text-lg md:text-[22px] mt-6 md:mt-[35px] text-[#EEE5DC] text-center">
						Ждем вас на ковриках по адресу
						<br />
						ул. Северная 528А, 2 этаж
					</p>
					<div className="icons flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-12">
						{/* Telegram */}
						<a href="https://t.me/yogahom_krd" target="_blank" rel="noopener noreferrer">
							<svg
								className="w-12 h-12 md:w-[51px] md:h-[53px] hover:scale-110 transition-transform cursor-pointer"
								viewBox="0 0 51 53"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M25.5 0C11.424 0 0 11.651 0 26.0068C0 40.3625 11.424 52.0136 25.5 52.0136C39.576 52.0136 51 40.3625 51 26.0068C51 11.651 39.576 0 25.5 0ZM37.332 17.6846C36.9495 21.7937 35.292 31.7803 34.4505 36.3835C34.0935 38.334 33.3795 38.9842 32.7165 39.0622C31.2375 39.1922 30.1155 38.074 28.6875 37.1117C26.4435 35.6033 25.1685 34.6671 23.001 33.2107C20.4765 31.5202 22.1085 30.584 23.562 29.0756C23.9445 28.6855 30.4725 22.6259 30.6 22.0798C30.6177 21.9971 30.6154 21.9112 30.5931 21.8296C30.5709 21.748 30.5295 21.6732 30.4725 21.6116C30.3195 21.4816 30.1155 21.5336 29.937 21.5596C29.7075 21.6116 26.1375 24.0303 19.176 28.8155C18.156 29.5177 17.238 29.8818 16.422 29.8558C15.504 29.8298 13.77 29.3357 12.4695 28.8935C10.863 28.3734 9.6135 28.0873 9.7155 27.1771C9.7665 26.709 10.404 26.2409 11.6025 25.7467C19.0485 22.4439 23.9955 20.2593 26.469 19.219C33.558 16.2022 35.0115 15.6821 35.9805 15.6821C36.1845 15.6821 36.669 15.7341 36.975 15.9942C37.23 16.2022 37.3065 16.4883 37.332 16.6964C37.3065 16.8524 37.3575 17.3205 37.332 17.6846Z"
									fill="#EEE5DC"
								/>
							</svg>
						</a>

						{/* WhatsApp */}
						<a href="https://wa.me/79180161192" target="_blank" rel="noopener noreferrer">
							<svg
								className="w-12 h-12 md:w-[51px] md:h-[51px] hover:scale-110 transition-transform cursor-pointer"
								viewBox="0 0 51 51"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="51" height="51" rx="25.5" fill="#EEE5DC" />
								<path
									d="M37.8844 32.3803L35.1886 29.6309C34.7006 29.1336 34.0895 28.7806 33.4204 28.6097C32.7512 28.4388 32.0492 28.4563 31.389 28.6604C30.7288 28.8645 30.1354 29.2474 29.6719 29.7685C29.2084 30.2896 28.8923 30.9291 28.7573 31.619C24.3117 30.7712 19.9879 26.3798 19.7188 22.4546C20.4747 22.3132 21.1703 21.9401 21.7129 21.3851C22.4277 20.656 22.8292 19.6673 22.8292 18.6364C22.8292 17.6055 22.4277 16.6168 21.7129 15.8878L19.0178 13.1384C18.303 12.4095 17.3335 12 16.3227 12C15.3118 12 14.3424 12.4095 13.6275 13.1384C5.54139 21.3851 29.7983 46.1234 37.8844 37.8768C38.5988 37.1477 39 36.1592 39 35.1285C39 34.0979 38.5988 33.1094 37.8844 32.3803Z"
									fill="#859974"
								/>
							</svg>
						</a>

						{/* VK */}
						<a href="https://vk.com/yogahom" target="_blank" rel="noopener noreferrer">
							<Image
								src={"/vk-icon.svg"}
								alt={"vk"}
								width={55}
								height={54}
								className="w-12 h-12 md:w-[55px] md:h-[54px] hover:scale-110 transition-transform cursor-pointer"
							/>
						</a>
					</div>
					<div className="text-center mt-8">
						<p className="text-lg md:text-[22px] text-[#EEE5DC]">
							+7 (918) 016‑11‑92
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
