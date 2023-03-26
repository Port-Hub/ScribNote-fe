const Profile = () => {
    return (
      <div>
        <div className='flex flex-col gap-y-8 p-10 gap-x-4 justify-evenly'>
            <h2 className="text-center font-serif text-xl">Profile</h2>
            <div className="flex flex-row gap-2 gap-x-4 justify-between">
                <p>Username</p>
                <p className="badge badge-ghost p-4" placeholder="Username">Rahul</p>
            </div>
            <div className="flex flex-row gap-2 gap-x-4 justify-between">
              <p>E-Mail</p>
              <p className="badge badge-ghost p-4" placeholder="Email">rahuljayaraj@gmail.com</p>
            </div>
            <div className="card w-96 bg-primary shadow-xl image-full">
              <div className="flex flex-col gap-y-6 card-body">
                <h2 className="card-title">PDF Name</h2>
                <p>Date : 1/1/22</p>
                <p>Audio : Your First Lesson.mp3</p>
              </div>
            </div>
        </div>
      </div>
    )
}
 export default Profile;