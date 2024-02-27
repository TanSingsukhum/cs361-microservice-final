markdown
# Microservice API Example

## Making API Requests in JavaScript

### Node.js (using `node-fetch`)

```javascript
const fetch = require('node-fetch');

const apiUrl = 'http://localhost:3000/getQuizQuestion';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
Browser-side JavaScript
javascript
Copy code
const apiUrl = 'http://localhost:3000/getQuizQuestion';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
Postman Example
Open Postman and create a new request.

Set the request type to GET and enter the microservice endpoint URL:

bash
Copy code
http://localhost:3000/getQuizQuestion
Send the request, and you'll receive the microservice response.

Note: Adjust the URL based on your microservice deployment.


![Screenshot](https://raw.githubusercontent.com/TanSingsukhum/cs361-microservice-final/main/assets/117961683/6527b354-c44d-42e7-ae4c-d05171508700.png)
