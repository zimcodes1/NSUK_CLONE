import Left from "./components/Left";
import Right from "./components/Right";
import MobileBar from "./components/MobileBar";

export default function Login() {
  return (
    <div className="h-screen flex">
      <MobileBar></MobileBar>
      {/* Left Side - Login Form */}
      <Left />

      {/* Right Side - Info Panel */}
      <Right/>
    </div>
  );
}
