class Destination {
    constructor(name, image, description, recommendations, tripType) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.recommendations = recommendations;
        this.tripType = tripType;
    }
}

class TravelPlanner {
    constructor() {
        this.destinations = [];
        this.tripForm = document.getElementById('trip-form');
        this.destinationSelect = document.getElementById('destination');
        this.durationInput = document.getElementById('duration');
        this.tripTypeSelect = document.getElementById('trip-type');
        this.tripResult = document.getElementById('trip-result');

        this.loadDestinations(); // Load destinations from JSON
        this.attachEventListeners();
    }

    async loadDestinations() {
        try {
            const response = await fetch('destinations.json'); // Load data from JSON file
            const data = await response.json();
            this.destinations = data.map(destinationData => {
                return new Destination(
                    destinationData.name,
                    destinationData.image,
                    destinationData.description,
                    destinationData.recommendations,
                    destinationData.tripType
                );
            });
            this.populateDestinationSelect(); // Populate destination options after loading data
        } catch (error) {
            console.error('Error loading destinations:', error);
        }
    }

    populateDestinationSelect() {
        this.destinations.forEach((destination, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = destination.name;
            this.destinationSelect.appendChild(option);
        });
    }

    attachEventListeners() {
        this.tripForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.planTrip();
        });
    }

    planTrip() {
        try {
            const destinationIndex = this.destinationSelect.value;
            const duration = parseInt(this.durationInput.value, 10);
    
            if (isNaN(duration) || duration <= 0) {
                throw new Error('Invalid duration. Please enter a valid number of days.');
            }
    
            if (destinationIndex < 0 || destinationIndex >= this.destinations.length) {
                throw new Error('Invalid destination selection.');
            }
    
            const destination = this.destinations[destinationIndex];
            const recommendations = destination.recommendations.join(', ');
    
            let tripRecommendations;
            switch (destination.tripType) {
                case 'Romantic':
                    tripRecommendations = 'Enjoy romantic dinners, take a boat ride on the Seine.';
                    break;
                case 'Cultural':
                    tripRecommendations = 'Visit museums, explore historical sites.';
                    break;
                case 'City Exploration':
                    tripRecommendations = 'Explore the city, visit landmarks.';
                    break;
                case 'Historical':
                    tripRecommendations = 'Visit historical sites, learn about the past.';
                    break;
                case 'Scenic':
                    tripRecommendations = 'Enjoy scenic views, relax by the waterfront.';
                    break;
                case 'Adventure':
                    tripRecommendations = 'Go on outdoor adventures, explore nature.';
                    break;
                case 'Luxury':
                    tripRecommendations = 'Indulge in luxury experiences, stay in upscale hotels.';
                    break;
                case 'Relaxation':
                    tripRecommendations = 'Relax on the beach, get spa treatments.';
                    break;
    
                default:
                    tripRecommendations = 'Explore the destination at your own pace.';
            }
    
            // Update the background image URL dynamically based on the selected destination's image
            document.body.style.backgroundImage = `url('${destination.image}')`;
    
            this.tripResult.innerHTML = `
                <h3>Your Trip Plan:</h3>
                <img src="${destination.image}" alt="${destination.name} Image" style="width: 300px; height: 200px;">
                <p>Destination: ${destination.name}</p>
                <p>Duration: ${duration} days</p>
                <p>Description: ${destination.description}</p>
                <p>Recommendations: ${recommendations}</p>
                <p>Trip Type: ${destination.tripType}</p>
                <p>Trip Recommendations: ${tripRecommendations}</p>
            `;
    
            this.tripResult.classList.add('show'); // Add the 'show' class for transition
        } catch (error) {
            this.tripResult.textContent = 'Error: ' + error.message;
        } finally {
            this.tripTypeSelect.value = 'Any'; // Reset the trip type dropdown
        }
    }
    

}

document.addEventListener('DOMContentLoaded', () => {
    const travelPlanner = new TravelPlanner();
});
