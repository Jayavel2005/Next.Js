interface User {
  id: number;
  name: string;
  age: number;
}

type Props = {
  params: Promise<{ id: string }>;
};

let users: User[] = [
  { id: 1, name: "Jaya", age: 21 },
  { id: 2, name: "Sara", age: 22 },
];

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(user);
}

export async function PUT(request: Request, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const index = users.findIndex(u => u.id === Number(id));

  if (index === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  return Response.json(users[index]);
}

export async function DELETE(request: Request, { params }: Props) {
  const { id } = await params;

  users = users.filter(u => u.id !== Number(id));

  return Response.json({ message: "Deleted successfully" });
}