import { Slide } from "react-awesome-reveal";


const PopularClassCard = ({ popularClass }) => {
    const { image, enrolled } = popularClass;
    return (
        <div className="p-1 rounded-lg border-2 shadow-md">
            <Slide cascade>
            <img src={image} alt="class photo" className="rounded-md object-cover w-full h-[250px]" />
            </Slide>
        </div>
    );
};

export default PopularClassCard;