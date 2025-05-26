"use client";

import { JustifiedGrid } from "@egjs/react-grid";

export default function Home() {
	return (
		<section>
			<h1 className="page-title">🐈 Cat World 🐈</h1>
			<JustifiedGrid
				className="container"
				gap={5}
				defaultDirection={"end"}
				align={"justify"}
				columnRange={[1, 8]}
				rowRange={0}
				sizeRange={[200, 1000]}
				isCroppedSize={false}
				displayedRow={-1}
				stretch={false}
				stretchRange={[144, 320]}
				passUnstretchRow={true}
			>
				<div className="image">
					<img
						src="/assets/cat-1.avif"
						data-grid-maintained-target=""
						alt="image1"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-2.avif"
						data-grid-maintained-target=""
						alt="image2"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-3.avif"
						data-grid-maintained-target=""
						alt="image3"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-4.avif"
						data-grid-maintained-target=""
						alt="image4"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-5.avif"
						data-grid-maintained-target=""
						alt="image5"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-6.avif"
						data-grid-maintained-target=""
						alt="image6"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-7.avif"
						data-grid-maintained-target=""
						alt="image7"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-8.avif"
						data-grid-maintained-target=""
						alt="image8"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-9.avif"
						data-grid-maintained-target=""
						alt="image9"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-10.avif"
						data-grid-maintained-target=""
						alt="image10"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-11.avif"
						data-grid-maintained-target=""
						alt="image11"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-12.avif"
						data-grid-maintained-target=""
						alt="image12"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-13.avif"
						data-grid-maintained-target=""
						alt="image13"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-14.avif"
						data-grid-maintained-target=""
						alt="image14"
					/>
				</div>
				<div className="image">
					<img
						src="/assets/cat-15.avif"
						data-grid-maintained-target=""
						alt="image15"
					/>
				</div>
			</JustifiedGrid>
		</section>
	);
}
