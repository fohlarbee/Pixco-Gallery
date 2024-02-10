"use client"

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Serach(){

    const [search, setSearch] = useState('');
    const router = useRouter();

    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/results/${search}`);
        setSearch('');
    }


    return(
        <form className="flex justify-center md:justify-between" onSubmit={handlesubmit}>
            <input type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
            />

        </form>
    )
}