interface Props{
    name: string;
    email: string;
}
function ProfileCard({name,email}:Props){
    return(
        <div className="Profile-card">
            <h1 className="profileName">{name}</h1>
            <p>Email:{email}</p>
        </div>
    )
}

export default ProfileCard