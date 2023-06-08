
const ClassCard = ({ violinClass }) => {
    const { name, image, instructorName, available_seats, price } = violinClass;
    return (
        <div className="border rounded-lg shadow-sm p-6">
            <img src={image} alt="class photo" className="object-cover h-[300px] mb-8" />

            <p className="mb-2"><span className="font-semibold">Class Name : </span>{name}</p>

            <p className="mb-2"><span className="font-semibold">Instructor Name : </span>{instructorName}</p>

            <p className="mb-2"><span className="font-semibold">Available Seats : </span>{available_seats}</p>

            <p className="mb-2"><span className="font-semibold">Price : </span>{price}</p>

            <button className="btn-regular bg-[#F9D949] mt-4">Select</button>

        </div>
    );
};

export default ClassCard;