import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [ciggCount, setCiggCount] = useState(0);
  const [ciggPrice, setCiggPrice] = useState(0);
  console.log(session);
  return (
    <>
      <header className="flex justify-between p-5">
        <div className="flex-1 text-2xl font-bold text-teal-700">NextApp</div>
        <div className="flex gap-4 font-bold cursor-pointer">
          <Link href="/profile">
            <div>Profile</div>
          </Link>
          {!session && <div onClick={() => signIn()}>Sign In</div>}
          {session && <div onClick={() => signOut()}>Sign Out</div>}
        </div>
      </header>

      {session && (
        <>
          <div className="flex items-center justify-center p-6 pt-8">
            <h2 className="text-2xl font-extrabold">
              Welcome!{" "}
              <span className="text-teal-700">{session.user.name}</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center items-center pt-3 outline-black-200 ">
            <form>
              <div>
                <input
                  type="text"
                  className=" bg-teal-300 p-2 my-2 rounded-xl"
                  placeholder="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="numner"
                  className=" bg-teal-300 my-2 p-2 rounded-xl"
                  placeholder="ciggarette count"
                  value={ciggCount}
                  onChange={(e) => setCiggCount(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className=" bg-teal-300 my-2 p-2 rounded-xl"
                  placeholder="price of once cigg"
                  value={ciggPrice}
                  onChange={(e) => setCiggPrice(e.target.value)}
                />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
