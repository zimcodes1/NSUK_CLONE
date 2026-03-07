export default function Right() {
	return (
		<div className="max-sm:hidden w-[42%] bg-gradient flex flex-col items-center justify-center text-white p-10 max-sm:p-8 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 text-center space-y-12">
				{/* Logo and Title */}
				<div className="flex rounded-2xl bg-green-200/10  backdrop-blur-sm py-2 items-center justify-start gap-4 px-4 mb-8">
					<div className="w-20 h-20 border-3 border-white rounded-full overflow-hidden flex items-center justify-center">
						<img src="https://ug.nsuk.edu.ng/api/global/logo" alt="NSUK LOGO" />
					</div>
					<div className="text-left">
						<h2 className="text-2xl font-bold">NASARAWA STATE</h2>
						<h2 className="text-2xl font-bold">UNIVERSITY, KEFFI</h2>
					</div>
				</div>

				{/* Welcome Card */}
				<div className="w-9/10 mx-auto bg-green-200/10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
					<div className="mb-6">
						<svg
							className="w-16 h-16 mx-auto text-white"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
						</svg>
					</div>
					<h3 className="text-xl roboto font-semibold mb-4">
						Welcome to the Nasarawa State University, Keffi portal
					</h3>
					<p className="text-white/80 roboto">
						Access to certain services is restricted to authenticated users
						only.
					</p>
				</div>

				{/* Quote Card */}
				<div className="bg-green-200/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
					<p className="text-lg italic">
						{" "}
						<i className="text-5xl">"</i>
						<br></br>Knowledge for development
					</p>
				</div>
			</div>
		</div>
	);
}
