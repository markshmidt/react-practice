import React, {useState, useEffect} from 'react'

function GitHubUserFetch(){
    const [url, setUrl] = useState('')
    const [login, setLogin] = useState('')
    const [id, setId] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [reposUrl, setReposUrl] = useState('')
    const [username, setUsername]=useState('')
    
    function handleInputChange(event){
        setUsername(event.target.value);
    }
    const fetchUser= ()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response=> response.json())
        .then(data =>{
            console.log(data)
    
          setUrl(data.url);
          setLogin(data.login);
          setId(data.id);
          setAvatarUrl(data.avatar_url);
          setReposUrl(data.repos_url)
            console.log("User fetched:", data.url, "by", data.login);
        })
       }
        useEffect(() => {
            fetchUser();
      }, []);

    return(
        <div className="github">
            <h1>GitHub User Search</h1>
            <p className="search"> Please enter GitHub username and we will fetch their data.</p>
            <input className="inputUser" placeholder='enter username' onChange={handleInputChange}></input>
            <button className="searchButton" onClick={fetchUser}>Find user</button>

            <p className="userUrl">{url}</p>
            <p className="userId">{id}</p>
            <p className="useLogin">{login}</p>
            <p className="userAvatar">{avatarUrl}</p>
            <p className="userRepos">{reposUrl}</p>
        </div>
    )
}
export default GitHubUserFetch