import React from 'react'
import { Label } from 'semantic-ui-react'

export default UserComponent = (props) => {
    const { user, toto, bolos } = props
    return (
        <div>
            {user && 
            <div>
                <h2>{user.age}</h2>
                <Label as='a' image>{user.name}</Label>
            </div>
        }
        </div>
    )
}