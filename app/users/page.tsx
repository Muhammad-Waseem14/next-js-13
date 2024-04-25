import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    //rendering will be happen in the server
    //while in react app, when we refresh the page the browser first loads the blank page and then fetches data from backend and rendered the content. 
    //So there is always an extra round trip to the backend and our app is not search engin friendly.
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const users: User[] = await res.json();

//    const res = await fetch(
//     'https://jsonplaceholder.typicode.com/users',
//     { next: { revalidate: 10 }} // to implement caching in the next js data will be fetch from sever every 10 sec
//     );

//const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); // disable caching

   
  return (
   <>
   <h1>Users</h1>
   <ul>
    {users.map( user => <li key={user.id}>{user.name}</li>)}
   </ul>
   </>
  )
}

export default UsersPage
