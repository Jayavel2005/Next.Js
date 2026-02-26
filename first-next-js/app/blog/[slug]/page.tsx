type props = {
  params: Promise<{ slug: string }>;
};

interface User {
  id: number;
  name: string;
  age: number;
}

export default async function name({ params }: props) {
  const users: User[] = [
    {
      id: 1,
      name: "Jayavel",
      age: 21,
    },
    {
      id: 2,
      name: "Velu",
      age: 21,
    },
    {
      id: 3,
      name: "Jaya",
      age: 21,
    },
    {
      id: 4,
      name: "Sara",
      age: 21,
    },
  ];
  const { slug } = await params;
  const user: User | undefined = users.find(
    (user: User): boolean => user.id === Number(slug),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900/70 backdrop-blur-lg border border-zinc-700 shadow-2xl p-8 transition-all hover:scale-[1.02]">
        <h1 className="text-3xl font-bold text-amber-400 mb-6 text-center">
          User Profile
        </h1>

        {user ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
              <span className="text-zinc-400">Name</span>
              <span className="text-white font-semibold">{user.name}</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-700 pb-2">
              <span className="text-zinc-400">Age</span>
              <span className="text-white font-semibold">{user.age}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">User ID</span>
              <span className="text-white font-semibold">{user.id}</span>
            </div>
          </div>
        ) : (
          <div className="text-center text-red-400 font-medium">
            User not found
          </div>
        )}
      </div>
    </div>
  );
}
