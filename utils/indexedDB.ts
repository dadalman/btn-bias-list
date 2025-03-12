import rankList from "@/data/rankList"; // Ensure correct path

const DB_NAME = "BiasApp";
const STORE_NAME = "trainees";

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });

        // Add initial rankList data
        rankList.forEach((trainee) => {
          store.add(trainee);
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const dispatchDBUpdate = () => {
  document.dispatchEvent(new Event("indexedDBUpdated"));
};

// ✅ Ensure data is seeded if empty
export const seedDataIfEmpty = async () => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = async () => {
      if (request.result.length === 0) {
        const writeTransaction = db.transaction(STORE_NAME, "readwrite");
        const writeStore = writeTransaction.objectStore(STORE_NAME);

        rankList.forEach((trainee) => {
          writeStore.add(trainee);
        });

        writeTransaction.oncomplete = () => resolve(true);
        writeTransaction.onerror = () => reject(writeTransaction.error);
      } else {
        resolve(false);
      }
    };

    request.onerror = () => reject(request.error);
  });
};

// ✅ Get all trainees
export const getAllItems = async (): Promise<any[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
};

// ✅ Update or Add trainee
export const updateItem = async (item: any) => {
  const db = await openDB();
  return new Promise(async (resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
      const existingTrainee = getAllRequest.result.find(
        (trainee: any) => trainee.name === item.name
      );

      if (existingTrainee) {
        const defaultTrainee = {
          id: existingTrainee.id,
          name: "TRAINEE",
          image: "/assets/images/blank-image.png",
          county: "",
          rank: existingTrainee.rank, // Preserve rank
        };
        store.put(defaultTrainee);
      }

      const request = store.put({ ...item, rank: Number(item.rank) });
      request.onsuccess = () => {
        dispatchDBUpdate(); // 🔥 Notify app of DB change
        resolve(true);
      };
      request.onerror = () => reject(request.error);
    };

    getAllRequest.onerror = () => reject(getAllRequest.error);
  });
};

// ✅ Reset trainee instead of deleting
export const removeItem = async (id: number) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      const existingTrainee = request.result;
      const defaultTrainee = {
        id,
        name: "TRAINEE",
        image: "/assets/images/blank-image.png",
        county: "",
        rank: existingTrainee ? existingTrainee.rank : null, // Preserve rank
      };

      store.put(defaultTrainee);
      transaction.oncomplete = () => {
        dispatchDBUpdate(); // 🔥 Notify app of DB change
        resolve(true);
      };
    };

    request.onerror = () => reject(request.error);
  });
};
