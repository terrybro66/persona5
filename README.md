## AI Prompt

### I have an outline for an application using node, react, deck.gl, three.js, postgres with the postgis extension.

### It will be an interactive map for the purpose of visualising the 3d layout of video games set in both the real world and fantasy worlds.

### Where the location is real it will use real data from overpass turbo to provide information about buildings, infrastucture and locations of interest, where it is fantasy then it will need json data for fictional locations.

### The data will be saved in a postgres database of your design which will be queried using postgis functionality to determine distance, intersection, containment between points and geometries.

### The application will have users who can store their progress investigating the map, whether they have visited a location of interest, whether they have collected items or achievements. Users will be able to save notes about locations and there will be a user interface on the map for displaying this information.

### There will be two modes of navigation around the map :

1. Global free ranging Movement where you roam freely and can input a location and fly to that locations coordinates;
2. Ground level 2 dimensional movement where you are constrained to move to points on a line representing roads, you will only be able to travel to an adjacent point on the line but where roads intersect an interface will display the directions of travel available and you will be able to reverse the direction of travel at any time. The camera will animate between points on the line and it will show the point of view of a bird flying behind the shoulder of a 3d model which is the user/players avatar.

### Please organise the development of this application split into a series of commit messages for saving to a github repo

```bash
# Step 1: Create Project Structure
git init
mkdir client server database config
touch .gitignore
git add .
git commit -m "Initial commit: Set up project structure with directories for client, server, database, and config"

# Step 2: Install Core Dependencies
git checkout -b chore/install-dependencies
npm init -y
npm install react react-dom deck.gl three js express pg dotenv cors
git add .
git commit -m "Add core dependencies: React, deck.gl, three.js, Express.js, PostgreSQL client, dotenv"

# Step 3: Set Up ESLint and Prettier
git checkout -b chore/code-quality
npm install eslint prettier eslint-config-prettier eslint-plugin-react
echo 'node_modules' >> .gitignore
git add .
git commit -m "Configure ESLint and Prettier for code quality and consistency"

# Step 4: Set Up PostgreSQL with PostGIS
git checkout -b chore/setup-database
touch database/schema.sql
git add .
git commit -m "Initialize PostgreSQL database with PostGIS extension"

# Step 5: Create Database Schema
echo "CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(50), password VARCHAR(255));" > database/schema.sql
echo "CREATE TABLE map_data (id SERIAL PRIMARY KEY, geometry GEOMETRY, description TEXT);" >> database/schema.sql
git add .
git commit -m "Create database schema for users and map data"

# Step 6: Seed Database with Initial Data
git checkout -b feature/seed-database
echo "INSERT INTO map_data (geometry, description) VALUES (...);" >> database/schema.sql
git add .
git commit -m "Seed database with initial real-world and fantasy map data"

# Step 7: Implement Basic Express Server
git checkout -b feature/express-setup
touch server/index.js
echo "const express = require('express');" > server/index.js
echo "const app = express();" >> server/index.js
echo "app.listen(3000, () => console.log('Server running on port 3000'));" >> server/index.js
git add .
git commit -m "Set up basic Express server with a simple test route"

# Step 8: Connect Express to PostgreSQL
echo "const { Pool } = require('pg');" >> server/index.js
echo "const pool = new Pool({ connectionString: process.env.DATABASE_URL });" >> server/index.js
git add .
git commit -m "Connect Express server to PostgreSQL with pg-pool"

# Step 9: Initialize React Application
git checkout -b feature/react-setup
npx create-react-app client
git add .
git commit -m "Initialize React application with create-react-app"

# Step 10: Add Basic 3D Map Rendering with deck.gl
echo "import React from 'react';" > client/src/Map.js
echo "import { DeckGL, ScatterplotLayer } from '@deck.gl/react';" >> client/src/Map.js
git add .
git commit -m "Set up basic 3D map rendering with deck.gl in React"

# Step 11: Implement Map Navigation and Interaction
git checkout -b feature/map-interaction
echo "import React from 'react';" > client/src/Navigation.js
echo "const Navigation = () => <div>Navigation Component</div>;" >> client/src/Navigation.js
git add .
git commit -m "Create basic Navigation component for interacting with the map"

# Step 12: Add Initial Styling and Layout
git checkout -b chore/styling
npm install styled-components
echo "import styled from 'styled-components';" >> client/src/App.js
git add .
git commit -m "Add initial styling and layout with styled-components"

# Step 13: Implement User Registration
git checkout -b feature/user-registration
echo "const express = require('express');" > server/routes/user.js
echo "const router = express.Router();" >> server/routes/user.js
echo "router.post('/register', (req, res) => { /* Register user logic */ });" >> server/routes/user.js
git add .
git commit -m "Implement user registration endpoint in Express"

# Step 14: Implement User Login with JWT
git checkout -b feature/user-login
npm install jsonwebtoken
echo "const jwt = require('jsonwebtoken');" >> server/routes/user.js
echo "router.post('/login', (req, res) => { /* Login logic with JWT */ });" >> server/routes/user.js
git add .
git commit -m "Implement user login with JWT in Express"

# Step 15: Implement Authentication Middleware
git checkout -b feature/auth-middleware
echo "const authenticate = (req, res, next) => { /* JWT authentication middleware */ };" > server/middleware/auth.js
echo "app.use(authenticate);" >> server/index.js
git add .
git commit -m "Implement authentication middleware for protecting routes"

# Step 16: Create User Profile Endpoint
git checkout -b feature/user-profile
echo "router.get('/profile', (req, res) => { /* Fetch user profile data */ });" >> server/routes/user.js
git add .
git commit -m "Implement user profile endpoint in Express"

# Step 17: Implement Note-Taking on the Map
git checkout -b feature/note-taking
echo "const notes = [];" > client/src/Notes.js
echo "const Notes = () => <div>Notes Component</div>;" >> client/src/Notes.js
git add .
git commit -m "Add functionality for note-taking on the map in React"

# Step 18: Develop API Endpoint for User Notes
git checkout -b feature/user-notes
echo "router.get('/notes', (req, res) => { /* Fetch user notes */ });" >> server/routes/user.js
git add .
git commit -m "Develop API endpoint for fetching user notes in Express"

# Step 19: Add Functionality for Tracking Visited Locations
git checkout -b feature/visited-locations
echo "const visitedLocations = [];" > client/src/VisitedLocations.js
echo "const VisitedLocations = () => <div>Visited Locations Component</div>;" >> client/src/VisitedLocations.js
git add .
git commit -m "Add functionality for tracking visited locations in React"

# Step 20: Implement Ground-Level Navigation
git checkout -b feature/ground-navigation
echo "import { LineString } from 'geojson';" >> client/src/Map.js
echo "const groundLevelNavigation = (/* Logic for 2D movement */);" >> client/src/Map.js
git add .
git commit -m "Implement ground-level navigation in the map component"

# Step 21: Develop Map Interaction Interface
git checkout -b feature/map-interface
echo "const Interface = () => <div>Interface Component</div>;" > client/src/Interface.js
git add .
git commit -m "Develop map interaction interface for controlling navigation in React"

# Step 22: Animate Camera Movement
git checkout -b feature/camera-animation
echo "const animateCamera = (/* Logic for camera animation */);" >> client/src/Map.js
git add .
git commit -m "Implement camera animation for transitioning between points in deck.gl"

# Step 23: Integrate three.js for 3D Avatars
git checkout -b feature/3d-avatars
npm install three
echo "import * as THREE from 'three';" >> client/src/Avatars.js
echo "const Avatars = () => <div>Avatars Component</div>;" >> client/src/Avatars.js
git add .
git commit -m "Integrate three.js for 3D avatars and visualization"

# Step 24: Develop Ground-Level POV
git checkout -b feature/ground-pov
echo "const groundLevelPOV = (/* Logic for bird's-eye camera view */);" >> client/src/Map.js
git add .
git commit -m "Develop ground-level point-of-view functionality for 3D avatars in deck.gl"

# Step 25: Implement Avatars and Achievements
git checkout -b feature/avatars-achievements
echo "const Achievements = () => <div>Achievements Component</div>;" > client/src/Achievements.js
git add .
git commit -m "Implement avatars and achievement tracking in React"

# Step 26: Add User Interface for Map Information
git checkout -b feature/map-information
echo "const MapInfo = () => <div>Map Information Component</div>;" > client/src/MapInfo.js
git add .
git commit -m "Implement user interface for displaying map information in React"

# Step 27: Implement Item Collection System
git checkout -b feature/item-collection
echo "const collectedItems = [];" > client/src/CollectedItems.js
echo "const CollectedItems = () => <div>Collected Items Component</div>;" >> client/src/CollectedItems.js
git add .
git commit -m "Implement item collection system for users in React"

# Step 28: Develop API Endpoint for Item Collection
git checkout -b feature/item-endpoint
echo "router.get('/items', (req, res) => { /* Fetch collected items */ });" >> server/routes/item.js
git add .
git commit -m "Develop API endpoint for managing collected items in Express"

# Step 29: Enhance Navigation Interface
git checkout -b feature/enhance-navigation
echo "const enhanceNavigation = (/* Logic for enhancing
```
