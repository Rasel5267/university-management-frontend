import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div>
				<Image
					src="/login-image.png"
					alt="Next.js Logo"
					width={500}
					height={500}
					priority
				/>
			</div>
		</main>
	);
}
