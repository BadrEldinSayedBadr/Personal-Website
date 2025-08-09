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
											<h3 className="text-2xl font-bold mb-4">E-Learning Platform "Khatwa"</h3>
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
										<h3 className="text-2xl font-bold mb-4">Enterprise E-commerce Platform</h3>
										<p className="text-gray-400">
											A high-performance e-commerce solution handling 100K+ daily transactions with real-time inventory and ML-powered recommendations.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js Server Components</li>
												<li>• Real-time Cart & Inventory</li>
												<li>• Stripe Payment Integration</li>
												<li>• PWA with Offline Support</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Node.js Microservices</li>
												<li>• Redis Caching Layer</li>
												<li>• Kafka Event Streaming</li>
												<li>• Elasticsearch Product Search</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 99.99% Uptime with Blue-Green Deployment</li>
											<li>• 300ms Average API Response Time</li>
											<li>• 45% Reduction in Infrastructure Costs</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Next.js Frontend (SSR + Client Components)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Product Service
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Order Service
												</text>
											</g>

											{/* Cache Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Redis Cache Layer
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Product DB (PostgreSQL)
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Order DB (MongoDB)
												</text>
											</g>

											{/* Search Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Elasticsearch Product Search
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
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
