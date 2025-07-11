


//generamos la clase Product
// models/product.model.js
import {db} from '../firebase/firebase.config.js';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  runTransaction,
  setDoc
} from 'firebase/firestore';

const collectionRef = collection(db, 'products');

class Product {
  constructor({ id = null, name, price }) {
    this.id = id;
    this.name = name;
    this.price = price;
    
  }

  // Obtener todos los productos
  static async findAll() {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => new Product({ id: doc.id, ...doc.data() }));
  }

  // Obtener producto por ID
  static async findById(id) {
    const ref = doc(db, 'products', id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? new Product({ id: snapshot.id, ...snapshot.data() }) : null;
  }

  // Guardar nuevo producto
  // async save() {
  //   const data = {
  //     name: this.name,
  //     price: this.price,
  //   };
  //   const docRef = await addDoc(collectionRef, data);
  //   this.id = docRef.id;
  //   return this;
  // }



  //  Guardar nuevo producto con ID secuencial
  async save() {
  const counterRef = doc(db, 'counters', 'products');

  // Obtener el nuevo ID usando transacción segura
  const newId = await runTransaction(db, async (transaction) => {
    const counterSnap = await transaction.get(counterRef);

    if (!counterSnap.exists()) {
      transaction.set(counterRef, { current: 1 });
      return 1;
    }

    const current = counterSnap.data().current;
    const nextId = current + 1;

    transaction.update(counterRef, { current: nextId });
    return nextId;
  });

  const idStr = newId.toString();

  const data = {
    name: this.name,
    price: this.price,
  };

  const newProductRef = doc(db, 'products', idStr);
  await setDoc(newProductRef, data);
  this.id = idStr;
  return this;
}

  // ❌ Eliminar producto
  static async deleteById(id) {
    const ref = doc(db, 'products', id);
    //verificamos si existe
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    //si existe lo eliminamos
    await deleteDoc(ref);
  }
}

export default Product;
