import { TbBrandNextjs } from "react-icons/tb"; // Next.js
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS

const Technologies = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<h1 className="my-20 text-center text-4xl">Technologies</h1>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<img src="src/assets/html5.svg" alt="HTML5" className="w-20 h-20" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<img src="src/assets/css.svg" alt="css" className="w-20 h-20" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<TbBrandNextjs className="text-7xl" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiTailwindcss className="text-7xl text-cyan-400" />
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<img
						src="src/assets/flutter.svg"
						alt="Flutter"
						className="w-20 h-20"
					/>
				</div>
				<div className="rounded-2xl border-4 border-neutral-800 p-4">
					<img
						src="src/assets/tableau.svg"
						alt="Tableau"
						className="w-20 h-20"
					/>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
