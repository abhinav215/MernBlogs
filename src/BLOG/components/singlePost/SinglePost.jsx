import { useEffect, useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";

import { Context } from "../../context/Context";



const URL_BACKEND = "https://blog-site-restapi.herokuapp.com/"
const PF = "https://blog-site-restapi.herokuapp.com/images/"

export default function SinglePost() {
  const location = useLocation()
  const path = (location.pathname.split("/")[2])

  
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [updateMode,setUpdateMode] = useState(false)
  
  const {user} = useContext(Context)

  // const PF = "http://localhost:5000/images/"
  // const PF = "http://localhost:5000/images/"

  const [post,setPost] = useState({})

  const handleDelete=async ()=>{
    try {
      await axios.delete(URL_BACKEND +`api/posts/${post._id}`,{data:{username:user.username}})
      window.location.replace("/")
    } catch (error) {
      
    }
  }

  const handleUpdate= async()=>{
      try {
        await axios.put(URL_BACKEND +`api/posts/${post._id}`,{
          username:user.username, title,desc
        })
        setUpdateMode(false)
      } catch (error) {
        
      }
  }

  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get(URL_BACKEND +"api/posts/"+path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  },[path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
        <img
          className="singlePostImg"
          src={PF + post.photo}
          alt=""
        />
        )}
        {
          updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>:(
            <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username &&
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                  <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
              }
            </h1>
          )
        }
        
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?username=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> : (
          <pre className="singlePostDesc">
            {desc}
          </pre>
        )}
        {updateMode&&
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        }
      </div>
    </div>
  );
}
