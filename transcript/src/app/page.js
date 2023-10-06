import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadIcon from "@/components/UploadIcon";

export default function Home() {
	return (
		<>
			<PageHeaders
				h1Text='Easily add captions to any video with AI'
				h2Text='Upload the video and watch the magic happen'
			/>
			<div className='text-center'>
				<button className='bg-pink-400 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-300/75'>
					<UploadIcon />
					<span>Choose file</span>
				</button>
			</div>
			<DemoSection />
		</>
	);
}
