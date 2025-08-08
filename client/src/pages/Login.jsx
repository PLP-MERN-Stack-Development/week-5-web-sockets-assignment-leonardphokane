import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { setUser } = useAuth();

  const handleLogin = () => {
    // Simulate login
    setUser({ id: 'leonard', name: 'Leonard Phokane', isAuthenticated: true });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Sign in as Leonard
      </button>
    </div>
  );
};

export default Login;
