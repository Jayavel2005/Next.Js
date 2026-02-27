"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function fetchUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function createUser() {
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        age: Number(age),
      }),
    });

    fetchUsers();
  }

  async function deleteUser(id: number) {
    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    fetchUsers();
  }

  return (
    <div className="p-10 space-y-4">

      <h1 className="text-3xl font-bold">Users CRUD</h1>

      <div className="space-x-2">
        <input
          className="border p-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={createUser}
        >
          Create
        </button>
      </div>

      <div>
        {users.map(user => (
          <div key={user.id} className="flex gap-4">

            <p>{user.name} ({user.age})</p>

            <button
              className="text-red-500"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}