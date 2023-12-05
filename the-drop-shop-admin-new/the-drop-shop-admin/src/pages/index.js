import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersListFetch = await fetch("http://localhost:8080/api/v1/users");
      const usersList = await usersListFetch.json();
      setUsers(usersList)
    }

    fetchUsers();
  }, [])

  return (
    <>
      <h1>Netbuster Admin</h1>

      <ul>
        {
          users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))
        }
      </ul>
    </>
  )
}
