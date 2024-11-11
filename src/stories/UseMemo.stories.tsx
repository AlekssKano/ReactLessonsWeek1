import React, {memo, useCallback, useMemo, useState} from 'react';
import {usersType} from "./ReactMemo.stories";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = React.useState(0);
    const [b, setB] = React.useState(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let temResultA=1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const FakeValue = Math.random()
            }
            resultA = resultA * i;
        }
        return temResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(+e.currentTarget.value))}/>

        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}</div>

    </>
}

const UsersSecret = (props: usersType) => {
    console.log("SecretUsers Working")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>

}
const Users = memo(UsersSecret)
export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCount] = useState(0)
    const [books, setBooks] = useState(['JS', 'React', "Html"])

    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)

    }
    const memoizedAddBook=useMemo(()=>{ //var1
    return ()=> {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }
    },[books]);
        const memoizedAddBook2=useCallback(()=>{ //var2
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        },[books])



    let newArr=useMemo(()=>{
        return books.filter(u=>u.toLowerCase().indexOf("a") > -1)},[books])
    return <>
        <button onClick={() => {
            setCount(counter + 1)
        }}>+
        </button>
        {/*<button onClick={*/}
        {/*    addBook}>add book*/}
        {/*</button>*/}
        {counter}
        <Book books={newArr} addBook={addBook}/>
    </>
}
type BookSecretPropsType={
    books: Array<string>
    addBook:()=>void
}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log("Book Secret")
    return (<div>
            <button onClick={()=>{props.addBook()}}>add book</button>/
            {props.books.map((book, i) => <div key={i}>{book}</div>)
    }
    </div>
    )

}
const Book=React.memo(BooksSecret)
