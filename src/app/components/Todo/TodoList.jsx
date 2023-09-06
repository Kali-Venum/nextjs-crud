import React from "react";
import RemoveButton from "../Button/RemoveButton";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const TodoList = () => {
  return (
    <>
      <div className="flex justify-between p-4 border border-slate-400 my-3 gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Todo Title</h2>
          <div>Todo Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveButton />
          <Link href={"/edit/123"}>
            <HiPencilAlt size={24}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoList;
