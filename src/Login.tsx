import { useState } from 'react';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userIdFocused, setUserIdFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-[58%] flex items-center justify-center bg-white">
        <div className="bg-white rounded-2xl box-shadow shadow-gray-400 p-10 w-125">
          <h1 className="text-4xl font-bold roboto text-[#162d6c] mb-2">Welcome Back</h1>
          <p className="text-gray-800 mb-8">Please login below to continue</p>

          <form className="space-y-6">
            <div className="relative">
              <span className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${userIdFocused || userId ? 'text-[#14C38E]' : 'text-gray-400'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
              </span>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onFocus={() => setUserIdFocused(true)}
                onBlur={() => setUserIdFocused(false)}
                className="w-full pl-12 pr-4 py-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:border-2 focus:border-[#14C38E] peer"
              />
              <label className={`absolute left-3 bg-white px-1 text-gray-500 transition-all pointer-events-none ${userIdFocused || userId ? '-top-2.5 text-xs text-[#14C38E]' : 'top-1/2 -translate-y-1/2 left-12'}`}>
                User ID
              </label>
            </div>

            <div className="relative">
              <span className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${passwordFocused || password ? 'text-[#14C38E]' : 'text-gray-400'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                className="w-full pl-12 pr-12 py-4 border border-gray-400 rounded-lg focus:outline-none ring-0 focus:border-2 focus:border-[#14C38E]"
              />
              <label className={`absolute left-3 bg-white px-1 text-gray-500 transition-all pointer-events-none ${passwordFocused || password ? '-top-2.5 text-xs text-[#14C38E]' : 'top-1/2 -translate-y-1/2 left-12'}`}>
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${passwordFocused || password ? 'text-[#14C38E]' : 'text-gray-400'} hover:text-gray-600`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex justify-between text-sm">
              <a href="#" className="text-[#14C38E] font-medium hover:text-[#14C38E]">Forgot Password?</a>
              <a href="#" className="text-[#14C38E] font-medium hover:text-[#14C38E]">Use Biometric</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#14C38E] hover:bg-[#14C38E] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-gray-700">
              Not a student? <a href="#" className="text-[#14C38E] hover:text-[#14C38E]">Application Portal</a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Info Panel */}
      <div className="w-[42%] bg-gradient flex flex-col items-center justify-center text-white p-10 max-sm:p-8 relative overflow-hidden">
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
              <svg className="w-16 h-16 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-xl roboto font-semibold mb-4">Welcome to the Nasarawa State University, Keffi portal</h3>
            <p className="text-white/80 roboto">Access to certain services is restricted to authenticated users only.</p>
          </div>

          {/* Quote Card */}
          <div className="bg-green-200/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
            <p className="text-lg italic"> <i className='text-5xl'>"</i><br></br>Knowledge for development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
