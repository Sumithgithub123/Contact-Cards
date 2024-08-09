import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useGetUserDetails() {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const { id } = useParams();

  const [formname, setname] = useState();
  const [formcomapanyname, setcomapanyname] = useState();
  const [formaddress, setaddress] = useState();
  const [formemail, setemail] = useState();
  const [formusername, setusername] = useState();
  const [formindustry, setindustry] = useState();
  const [formcatchPhrase, setcatchPhrase] = useState();

  const [street1, suite1, city1] = formaddress ? formaddress.split(",") : "";

  const {
    name,
    username,
    email,
    address: { suite, city, street } = {},
    company: { name: companyname, catchPhrase, bs: industry } = {},
  } = user;

  useEffect(() => {
    async function fetchuser() {
      try {
        seterror(false);
        setloading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await res.json();
        setuser(data);
      } catch (e) {
        seterror(true);
      } finally {
        setloading(false);
      }
    }
    fetchuser(id);
  }, [id]);

  function handleupdate() {
    const obj = {
      name: formname || name,
      email: formemail || email,
      username: formusername || username,
      address: {
        street1: street1 || street,
        suite1: suite1 || suite,
        city1: city1 || city,
      },
      company: {
        name: formcomapanyname || companyname,
        catchPhrase: formcatchPhrase || catchPhrase,
        bs: formindustry || industry,
      },
    };

    async function updateuser(obj) {
      try {
        seterror(false);
        setloading(true);
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "PATCH",
          body: JSON.stringify(obj),
          headers: { "Content-Type": "application/json" },
        });
      } catch (e) {
        seterror(true);
      } finally {
        setloading(false);
      }
    }
    updateuser(obj);
  }

  const formstate = {
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
  };

  return { formstate, handleupdate, user, loading, error };
}
