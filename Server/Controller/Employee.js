const db = require("../db")



const addEmployye = async (req, res) => {
    const data = req.body

    try {
        await db.collection("user").doc().set(data)
        res.send("Done")
    } catch (error) {
        res.json(error)
    }
}

const getAllEmployee = async (req, res) => {
    try {
        const doc = []
        const data = await db.collection("user").get()

        data.forEach((snapshot) => {
            doc.push({
                id: snapshot.id,
                data: snapshot.data()
            })

        });

        res.json(doc)
    } catch (error) {
        res.json(error)
    }
}


const getEmployee = async (req, res) => {
    const id = req.params.id
    try {
        const EmployeeCol = await db.collection("user").doc(`/${id}`).get()

        const response = EmployeeCol.data()
        res.json(response)
    } catch (error) {
        res.json(error)
    }

}
// firstName: data.firstName,
// lastName: data.lastName,
// age: data.age,
// phoneNumber: data.phoneNumber,
// lastEdit: Date.now()
const updateEmployee = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const Employee = db.collection("user").doc(id)
        await Employee.get().then((doc) => {
            if (doc.exists) {
                const lastEdit = Date.now()
                Employee.update({ lastEdit: lastEdit })
            }
            else {
                res.json("Data Dosent Exist")
            }
        })

        res.json("Updated")
    } catch (error) {
        res.json(error)
    }

}
const removeEmployee = async (req, res) => {
    const id = req.params.id

    try {
        await db.collection("user").doc(id).delete()

        res.json("Deleted")
    } catch (error) {
        res.json(error)
    }

}
module.exports = { addEmployye, getAllEmployee, getEmployee, removeEmployee, updateEmployee }