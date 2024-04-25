import React from 'react'

interface Props {
    params : {id: number, photoId: number}
}

function UserPhoto({params : {id, photoId}}: Props) {
  return (
    <div>
      Photo Page {id} photo {photoId}
    </div>
  )
}

export default UserPhoto
