import StudyHat from "./UI/StudyHat";
export default function Right() {
	return (
		<div className="max-[950px]:hidden w-[42%] bg-gradient flex flex-col items-center justify-center text-white p-10 max-sm:p-8 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 text-center space-y-12">
				{/* Logo and Title */}
				<div className="flex rounded-2xl bg-green-200/10  backdrop-blur-sm py-2 items-center justify-start gap-4 px-4 mb-8">
					<div className="w-20 h-20 max-[1100px]:w-15 max-[1100px]:h-15 border-3 border-white rounded-full overflow-hidden flex shrink-0 items-center justify-center">
						<img src="https://ug.nsuk.edu.ng/api/global/logo" alt="NSUK LOGO" />
					</div>
					<div className="text-left">
						<h2 className="text-2xl max-[1100px]:text-lg font-bold">NASARAWA STATE UNIVERSITY, KEFFI</h2>
					</div>
				</div>

				{/* Welcome Card */}
				<div className="w-9/10 mx-auto bg-green-200/10 backdrop-blur-sm rounded-2xl max-[1100px]:p-6 p-8 max-w-md">
					<div className="mb-6">
					<StudyHat/>
					</div>
					<h3 className="text-xl max-[1100px]:text-lg roboto font-semibold mb-4">
						Welcome to the Nasarawa State University, Keffi portal
					</h3>
					<p className="text-white/80 roboto max-[1100px]:text-sm">
						Access to certain services is restricted to authenticated users
						only.
					</p>
				</div>

				{/* Quote Card */}
				<div className="bg-green-200/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
					<p className="text-lg max-[1100px]:text-sm italic">
						{" "}
						<i className="text-5xl max-[1100px]:text-3xl">"</i>
						<br></br>Knowledge for development
					</p>
				</div>
			</div>
		</div>
	);
}
