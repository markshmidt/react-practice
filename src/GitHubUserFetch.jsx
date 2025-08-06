import React, {useState, useEffect} from 'react'

function GitHubUserFetch(){
    const [url, setUrl] = useState('')
    const [login, setLogin] = useState('')
    const [id, setId] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [reposUrl, setReposUrl] = useState('')
    const [username, setUsername]=useState('')
    const [error, setError] = useState('');

    
    function handleInputChange(event){
        setUsername(event.target.value);
    }

    function FetchUser(){
    const FetchUserPromise = new Promise((resolve, reject)=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject('User not found');
          }
        })
        .catch(() => reject('Network error'))});

        FetchUserPromise
        .then((data) => {
        setError('');
        setUrl(data.url);
        setLogin(data.login);
        setId(data.id);
        setAvatarUrl(data.avatar_url);
        setReposUrl(data.repos_url);
        console.log('User fetched:', data.login);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });

    }
    
    return(
        <div className="github">
            <h1>GitHub User Search</h1>
            <p className="search"> Please enter GitHub username and we will fetch their data.</p>
            <input className="inputUser" placeholder='enter username' onChange={handleInputChange}></input>
            <button className="searchButton" onClick={FetchUser}>Find user</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {login&& !error&& 
            <div className="userInfo">
               <p className="useLogin"><strong>Login:</strong> {login}</p>
                <p className="userUrl"><strong>URL:</strong> {url}</p>
                <p className="userId"><strong>ID:</strong> {id}</p>
           
                <p className="userRepos"><strong>Repos:</strong> {reposUrl}</p>
            <img src={avatarUrl} alt="User avatar" width={100} />
            </div>
            }
        </div>
    )
}
export default GitHubUserFetch