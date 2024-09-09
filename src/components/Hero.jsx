import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/main_photo.jpeg";

const Hero = () => {
	return (
		<div className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap lg:flex-nowrap">
				{/* Main Content Section */}
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
							Bahar Hasanova
						</h1>
						<span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
							Final Year Computer Science Student
						</span>
						<p className="my-2 max-w-xl py-6 font-light tracking-tighter">
							{HERO_CONTENT}
						</p>
					</div>
				</div>

				{/* Image Section */}
				<div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
					<img
						src={profilePic}
						alt="Bahar"
						className="transform rotate-90 rounded-2xl" // Rotate the image
						style={{ maxWidth: "80%", height: "auto" }} // Ensure image scales properly
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
