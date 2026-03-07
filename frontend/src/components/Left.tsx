import { useState } from "react";
import UserIcon from "./UI/UserIcon";
import Lock from "./UI/Lock";
import EyeOpen from "./UI/EyeOpen";
import EyeClosed from "./UI/EyeClosed";

export default function Left() {
	const [showPassword, setShowPassword] = useState(false);
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [userIdFocused, setUserIdFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);

	return (
		<div className="w-[58%] max-sm:w-full max-sm:absolute max-sm:bottom-0 max-sm:rounded-b-none flex items-center justify-center bg-white">
			<div className="bg-white rounded-2xl box-shadow shadow-gray-400 p-10 w-125">
				<h1 className="text-4xl font-bold roboto text-[#162d6c] mb-2">
					Welcome Back
				</h1>
				<p className="text-gray-800 mb-8">Please login below to continue</p>

				<form className="space-y-6">
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
						className="w-full bg-[#14C38E] hover:bg-[#14C38E] text-white font-semibold py-3 rounded-lg transition-colors"
					>
						Sign In
					</button>

					<p className="text-center text-gray-700">
						Not a student?{" "}
						<a href="#" className="text-[#14C38E] hover:text-[#14C38E]">
							Application Portal
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}
