# Safety Incidents API

A backend Node.js project to manage and track safety incidents using MongoDB.

---

## 🚀 Getting Started

### 1. Setup Project Locally

- Unzip the given folder.
- Open the unzipped project in **Visual Studio Code**.

### 2. Install Dependencies

Run the following command in the terminal:

---bash
npm install

3. Configure Environment Variables
	Open the .env file.

	Enter your MongoDB connection string as shown below:

	MONGO_URI=your_mongodb_connection_string_here


🧪 API Testing
Use Postman or install the Thunder Client extension in VS Code to test the APIs.

📬 API Endpoints
➕ POST: Create a New Incident
	Method: POST

	URL: http://localhost:5001/api/safetyincidents/

	Body (JSON):
	
	{
  		"title": "Incident1",
  		"description": "About the incident",
  		"severity": "High"
	}
GET: Fetch All Incidents
	Method: GET

	URL: http://localhost:5001/api/safetyincidents/

🔍 GET: Fetch Incident by ID
	Method: GET

	URL: http://localhost:5001/api/safetyincidents/<incident_id>

	Replace <incident_id> with a valid MongoDB document ID.

❌ DELETE: Remove Incident by ID
	Method: DELETE

	URL: http://localhost:5001/api/safetyincidents/<incident_id>

	Replace <incident_id> with the ID of the incident you want to delete.

🛠 Tools Used
	Node.js

	Express.js

	MongoDB

	Mongoose

	Postman / Thunder Client

📌 Notes
	Ensure MongoDB is running locally or use a cloud database (e.g., MongoDB Atlas).

	Make sure the server is started with:

	npm start
