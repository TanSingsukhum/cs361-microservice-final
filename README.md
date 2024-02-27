# Trivia Microservice

This microservice provides trivia quiz questions across various categories and difficulty levels. Retrieve engaging quiz questions seamlessly by making API requests using the methods detailed below.

## Communication Contract

### Requesting Data

To request data, you must use Node.js and have the axios library installed.

1. Install axios by executing the following command in the terminal:

    ```bash
    npm install axios
    ```

2. Use this code snippet to REQUEST data:

   **Example Call:**

   Request and receive data using Node.js:

   ```javascript
   // Use axios to fetch data
   const axios = require('axios');

   // Define the trivia microservice URL with inputs for category and difficulty
   const microserviceUrl = 'http://localhost:3000/getQuizQuestion/';

   // Define the category (e.g., sports, history, animals) and difficulty (easy, medium, hard)
   const category = 'sports';
   const difficulty = 'easy';

   // Make a GET request to the microservice endpoint using axios by concatenating microserviceURL with category and difficulty
   axios.get(`${microserviceUrl}${category}/${difficulty}`)
     .then(response => {
       // Handle the response (quiz question)
       console.log('Data received from microservice:');
       console.log(response.data);
     })
     .catch(error => {
       // Handle errors, if any
       console.error('Error requesting data from microservice:', error);
     });
Replace "category" and "difficulty" with the desired values.

Receiving Data
An example response would be in JSON format when the URL is: http://localhost:3000/getQuizQuestion/sports/easy:
   ```javascript
json
Copy code
{
  "question": "What is the capital of France?",
  "difficulty": "easy",
  "options": ["Paris", "London", "Berlin", "Madrid"],
  "correct_answer": "Paris"
}
   ```
example link: https://cs361-microservices-thanaphon-d7747a32c8c9.herokuapp.com/api/quiz/History/easy

Upon executing the provided code snippet, the microservice will respond with the requested quiz question.

Here's what happens when you execute the code:

The axios.get function sends a GET request to the microservice endpoint URL concatenated with the category and difficulty.
The microservice processes the request and retrieves the quiz question data associated with the provided category and difficulty.
If successful, the microservice sends a response containing the quiz question data back to the client.
The .then method is used to handle the successful response. Inside the callback function, response.data contains the quiz question received from the microservice.
You can then further process or utilize the received quiz question data as needed within the callback function.
In case of any errors during the request or response process, the .catch method is used to handle the error and log it to the console for debugging purposes.

UML DIAGRAM

![Microservice API Example](https://github.com/TanSingsukhum/cs361-microservice-final/assets/117961683/9b4bd019-69a5-4d75-85c1-1f2f030b89a1)
