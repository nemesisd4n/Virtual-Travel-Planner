
# Travel Planner Web Application

Travel Planner is a web application that enables users to plan their trips to various destinations. It provides information about different travel destinations, including their names, descriptions, trip types, and recommendations. Users can select a destination, specify the duration of their trip, and get personalized trip recommendations. In this document, we will explain how to use the application and provide insights into how classes, switch statements, and try-catch-finally statements were utilized to enhance its functionality.

## How to Use Travel Planner

1. **Destination Selection**: Choose a destination from the dropdown menu. The destinations are listed alphabetically by default.

2. **Trip Duration**: Enter the duration of your trip in days. This field accepts numerical input.

3. **Trip Type**: Select your trip type from the dropdown menu. You can choose from various trip types such as Adventure, Cultural, Romantic, and more.

4. **Plan Your Trip**: Click the "Plan Trip" button to generate your personalized trip plan.

5. **Trip Recommendations**: After clicking the "Plan Trip" button, you will see recommendations for your selected destination and trip type.

6. **Destination Image**: An image of the selected destination will be displayed along with the recommendations.

7. **Reset**: To plan another trip, simply change your destination, trip duration, or trip type, and click the "Plan Trip" button again.

## Usage of Classes, Switch Statements, and Try-Catch-Finally

Now, let's delve into how classes, switch statements, and try-catch-finally statements were thoughtfully integrated into the Travel Planner application. Here's the relevant code snippets and detailed explanations.

### Classes

The Travel Planner application employs object-oriented programming principles to enhance its structure and organization. The primary class, `TravelPlanner`, serves as the foundation for the application's functionality:

```javascript
class TravelPlanner {
    constructor() {
        // Constructor code here...

        // Get references to HTML elements
        this.destinationSelect = document.getElementById("destination");
        this.durationInput = document.getElementById("duration");
        this.tripTypeSelect = document.getElementById("trip-type");
        this.planTripButton = document.getElementById("plan-trip");
        this.tripResult = document.getElementById("trip-result");

        // Add event listener for the "Plan Trip" button
        this.planTripButton.addEventListener("click", () => {
            this.planTrip(); // Call the trip planning method
        });
    }
    
```

**Explanation:**

- The `TravelPlanner` class encapsulates the entire application, making it more modular and maintainable.
- The constructor method initializes essential properties and sets up event listeners.
- Various methods within the class handle different aspects of the application, such as trip planning, recommendation generation, and error handling.

### Switch Statements

Switch statements play a crucial role in managing different aspects of the Travel Planner application, such as handling trip types and button states. Here are code segments and explanations of how switch statements are employed:

**Handling Trip Types**

```javascript
handleTripType(tripType) {
    try {
        switch (tripType) {
            case "Any":
                // Handle the "Any" trip type (default case)
                break;
            case "Adventure":
                // Handle the "Adventure" trip type
                break;
            case "Cultural":
                // Handle the "Cultural" trip type
                break;
            // Add cases for other trip types...
            default:
                throw new Error("Invalid trip type");
        }
    } catch (error) {
        console.error("Error handling trip type:", error.message);
    }
}
```

**Explanation:**

- The `handleTripType` method utilizes a switch statement to perform actions based on the selected trip type.
- In case an invalid trip type is provided, it throws an error, which is caught and logged for proper error handling.


### Try-Catch-Finally Statements

Try-catch-finally statements are strategically implemented in the Travel Planner application for error handling. Here's a code segment and an explanation:

```javascript
planTrip() {
    try {
        const destinationIndex = this.destinationSelect.value;
        const duration = parseInt(this.durationInput.value, 10);

        // Code for trip planning and recommendation generation...

    } catch (error) {
        this.tripResult.textContent = 'Error: ' + error.message;
    } finally {
        this.tripTypeSelect.value = 'Any'; // Reset the trip type dropdown
    }
}
```

**Explanation:**

- Try-catch blocks are utilized in methods like `planTrip` to gracefully catch and handle potential errors.
- If an error occurs during trip planning or recommendation generation, the catch block executes, and an error message is displayed to the user.
- The finally block ensures that specific code (in this case, resetting the trip type dropdown) runs regardless of whether an error occurred.

### Conclusion

The Travel Planner web application is designed with a strong foundation in classes, switch statements, and try-catch-finally statements. These programming concepts enhance the application's structure, user experience, and error-handling capabilities. They ensure that the application handles various scenarios gracefully, providing users with a smooth trip planning experience.
```
