import Header from "../components/Header";
import { useState,useEffect } from "react";
import { UserRoundPen } from "lucide-react";
import Avatar from "../components/Avatar";

function Profile(){
    const [isEdit, setIsEdit] = useState(false);

    const initialProfile = {
        fullname: "",
        gender: "",
        phonenumber: "",
        username: ""
      };
    const [profile, setProfile] = useState(initialProfile);
   
    useEffect(() => {
        const hasChanged = 
          profile.fullname !== initialProfile.fullname ||
          profile.gender !== initialProfile.gender ||
          profile.phonenumber !== initialProfile.phonenumber ||
          profile.username !== initialProfile.username;
      
        setIsEdit(hasChanged);
      }, [profile]);
      
      
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setIsEdit(prev => !prev);

        setProfile({
            fullname: "",
            gender: "",
            phonenumber: "",
            username: ""
          });
          
       
    }

    const handleFormData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setProfile(data);
        console.log("Form data submitted:", data);

        setProfile({
            fullname: "",
            gender: "",
            phonenumber: "",
            username: ""
        });
    }

    return(
        <>
            <Header/>
            <div className='mx-auto sm:p-2 flex items-center justify-center mt-8'>
                <div className="grid grid-col-1 md:grid-cols-2 bg-white shadow-md rounded-md p-4">
                   <div className="flex flex-col items-center justify-center space-y-9 rounded-md p-4 md:p-6 border-b-2 border-gray-300 md:border-2">
                        <div>
                            <Avatar 
                                // src="https://images.unsplash.com/photo-1502685104226-e9df14d4d9f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                                alt="Profile Picture" 
                                className="h-32 w-32"
                            />
                        </div>
                        <div className="text-center space-y-4">
                            <p className="text-2xl font-bold border-b-1 border-gray-400">BRILLIANTTONSA</p>
                            <p className="text-2xl font-bold border-b-1 border-gray-400">Abdullatif Heri Mnyamisi</p>
                            <p className="text-2xl font-bold border-b-1 border-gray-400">Male</p>
                            <p className="text-xl font-bold border-b-1 border-gray-400">+225787239822</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-4 rounded-md p-4 md:p-6">
                        <div>
                            <div>

                            </div>
                            
                            <h1 className="text-3xl text-center">Profile Information</h1>
                            <p className="text-sm mt-2 text-center">Update your personal information and profile picture</p>
                        </div>
                        <form action="" onSubmit={handleFormData}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="flex flex-col space-y-4">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullname" 
                                        id="fullname" 
                                        required
                                        className="border rounded p-2" 
                                        placeholder="your name" 
                                        value={profile.fullname}
                                        onChange={(e) => setProfile({...profile, fullname: e.target.value})}
                                        />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <label htmlFor="gender">Gender</label>
                                    <select 
                                        name="gender" 
                                        id="gender" 
                                        required
                                        className="border rounded p-2"
                                        value={profile.gender}
                                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-4"> 
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input 
                                        type="text" 
                                        name="phonenumber" 
                                        id="phonenumber" 
                                        required
                                        className="border rounded p-2" 
                                        placeholder="+225787239822"
                                        value={profile.phonenumber}
                                        onChange={(e) => setProfile({ ...profile, phonenumber: e.target.value })}
                                        />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <label htmlFor="username">User Name</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        className="border rounded p-2" 
                                        placeholder="tonsa"
                                        required
                                        value={profile.username}
                                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <button 
                                        onClick={handleUpdateProfile} 
                                        disabled={isEdit? false: true}
                                        className={`border rounded-sm p-2 cursor-pointer w-32 transition-colors ${isEdit?" bg-gray-300 hover:bg-gray-400" :"bg-gray-400"}`}>{isEdit?'Cancel':'Edit Profile'}</button>
                                </div>
                                {isEdit && (
                                    <div>
                                        <button type="submit" className="border rounded-sm p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer w-32 transition-colors">Save</button>
                                    </div>
                                )}
                            </div>
                        </form>

                    </div>
                </div>
        </div>
        </>
    )
}

export default Profile;