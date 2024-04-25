import React from 'react'

interface Props {
    params: { id: number}
}

function UserDetailPage({params : {id}}: Props) {
  return (
    <div>
      User Detail Page {id}
    </div>
  )
}

export default UserDetailPage
