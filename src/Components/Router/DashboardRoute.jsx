import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import { useQuery } from '@tanstack/react-query';
import getUserRole from "../../utitlity-functions/getUserRole";
import AdminDashboard from "../Dashboards/AdminDashboard";
import InstructorDashboard from "../Dashboards/InstructorDashboard";
import StudentDashboard from "../Dashboards/StudentDashboard";

const DashboardRoute = () => {

    const { user } = useContext(Contexts);

    const { isLoading, error, data: role } = useQuery({
        queryKey: ['role'],
        queryFn: () => getUserRole(user?.email)
    })

    if (isLoading) return 'Loading...'

    if (role.data.role === "admin")
        return <AdminDashboard></AdminDashboard>

    if (role.data.role === "instructor")
        return <InstructorDashboard></InstructorDashboard>

    if (role.data.role === "student")
        return <StudentDashboard></StudentDashboard>

};

export default DashboardRoute;