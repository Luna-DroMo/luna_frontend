import Image from 'next/image'
import Table from '../components/Table.js'
import AlertSection from '../components/Alerts.js'
import RootLayout from '@/components/RootLayout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useAuth } from './contexts/AuthProvider.js'
import { useRouter } from 'next/router';
import { SignupReminderBanner } from '@/components/Banners.js'
import axios from 'axios'
import { useEffect } from 'react'
import cockpit_student from './cockpit_pages/cockpit_student.js'
import cockpit_lecturer from './cockpit_pages/cockpit_lecturer.js'

export default function Home() {
   
  const router = useRouter();
  // Will need to pull this from database I think for authentication purposes. 
  // Users must not be allowed to locally change their role.
  const { user, isAuthenticated, saveUser, clearUser } = useAuth();
  const [userRole, setUserRole] = useState("")
  // If not authenticated, the utility function would have handled the redirection


  useEffect(() => {
    const getUserRole = async (e) => {
      //e.preventDefault()

      try {
        const response = await axios.get(
          `http://localhost:8000/api/getUserType/${user.id}`
        )

        setUserRole(response.data)
      } catch (error) {
        console.log("error during login", error)
      }

    }

    getUserRole()
  })

  // Page logic for an authenticated user

  if (userRole === 1) {
    return (
      cockpit_student()
    )
  }
  if (userRole === 2) {
    return (
      cockpit_lecturer()
    )
  }
  if (userRole === 3) {
    return (
      <RootLayout show_billboard={true}>Page for Admins</RootLayout>
    )
  }
}
