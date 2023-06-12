const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Alex Morrow',
            quote: 'Harlem Heartstrings provided me with top-notch violin lessons. I saw tremendous improvement in my skills and would highly recommend their classes.',
            image: 'https://i.ibb.co/gr4Lnc5/3a6ce926-cf9e-43b7-8ceb-3b9d56d3fc11-1.jpg'
        },
        {
            id: 2,
            name: 'Anna Smith',
            quote: 'I had a wonderful experience learning violin with Harlem Heartstrings. The instructors were knowledgeable and supportive, making the learning process enjoyable.',
            image: 'https://i.ibb.co/dJLSwJf/cb7c4f93-1b14-48ce-96fe-3ef3768a8604.jpg'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            quote: 'Harlem Heartstrings offers exceptional violin classes. The lessons were well-structured, and the instructors provided valuable guidance that helped me progress significantly.',
            image: 'https://i.ibb.co/f1Nrjmg/9b3f130a-0a9f-4dcd-8e53-7e2c35504c30.jpg'
        },
    ];

    return (
        <div className="mt-28 container">
            <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="section-title mb-8">Testimonials</h2>
                <p className="text-center mb-28">Hear what our students and parents have to say about our violin classes. Whether you are a beginner or an advanced player, we have the right teacher and program for you. Our violin teachers are passionate, experienced and professional. They will help you develop your skills, technique and musicality in a fun and supportive environment. Here are some of the testimonials from our happy customers.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className=" rounded-lg shadow-md border-2 px-6 pt-12 pb-6 relative animate__animated animate__fadeInBottomLeft animate__delay-1s">
                            <img src={testimonial.image} alt="profile photo" className="rounded-full w-20 absolute top-0 right-1/2 translate-x-1/2  -translate-y-1/2 border-2 border-red-400" />
                            <p className="text-lg mb-4">"{testimonial.quote}"</p>
                            <p className="text-gray-600">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;