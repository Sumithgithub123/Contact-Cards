import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import AppLayout from "./components/AppLayout";
import Main from "./components/Main";
import User from "./components/UserDetails";
import Posts from "./components/Posts";

function App() {
  const [search, setsearch] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout search={search} setsearch={setsearch} />}>
          <Route index element={<Main search={search} />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/user/:id/posts" element={<Posts />} />
        </Route>
        <Route path="*" element={"Not Found!⚠️"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
