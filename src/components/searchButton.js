import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs'

export default function SearchButton() {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Busque aqui seu produto"
                aria-label="Pesquisar"
                aria-describedby="basic-addon2"

            />
            <Button variant="outline-secondary">
                <BsSearch /> {/* Ícone de pesquisa */}
            </Button>
        </InputGroup>
    )
}