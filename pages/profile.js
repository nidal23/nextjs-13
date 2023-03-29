import React from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <div>
      <Link href="/">
        <div className="p-5 text-right font-semibold cursor-pointer">Home</div>
      </Link>

      {!session && (
        <div className="flex flex-col gap-2 items-center text-2xl">
          <div>You're not signed in</div>
          <div
            className="font-bold underline cursor-pointer"
            onClick={() => signIn()}
          >
            Sign In
          </div>
        </div>
      )}

      {session && (
        <div className="p-5 text-center flex flex-col gap-3">
          <div className="text-2xl font-bold">
            Hey <span className="text-red-300">{session.user.name}</span>
          </div>
          <div className="text-xl">
            This is your email : <span>{session.user.email}</span>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
