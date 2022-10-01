import { useEffect , useState } from "react";
import axios from "axios"
import DummyProfile from "./phone1pc.jpg"
import "./github.css"

const Github =()=>{ 
    const[inputValue , SetInputValue] = useState("")
    const[userInfo , SetUserInfo] = useState(   "")
    const[error , SetError] = useState(false)
    const[getApi , SetGetApi] = useState(false)

useEffect(() =>{
    axios
    .get(
        `https://api.github.com/users/${inputValue ? inputValue : "ju"}`)

.then((respond) => {
    SetUserInfo(respond.data)
    SetError(false)
})
.catch((err)=> {
    console.log(err);
    SetError(true);
});
},[getApi])
const resetStop=(e)=>{
  e.preventDefault();

if(!inputValue){
    alert("Please Enter Something")
    return ;
}
SetGetApi(!getApi);
};

    return(
        <div className="alignitems">
        <div className="whole">
            <section className="inputbox alignitems">
                <form onSubmit={resetStop}>
                    <input type="text" value={inputValue}
                    onChange={(e)=>{
                        SetInputValue(e.target.value)
                    }}
                    placeholder="Enter Username" />
                </form>
            </section>
            { error === false ? (
                <section className="infoList">
                 <img  src={userInfo ? userInfo.avatar_url : DummyProfile } alt="Profile" />
                 <div>
                    <ul>
                        <li><strong>Name :</strong>{userInfo ? userInfo.name :"USER NAME"}</li>
                        <li><strong>Bio :</strong>{userInfo ? userInfo.bio :"USER BIO"}</li>
                        <li><strong>Followers :</strong>{userInfo ? userInfo.followers :"Followers"}</li>
                        <li><strong>Following :</strong>{userInfo ? userInfo.following :"Following"}</li>
                        <li><strong>Repos :</strong>{userInfo ? userInfo.public_repos :"Public Repos"}</li>
                    </ul>
                </div>
                </section>
            ) :(
                <h1>User Not Found</h1>
            )}
        </div>
        </div>

    )
}

export default Github ;