import { Collection, MongoClient } from 'mongodb'
import { ItemType } from '../types/item'

const url = 'mongodb+srv://dbUser:Oeq6epFvyMC1ziIq@cluster0.xet16.mongodb.net/Market?retryWrites=true&w=majority'
const dbName: string = 'Market'
const collectionName: string = 'todos'

const getMongoInstance = async () => {
    try {
        const client = await MongoClient.connect(url, 
            { useNewUrlParser: true, useUnifiedTopology: true })
        //const client = await MongoClient.connect(url);
        console.log("Client conection0: " + client)

        return client.db(dbName);
    } catch (e) {
        console.log(e)
    }    
}

const getCollection = async (): Promise<Collection> => {
    const db = await getMongoInstance();
    console.log("Database0: " + db)

    return db.collection(collectionName);
}

const listAll = async () => {
    const collection = await getCollection();

    return await collection.find({}).toArray();
};

const getById = async (id: string): Promise<ItemType | undefined> => {
    const collection = await getCollection();

    return await collection.findOne({ id });
};

const create = async (item: ItemType) => {
    const collection = await getCollection();

    const response = await collection.insertOne(item);

    return response.ops[0];
};

const update = async (item: ItemType) => {
    const collection = await getCollection();

    const id = item.id;

    const response = await collection.replaceOne({ id }, item);

    return response.ops[0];
};

const remove = async (id: string) => {
    const collection = await getCollection();

    return await collection.deleteOne({ id });
};

export {
    listAll,
    getById,
    create,
    update,
    remove
}
