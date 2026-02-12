const UserDetails = ({user}) => {
  return (
<div>
<h2>User Details</h2>

<div className="outer">
{user.map((Data,idx)=>(
    <div className = "data"key={idx}>
        <p>Name : {Data.name}</p>
        <p>Course : {Data.course}</p>
        <p>Age : {Data.age}</p>
        <p>Id : {Data.id}</p>

        </div>
       
)
)}
</div>
 </div>
  );
};

export default UserDetails;




