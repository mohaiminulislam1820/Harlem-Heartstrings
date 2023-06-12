
const InstuctorCard = ({ instructor }) => {
    const { name, email, image } = instructor;
    return (
        <div className="border rounded-lg shadow-sm p-4">
            <img src={image} alt="profile photo" className="object-cover h-[300px] mb-8 w-full" />

            <p><span className="font-semibold">Name : </span>{name}</p>

            <p><span className="font-semibold">Email : </span>{email}</p>
        </div>
    );
};

export default InstuctorCard;