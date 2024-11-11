import {memo, useState} from "react";

export default {}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
export type usersType = {
     users: Array<string>
}
const UsersSecret = (props: usersType) => {
    console.log("SecretUsers Working")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>

}
const Users = memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCount] = useState(0)
    const [users, setUsers] = useState(['Dora', 'Lola', "Carol"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)

    }
    return <>
        <button onClick={() => {
            setCount(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add users</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}