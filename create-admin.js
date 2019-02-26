db.createUser(
    {
        user: "admin",
        pwd: "123123asd",
        roles: [
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "readWrite", db: "admin" }
        ]
    });