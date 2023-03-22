const Profile = () => {
    return (
        <div>
            
        <div className='flex flex-col gap-x-4 gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center font-serif text-xl">PROFILE</h2>
            <div className="flex flex-row gap-2 gap-x-4 justify-between">
                <p>Username</p>
                <p placeholder="Username">RAHUL</p>
      </div>
      <div className="flex flex-row gap-2 gap-x-4 justify-between">
                <p>EMAIL</p>
                <p placeholder="Email">rahuljeyaraj@gmail.com</p>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
  <div className="flex flex-row card-body">
    <h2 className="card-title">PDF NAME</h2>
    <p>DATE</p>
    <div className="card-actions justify-end"></div>
  </div>
</div>
    </div>
  </div>
    )
}
 export default Profile;