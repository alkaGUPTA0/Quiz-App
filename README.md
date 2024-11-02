# Quiz-App
1. API Integration (Dynamic Question Fetching):
Feature: The quiz app fetches questions dynamically from the Open Trivia Database API.
Explanation: Instead of hardcoding questions, the app retrieves a set of 10 random multiple-choice questions each time you start the quiz. This makes the quiz more engaging and varied, as users get a different set of questions with every game.
Skill Demonstrated: This feature shows API integration skills, where JavaScript (using fetch) is used to send requests, receive responses, and handle JSON data.

2. Multiple-Choice Questions with Score Tracking
Feature: Each question displays multiple options, and users can select one answer per question. Their total score is calculated based on correct answers.
Explanation: The app keeps track of the user's score by checking if the selected answer matches the correct answer for each question. If correct, the score is incremented by 1, and the score is displayed at the end of the quiz.
Skill Demonstrated: This highlights JavaScript logic and conditionals, as the app determines the correctness of each answer and accumulates the score.

3. Timer for Each Question
Feature: A countdown timer gives the user a limited amount of time (10 seconds) to answer each question.
Explanation: Once a question is displayed, a countdown starts. If the timer reaches zero before an answer is selected, the quiz automatically moves to the next question. This adds a level of challenge to the game and encourages quick thinking.
Skill Demonstrated: This feature shows proficiency with JavaScript timers (using setInterval), real-time updating of the DOM to display the countdown, and control flow for handling the timer expiration.

4. End-of-Quiz Summary with Results
Feature: When the quiz is over, a summary screen displays the user’s score, letting them know how many questions they answered correctly.
Explanation: At the end of the quiz, the main question container hides, and the result container appears with the final score. This clear transition provides a good user experience.
Skill Demonstrated: This shows event handling and DOM manipulation to hide and show different elements and to calculate and display final results.

5. Restart Option
Feature: The app includes a “Restart Quiz” button that lets users start a new quiz with a fresh set of questions.
Explanation: When the user clicks “Restart Quiz,” the app resets the score, clears any previous question and answer data, and fetches a new set of questions from the API. This allows users to play multiple rounds without reloading the page.
Skill Demonstrated: This shows handling of state management and event listeners. Resetting the UI and data for each game session demonstrates understanding of reactivity and proper code structuring.

6. Answer Feedback (Visual Feedback for Correct/Incorrect Answers)
Feature: After selecting an answer, the app visually indicates if the answer was correct or incorrect by changing the background color of the selected answer (green for correct, red for incorrect).
Explanation: This immediate feedback helps users understand which answers they got right or wrong, making the game more interactive and visually appealing.
Skill Demonstrated: This involves DOM manipulation and conditional styling, showing an understanding of how to dynamically apply classes and provide user feedback in real-time.
