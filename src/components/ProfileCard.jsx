function ProfileCard(){
    const profile = 
        {
            name:"Alex",
            season:"25-26",
            average:"205",
            goals: [
                "210 Avg",
                "85% Single Pin"
            ]
        }
        

return (
    <div className="bg-[#F8F7F5] border border-[#C9B07A] px-4 py-2 rounded-xl">
    <h2 className="text-[#880011] text-2xl font-bold">
      {profile.name}
    </h2>
    <p className = "text-slate-600">Season: {profile.season}</p>
    <p className = "text-slate-600">Average: {profile.average}</p>
    <h3 className="text-slate-600 mt-4 font-bold">Goals:</h3>
    {profile.goals.map((goal,index)=>(    
        <p  className = "text-slate-600" key={index}>{goal}</p>
    ))
    }
  </div>
)
}
export default ProfileCard