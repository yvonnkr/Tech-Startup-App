import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();

    const handleLogout = async () => {
        "use server";
        await signOut({ redirectTo: "/" });
    };

    const handleSignIn = async () => {
        "use server";
        await signIn();
    };

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={144}
                        height={30}
                        priority={true}
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={handleLogout}>
                                <button type="submit">Logout</button>
                            </form>

                            <Link href={`/user/${session?.user.id}`}>
                                <span>{session?.user.name}</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <form action={handleSignIn}>
                                <button type={"submit"}>Login</button>
                            </form>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
