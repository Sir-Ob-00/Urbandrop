import React from "react";
import { motion } from "framer-motion";
import RudolfCEO from "../../assets/images/mgt/Rudolf-CEO.jpeg";
import GianniCTO from "../../assets/images/mgt/Gianni-CTO.jpeg";
import DayoCOO from "../../assets/images/mgt/Dayo-COO.jpeg";

const leaders = [
	{
		name: "Rudolf Ehumah",
		role: "Cofounder & CEO",
		image: RudolfCEO,
	},
	{
		name: "Gianni Vaiente",
		role: "Cofounder & CTO",
		image: GianniCTO,
	},
	{
		name: "Dayo Samuel",
		role: "Cofounder & COO",
		image: DayoCOO,
	},
];

const LeadershipCard = ({ leader, index }) => (
	<motion.article
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.35 }}
		transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
		whileHover={{ y: -6 }}
		className="group h-full"
	>
		<div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
			<div className="relative mx-5 mt-5 overflow-hidden rounded-[22px] border border-white/70 bg-slate-100 shadow-inner">
				<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-slate-900/10" aria-hidden="true" />
				<img
					src={leader.image}
					alt={`${leader.name}, ${leader.role}`}
					className="h-[320px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] sm:h-[360px] lg:h-[380px]"
				/>
			</div>

			<div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7">
				<p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
					Executive Leadership
				</p>
				<h3 className="text-2xl font-semibold tracking-tight text-slate-900">
					{leader.name}
				</h3>
				<p className="mt-2 text-sm font-medium leading-6 text-slate-600 sm:text-[0.95rem]">
					{leader.role}
				</p>
			</div>
		</div>
	</motion.article>
);

const ManagementTeam = () => {
	return (
		<section
			className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 sm:py-24 lg:py-28"
			aria-labelledby="management-team-heading"
		>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(248,250,252,0.98))]"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
						Leadership Team
					</p>
					<h2
						id="management-team-heading"
						className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
					>
						Executive Management
					</h2>
					<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
						Experienced leadership guiding Urbandrop with operational discipline,
						technical excellence, and a clear long-term vision for sustainable growth.
					</p>
				</motion.div>

				<div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
					{leaders.map((leader, index) => (
						<LeadershipCard key={leader.name} leader={leader} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ManagementTeam;
