
```bash
mongorestore -h localhost --port=27017 -u <admin> -p <password> -d mongotest --dir=<path> --authenticationDatabase admin
```

```bash
docker build -t mongotest .
```

```bash
docker run -p 27017:27017 --name mongotest -d mongotest
```

```bash
docker exec mongotest  mongo admin ./create-admin.js
```

