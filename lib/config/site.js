
const baseSiteConfig = {
	name: "Sprunki's World",
	title: "Sprunki's World: Sprunki Game Online, Create Sprunky Beats Free",
	description: "Experience the classic Pokemon Trading Card Game on mobile! Battle worldwide, collect digital cards, and become a Pokemon TCG master. Join millions of trainers!",
	url: 'https://sprunkisworld.com',
	ogImage: 'https://sprunkisworld.com/og.png',
	authors: [
		{
			name: 'A',
			url: 'https://sprunkisworld.com',
		}
	],
	icons: {
		icon: '/favicon.ico',
	},
	creator: '@A'
};

export const SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseSiteConfig.url,
		title: baseSiteConfig.title,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.title,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.ogImage}`],
		creator: baseSiteConfig.creator,
	},
};
