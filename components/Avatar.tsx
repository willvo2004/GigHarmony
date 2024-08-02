import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useHeader } from "@/lib/hooks/useHeader";
import { signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HeaderAvatar() {
  const { user } = useHeader();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer">
          <AvatarImage
            src={`${user?.user_metadata.avatar_url}`}
            alt="@shadcn"
          />
          <AvatarFallback>.</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          <User size={18} className="mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard")}>
          <LayoutDashboard size={18} className="mr-2" />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut}>
          <LogOut size={18} className="mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
