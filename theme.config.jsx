import React from "react";
import { useConfig } from "nextra-theme-docs";

export default {
	docsRepositoryBase: "https://github.com/zimo-gu/Embraer-Docs/tree/main/",
	sidebar: {
		defaultMenuCollapseLevel: 1,
		toggleButton: true,
	},
	toc: {
		title: "On this page",
		float: true,
		extraContent: function ExtraTOCContent() {
			return (
				<div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
						href="https://www.roblox.com/games/17000068488/Purchasing-Portal/"
					>
						Purchasing Portal →
					</a>
				</div>
			);
		},
	},
	logo: <span>Embraer Roblox Documentation</span>,
	feedback: {
		content: "Question? Give us feedback →",
		labels: "feedback",
	},
	chat: {
    		link: 'https://discord.gg/dP57cMpVNv',
  	},
	primaryHue: 207,
	footer: {
		text: (
			<span>
				©️ {new Date().getFullYear()}, Embraer Roblox, all rights reserved
			</span>
		),
	},
	head: function Head() {
		const { title } = useConfig().frontMatter;

		return (
			<>
				<link
					href="/favicon.ico"
					rel="icon"
	
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="Embraer Roblox Docs" />
				<meta
					name="description"
					content="Learn & Grow with the knowledge from Embraer Roblox"
				/>
				<meta
					name="og:description"
					content="Learn & Grow with the knowledge from Embraer Roblox"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="og:title"
					content={title ? title + " — Embraer Roblox" : "Embraer Rblx Docs"}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@Rank_Gun" />
				<title>{title ? `${title} — RankGun` : "RankGun Docs"}</title>
				<meta
					name="og:image"
					content={`/api/og?title=${encodeURIComponent(title)}`}
				/>
				<meta
					name="twitter:image"
					content={`/api/og?title=${encodeURIComponent(title)}`}
				/>
				<style
					dangerouslySetInnerHTML={{
						__html: `
							.nextra-sidebar-container li a {
								border-radius: 1.5em !important;
								padding-left: 12px !important;
							}

              .nextra-sidebar-container button {
                border-radius: 1.5em !important;
                padding-left: 12px !important;
              }
							
						`,
					}}
				/>
			</>
		);
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Embraer Roblox Documentation",
		};
	},
};
