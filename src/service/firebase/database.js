import {getFirestore} from "firebase/firestore";

import conexion from "./database";

const db = getFirestore(conexion);

export default db;
