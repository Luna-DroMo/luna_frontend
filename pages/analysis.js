import RootLayout from "@/components/RootLayout.js"
import Analysis_Student from "./analysis_pages/student_analysis"
import Analysis_Lecturer from "./analysis_pages/lecturer_analysis"
import { useState, useEffect, React } from "react"
import { useAuth } from "../components/AuthProvider"
import axios from "axios"
import { url } from "@/utils/data"

export default function Main() {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth()
    const [userRole, setUserRole] = useState(null)
    const [isLoading, setIsLoading] = useState(true) // extend for number of API calls

    const updateLoadingState = (index, newValue) => {
        setIsLoading(prevState => {
            const newState = [...prevState]; // Create a copy of the state array
            newState[index] = newValue; // Update the specific index
            return newState; // Return the new array
        });
    };

    useEffect(() => {
        const makeAPICalls = async () => {
            try {
                const response = await axios.get(`${url}/api/getUserType/${user.id}`)
                setUserRole(response.data)

                // If all have succeeded set loading to off
                setIsLoading(false)
            } catch (error) {
                console.log("error during login", error)
            }
        }
        makeAPICalls()
        }, [user.id]) // Run this effect when user.id changes

    if (isLoading) {
        return <RootLayout />
    }

    if (userRole === null) {
    }
    // STUDENT
    if (userRole === 1) {
        return <Analysis_Student />
    }
    // Lecturers
    if (userRole === 2) {
        return <Analysis_Lecturer />
    }
    // Course Admins
    if (userRole === 3) {
        return <RootLayout show_billboard={true}>Page for Admins</RootLayout>
    }
}
