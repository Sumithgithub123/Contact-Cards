import { useNavigate } from "react-router-dom";
import useGetUserDetails from "../hooks/useGetUserDetails";
import Error from "./Error";
import Loading from "./Loading";

function UserDetails() {
  const navigate = useNavigate();
  const { user, loading, error, formstate, handleupdate } = useGetUserDetails();
  const {
    id,
    name,
    username,
    email,
    address: { suite, city, street } = {},
    company: { name: companyname, catchPhrase, bs: industry } = {},
  } = user;

  const {
    formname,
    setname,
    formcomapanyname,
    setcomapanyname,
    formaddress,
    setaddress,
    formemail,
    setemail,
    formusername,
    setusername,
    formindustry,
    setindustry,
    formcatchPhrase,
    setcatchPhrase,
  } = formstate;

  const [first, second] = name ? name.split(" ") : "";
  const add = `${street}, ${suite}, ${city}`;

  if (error) return <Error>Something wrong happened!</Error>;

  if (!username || loading) return <Loading />;

  return (
    <div className="py-4">
      <h3 className="font-bold text-lg">User Details for @{username}</h3>
      <div className="mt-4 grid-cols-1 xl:gap-0 gap-x-2 xl:gap-x-24  md:grid-cols-3 grid ">
        <img
          onClick={() => navigate(`/user/${id}/posts`)}
          className="h-[132px] hover:cursor-pointer md:h-24 object-cover w-96 md:w-auto xl:h-36 mt-3"
          src={`https://placehold.co/600x400/blue/white?text=${first.at(
            0
          )}+${second.at(0)}`}
          alt=""
        />
        <div className="md:mt-0 mt-2 space-y-2">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Name</label>
            <input
              className="bg-stone-200 px-2 py-1 w-full md:w-44 xl:w-56"
              type="text"
              id="name"
              value={formname}
              defaultValue={name}
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Email Address</label>
            <input
              required
              className="bg-stone-200 px-2 py-1 w-full  md:w-44 xl:w-56"
              type="email"
              id="email"
              value={formemail}
              defaultValue={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Username</label>
            <input
              required
              className="bg-stone-200 px-2 py-1 w-full md:w-44 xl:w-56"
              type="text"
              id="username"
              value={formusername}
              defaultValue={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Address</label>
            <input
              required
              className="bg-stone-200 h-[58px] px-2 py-1 w-full md:w-44 xl:w-56"
              type="text"
              id="address"
              value={formaddress}
              defaultValue={add}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Company</label>
            <input
              required
              value={formcomapanyname}
              className="bg-stone-200 px-2 py-1 w-full  md:w-44 xl:w-56"
              type="text"
              id="companyname"
              defaultValue={companyname}
              onChange={(e) => setcomapanyname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Industry</label>
            <input
              required
              value={formindustry}
              className="bg-stone-200 px-2 py-1 w-full md:w-44 xl:w-56"
              type="text"
              id="industry"
              defaultValue={industry}
              onChange={(e) => setindustry(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Catch Phrase</label>
            <input
              required
              value={formcatchPhrase}
              className="bg-stone-200 h-[70px] px-2 py-1 w-full md:w-44 xl:w-56"
              type="text"
              id="catchPhrase"
              defaultValue={catchPhrase}
              onChange={(e) => setcatchPhrase(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleupdate}
              className="text-white w-full  md:w-44 xl:w-56 p-2 mt-3 rounded-full bg-slate-500"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
