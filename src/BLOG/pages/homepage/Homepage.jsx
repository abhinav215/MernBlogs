import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import {useEffect, useState} from "react";
import axios from "axios";


export default function Homepage() {
  const {search} = useLocation();


  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(search)
      const res = await axios.get("api/posts"+search);
      setPosts(res.data);
      console.log(res)
    };
    console.log("fetch",posts)
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </>
  );
}
