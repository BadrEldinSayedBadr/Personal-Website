'use client';

import { motion } from 'framer-motion';


export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">

					{/* Khatwa Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<a href="https://hatemelsherif.com" target='_blanck'>
											<h3 className="text-2xl font-bold mb-4">E-Learning Platform &quot;Khatwa&quot;</h3>
										</a>

										<p className="text-gray-400">
											Khatwa is an English learning platform for preparatory and secondary school students, led by a professional teacher. Students can subscribe via Fawry and access DRM-protected videos that cannot be downloaded, with lectures unlocked sequentially after completing the previous one. The platform offers quizzes and assignments with only two attempts allowed, and the admin can fully manage content through an easy-to-use dashboard.										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Responsive UI/UX Design</li>
												<li>• Real-time Course Access Management</li>
												<li>• Subscription Management</li>
												<li>• Admin Dashboard for CRUD Operations</li>
												<li>• Interactive Quizzes & Assignments</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• ASP.NET Core RESTful APIs</li>
												<li>• Fawry Payment Integration</li>
												<li>• Display videos with DRM Protection</li>
												<li>• Secure Authentication & Authorization (JWT)</li>
												<li>• SQL Server Database</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• A secure and integrated payment system</li>
											<li>• Protecting videos from downloading and copying</li>
											<li>• High performance and optimized database queries</li>
											<li>• On-time delivery of features using Agile</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-2 h-full">
									<div className="aspect-[4/3] rounded-lg h-full w-full overflow-hidden">
										<img
											src="../images/data-flow-architecture.png"
											alt="Data Flow Architecture"
											className="w-full object-cover"
										/>
									</div>
								</div>


							</div>
						</div>
					</motion.div>


					<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
						Backend Projects
					</motion.h2>

					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Talabat E-commerce Platform</h3>
										<p className="text-gray-400">

											Talabat E-commerce Platform is a scalable online shopping solution where customers can browse products, use advanced filters, and add items to their cart, even without logging in, through Redis-powered guest sessions. Secure payments are handled via Stripe, ensuring safe and reliable transactions. A robust Token Service manages authentication and authorization across the platform. An intuitive MVC Admin Dashboard enables administrators to manage products, brands, and users with full CRUD operations and role-based access control.
										</p>
									</div>

									<div className="grid grid-cols-1 gap-6">
										{/* <div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js Server Components</li>
												<li>• Real-time Cart & Inventory</li>
												<li>• Stripe Payment Integration</li>
												<li>• PWA with Offline Support</li>
											</ul>
										</div> */}
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• ASP.NET Framework with Onion Architecture, Unit of Work, and Generic Repository Pattern for maintainable and scalable codebase.</li>
												<li>• Redis caching for persistent guest and user baskets.</li>
												<li>• Stripe payment gateway integration for secure transactions.</li>
												<li>• MVC Admin Dashboard with role-based access, full CRUD for products, brands, and users.</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Clean and modular architecture enabling rapid feature expansion.</li>
											<li>• High performance and low-latency API responses.</li>
											<li>• Enhanced admin efficiency with an intuitive dashboard UI.</li>
											<li>• Secure authentication and authorization via custom Token Service.</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-2 h-full">
									<div className="aspect-[4/3] rounded-lg h-full w-full overflow-hidden">
										<img
											src="../images/talabat.jpg"
											alt="Data Flow Architecture"
											className="w-full object-cover"
										/>
									</div>
								</div>

							</div>
						</div>
					</motion.div>


				</div>
			</div>
		</section>
	);
}
