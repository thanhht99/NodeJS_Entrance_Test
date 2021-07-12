# NodeJS_Entrance_Test
## Install
NodeJS v15.10.0
Visual studio code 1.58
Mysql Ver 8.0.25

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
CREATE DATABASE <database name>;
```
* Done