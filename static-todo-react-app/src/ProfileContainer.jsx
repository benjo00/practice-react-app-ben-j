import ProfileCard from './ProfileCard';

const ProfileContainer = () => {
    return (
        <h4>
        <div id = "Jarmy">
            <ProfileCard name = "Jarmy" age = {400} bio = "Magical spells" />
            </div>

           <div id = "Big"> <ProfileCard name = "Big Floppa" age = {400} bio = "Gelatinous cube" />
           </div>
           <div id = "Ship">
            <ProfileCard name = "Shipopop" age = {-100} bio = "Unthinkable opposite being" />
        </div>
        </h4>
    )
}

export default ProfileContainer

