const ProjectsData: { title: string; description: string; link: string; image: string }[] = [
	{ title: 'Dummy Project 1', description: 'This is a dummy project.', link: 'https://github.com/NY0510', image: '/a.png' },
	{ title: 'Dummy Project 2', description: 'This is a dummy project.', link: 'https://github.com/NY0510', image: '/asdf.png' },
];

const ProjectsSection = () => {
	return (
		<section id="projects" className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
			<div className="text-xl font-semibold md:w-1/3">
				<h2>Projects</h2>
			</div>
			<div className="flex flex-col gap-y-3 md:w-2/3">
				<div className="grid grid-cols-1 gap-4 smm:grid-cols-1 sm:grid-cols-2">
					{ProjectsData.map((data, index) => (
						<ProjectCard key={index} title={data.title} description={data.description} link={data.link} image={data.image} />
					))}
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, link, image }: { title: string; description: string; link: string; image: string }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="overflow-hidden w-full flex flex-col gap-y-3 rounded-lg border border-neutral-800 bg-neutral-900 transition-all hover:border-neutral-500 hover:shadow-sm">
			<img src={image} alt={title} className="h-36 w-full object-cover" />
			<div className="flex flex-col gap-y-0.5 px-5 py-4">
				<h1 className="text-lg font-medium">{title}</h1>
				<p className="text-neutral-300">{description}</p>
			</div>
		</a>
	);
};

export default ProjectsSection;
