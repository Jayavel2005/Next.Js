interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [
  { id: 1, name: "Jaya", age: 21 },
  { id: 2, name: "Sara", age: 22 },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newUser: User = {
    id: Date.now(),
    name: body.name,
    age: body.age,
  };

  users.push(newUser);

  return Response.json(newUser, { status: 201 });
}