export default function AuthLayout({ children }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}