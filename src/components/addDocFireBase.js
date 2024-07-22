import { db } from "@/services/firebase";
import { addDoc, collection } from "firebase/firestore";

const AddDocFireBase = async ({ image, price, name, categoria }) => {

    try {
        await addDoc(collection(db, 'ifood'), {
            image: image,
            price: price,
            productName: name,
            categoria: categoria,
        });
        return true;
    } catch(error) {
        console.error('Erro ao adicionar um equipamento:', error)
        return false
    }
}

export default AddDocFireBase;