# How to test my code?

### 1. Install the required package:
```
$ npm install 
```

### 2. Change the value in .env to your own value:
```
PORT = "your_port"
HOST = "your_host"
USER = "your_mysql_username"
PW = "your_mysql_passord"
```

### 3. Import the assignment.sql to your mysql database:
```
mysql -u your_username -p assignmens < assignments.sql
```
### 4. Run the app.js:
```js
$ node app.js  // or $ nodemon app.js
```

### 5. Input the url in your browser and check the page:
[http://localhost:3000/](http://localhost:3000/)
