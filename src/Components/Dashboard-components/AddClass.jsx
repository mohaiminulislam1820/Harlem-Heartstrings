import { useForm } from "react-hook-form";
import { Contexts } from "../Context/ContextWrapper";
import { useContext } from "react";

const AddClass = () => {
    const { user } = useContext(Contexts);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            instructorName: user.displayName,
            instructorEmail: user.email
        }
    });

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <section className="mt-16 container">
            <h1 className="text-5xl font-bold text-center">Add a Class</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 border p-8 rounded-lg">

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="name" className="font-semibold">Class Name</label>

                    <input type="text" {...register("name")} required className="auth-input" placeholder="Name of the class" />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="image" className="font-semibold">Class Image Url</label>

                    <input type="url" {...register("image")} required className="auth-input" placeholder="image url (eg: https://example.com/image.jpg)" />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="instructorName" className="font-semibold">Instructor Name</label>

                    <input type="text" {...register("instuctorName")} required defaultValue={user.displayName} disabled className="auth-input" placeholder="instructor name" />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="instructorEmail" className="font-semibold">Instuctor Email</label>

                    <input type="email" {...register("instuctorEmail")} required defaultValue={user.email} disabled className="auth-input" placeholder="email" />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="availableSeats" className="font-semibold">Available Seats</label>

                    <input type="number" {...register("availableSeats")} required min={1} className="auth-input" placeholder="number of seats available" />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="price" className="font-semibold">Price</label>

                    <input type="number" {...register("price")} required min={1} className="auth-input" placeholder="price to enroll" />
                </div>

                <button className="btn-regular bg-blue-500 text-white">Add</button>

            </form>
        </section>
    );
};

export default AddClass;