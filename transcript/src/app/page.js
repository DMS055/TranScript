import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
	return (
		<>
			<PageHeaders
				h1Text='Easily add captions to any video with AI'
				h2Text='Upload the video and watch the magic happen'
			/>
			<div className='text-center'>
				<UploadForm />
			</div>
			<DemoSection />
		</>
	);
}
