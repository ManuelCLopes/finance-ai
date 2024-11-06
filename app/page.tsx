import { redirect } from "@/node_modules/next/navigation";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default Home;
