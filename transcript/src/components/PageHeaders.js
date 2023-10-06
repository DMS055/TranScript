export default function PageHeaders({
    h1Text = 'Header',
    h2Text = 'Subheader',
}) {
	return (
		<section className='text-center mt-24 mb-10'>
            <h1 className='text-3xl font-semibold'>{h1Text}</h1>
            <h2 className='text-white/75'>{h2Text}</h2>
		</section>
	);
}
