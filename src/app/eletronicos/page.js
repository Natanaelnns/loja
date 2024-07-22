'use client'
import { db } from "../../services/firebase"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Eletronicos() {

    const [list, setList] = useState([]);
    const [searchCategory, setSearchCategory] = useState('');

    const fetchCategoria = async () => {
        // Ajusta a consulta para buscar pela categoria
        const q = query(collection(db, 'ifood'), where('categoria', '==', searchCategory));
        const productsSnapshot = await getDocs(q);
        const productsList = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setList(productsList);
    }

    useEffect(() => {


    }, [])

    return (
        <div>
            <h1>Cheguei</h1>
        </div>
    )
}