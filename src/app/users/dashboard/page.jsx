import Image from "next/image";

// API
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      <h3>DASHBOARD</h3>
      <h5>Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="profile picture" width={250} height={250} />
    </div>
  );
};

export default Page;
