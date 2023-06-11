
const PopularInstructorCard = ({ popularInstructor }) => {
    const { image } = popularInstructor;
    return (
        <div className="p-1 rounded-lg border-2 shadow-md">
            <img src={image} alt="class photo" className="rounded-md object-cover object-top w-full h-[250px]" />
        </div>
    );
};

export default PopularInstructorCard;