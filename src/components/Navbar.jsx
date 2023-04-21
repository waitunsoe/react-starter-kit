import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <div className=" bg-white h-16 shadow-lg">
      <div className="   h-full max-w-7xl mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <GiKnifeFork className=" text-4xl" />
        </Link>
        <div className="   border-b-2 border-orange-400 flex items-center justify-between">
          <BiSearch className=" text-3xl" />
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              className=" outline-none bg-inherit ml-2 text-xl"
              placeholder="Search meal..."
              value={search}
              onChange={onChangeHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
