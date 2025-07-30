import UserRepo from "../Models/user/user.model";
const user: UserRepo = new UserRepo();
const userTester = async () => {
    console.log("initial users!")
    console.log(await user.getAllItems());
    await user.createNewItem({
        id: String(user.getAllItems.length + 1),
        name:"Moamen",
        email:"moamen@outlook.com",
        age: 21,
        role: "admin",
    });
    await user.deleteItemById("u1");
    console.log("users after deletion!");

    console.log(await user.getAllItems());

    console.log("filter by name");
    console.log(await user.findByFilter({name: "Moamen"}));
}

userTester();
