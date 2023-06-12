

const MyEnrolledClassCard = ({ enrolledClass }) => {
    const { name, image, instructorName, price } = enrolledClass;
    return (
        <div className="border rounded-lg shadow-md p-2">
            <img src={image} alt="class photo" className="object-cover h-[200px] w-full mb-8 rounded-md" />

            <div className="px-6">
                <p className="mb-2"><span className="font-semibold">Class Name : </span>{name}</p>

                <p className="mb-2"><span className="font-semibold">Instructor Name : </span>{instructorName}</p>

                <p className="mb-2"><span className="font-semibold">Price : </span>{price}</p>
            </div>

        </div>
    );
};

export default MyEnrolledClassCard;