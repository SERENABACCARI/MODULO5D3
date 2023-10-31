
import { Card, Col, Container, Row } from "react-bootstrap"
import books from "./Data/fantasy.json"
import { useState } from "react"

function SingleBook(book){
const[selected,setSelected]= useState(false)

    return <Col xs={3} onClick={()=>setSelected(!selected)} style={border}> 
        <Card>
            <Card.title>{book.title}</Card.title>
            <Card.imge fluid src={book.img} />
        </Card>
        
    </Col>
}

export default function AllTheBooks(){

const [query,setQuery]= useState("")
console.log(query)

    return <Container>
        <form.Control type="text" value="query" onChange={e => setQuery(e.target.value)}/>

        <Row>
            {books.filter(book => book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((book)=>(
                <SingleBook book={book}/>
            ))}
        </Row>
    </Container>
    
}