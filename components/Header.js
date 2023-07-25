import { useAuth } from "../contexts/auth";

export default function Header() {
    const { user, logout } = useAuth();

    return (
      <header className="bg-green-500 text-black-50 p-4">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
      </header>
    );
  }