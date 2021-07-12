# NodeJS_Entrance_Test
## Install
* NodeJS v15.10.0
* Visual studio code 1.58
* Mysql Ver 8.0.25
* Postman v8.7.0

## Step 1: Clone the source code
```
git clone https://github.com/thanhht99/NodeJS_Entrance_Test.git
```

## Step 2: Install dependencies
```
npm i
```

## Step 3: Config file ormconfig.ts
```
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": **YourUsername**,
    "password": **YourPassword**,
    "database": **DatabaseName**,
    "synchronize": true,
    "logging": false,
    "entities": [
        "build/entity/**/*.js"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
```

## Step 4: Create database in Mysql
* Open cmd
* Input
```
mysql -u root -p
```
* Input your password
* mysql> 
```
CREATE DATABASE **DatabaseName**;
```
* Done

## Step 5: Create file .env
```
SECRETKEY = **YourSecretKey**
```

## Step 6: Open Terminal
* Compile to js
```
npm run build
```
* Run app
```
npm start
```

## Test 
* Open Postman to test API

### API1/SIGN-UP
* POST:http://localhost:3000/API1/SIGN-UP
* Input body as JSON
```
{
    "fullName": "Hoang A",
	"password": "123465",
	"username": "ahoang"
}
```

### API2/SIGN-IN
* POST:http://localhost:3000/API2/SIGN-IN
* Input body as JSON
```
{
	"password": "123465",
	"username": "ahoang"
}
```

### API3/ADD-TO-DO
* POST:http://localhost:3000/API3/ADD-TO-DO
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)
* Input body as JSON
```
{
	"name": "Hoan thanh khoa hoc",
	"description": "..."
}
```

### API4/UPDATE-TO-DO
* PUT:http://localhost:3000/API4/UPDATE-TO-DO
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)
* Input body as JSON
```
{
    "id": 1,
	"name": "Hoan thanh khoa hoc Online",
	"description": "v.v",
    "status": "COMPLETE"
}
```

### API5/REMOVE-TO-DO
* DELETE:http://localhost:3000/API5/REMOVE-TO-DO
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)
* Input body as JSON
```
{
    "id": 1
}
```

### API6/GET-ALL-TO-DO
* GET:http://localhost:3000/API6/GET-ALL-TO-DO
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)

### API7/GET-TO-DO-BY-ID
* GET:http://localhost:3000/API7/GET-TO-DO-BY-ID/1
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)

### API8/GET-ALL-USER
* GET:http://localhost:3000/API8/GET-ALL-USER
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)

### API9/ASSIGN-TO-DO
* POST:http://localhost:3000/API9/ASSIGN-TO-DO
* Input token receive from API2/SIGN-IN in Authorization(Type: Bearer Token)
* Input body as JSON
```
{
    "id": 1, 
    "assignUserId": 2
}
```

