
import { useState } from "react";
import { Check, X, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock user data
const mockUsers = [
  {
    id: "u1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "User",
    status: "Active",
    joinDate: "2023-04-15",
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Admin",
    status: "Active",
    joinDate: "2023-02-28",
  },
  {
    id: "u3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "User",
    status: "Inactive",
    joinDate: "2023-05-10",
  },
  {
    id: "u4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "User",
    status: "Active",
    joinDate: "2023-03-22",
  },
  {
    id: "u5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Provider",
    status: "Active",
    joinDate: "2023-01-15",
  },
];

interface AdminUsersProps {
  searchQuery: string;
}

const AdminUsers: React.FC<AdminUsersProps> = ({ searchQuery }) => {
  const [users, setUsers] = useState(mockUsers);

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusToggle = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Users List</h3>
        <Button size="sm">Add User</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === "Admin" ? "default" : "outline"}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === "Active" ? "success" : "secondary"}
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusToggle(user.id)}>
                          {user.status === "Active" ? "Deactivate" : "Activate"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsers;
