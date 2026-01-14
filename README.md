# simbrief-api

A TypeScript HTTP API wrapper library for the SimBrief API. This library provides a type-safe, class-based interface for querying SimBrief flight planning data, including airframes and user flight plans with additional functionality coming soon.

## Features

- Type-safe API calls with generic response types
- Environment variable support via dotenv
- Configurable base URL, timeout, and headers
- SimBrief-specific endpoints for airframes and flight plans
- Extensible error handling with custom ApiError class
- Clean class-based API
- Full TypeScript support with exported types

## Installation

```bash
npm install simbrief-api
```

## Dependencies

- `axios` - HTTP client library
- `dotenv` - Environment variable management

## Usage

### Basic Usage

```typescript
import SimBriefApi from 'simbrief-api';

// Create a client instance
const api = new SimBriefApi();

// Fetch airframes data
const airframesResponse = await api.getAirframes();
console.log(airframesResponse.data); // Type-safe airframes data

// Fetch user flight plan
const flightPlanResponse = await api.getUserFlightPlan('username123');
console.log(flightPlanResponse.data); // Type-safe flight plan data
```

### Using Environment Variables

Create a `.env` file in your project root:

```env
API_BASE_URL=https://www.simbrief.com/api
API_TIMEOUT=5000
```

The client will automatically load these values:

```typescript
import SimBriefApi from 'simbrief-api';

// Configuration from .env will be used automatically
const api = new SimBriefApi();
```

### Advanced Configuration

```typescript
import SimBriefApi from 'simbrief-api';

const api = new SimBriefApi({
  baseURL: 'https://www.simbrief.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
});
```

### Available Methods

- `getAirframes()` - Fetch all available airframes from SimBrief
- `getUserFlightPlan(username: string)` - Fetch a user's flight plan by username

### Error Handling

The library throws `ApiError` instances for API failures:

```typescript
import SimBriefApi, { ApiError } from 'simbrief-api';

const api = new SimBriefApi();

try {
  const response = await api.getUserFlightPlan('username123');
} catch (error) {
  if (error instanceof ApiError) {
    console.error('Status:', error.status);
    console.error('Message:', error.message);
    console.error('Data:', error.data);
    console.error('Headers:', error.headers);
  }
}
```

## Type Definitions

### SimBriefApiConfig

Configuration interface for the API client:

```typescript
type SimBriefApiConfig = {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}
```

### RequestOptions

Request-specific options (used internally):

```typescript
type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Record<string, any>;
  data?: any;
  headers?: Record<string, string>;
  timeout?: number;
}
```

### ApiResponse

Generic response wrapper:

```typescript
type ApiResponse<T> = {
  data: T;
  status: number;
  headers: Record<string, string>;
  originalResponse?: AxiosResponse<T>;
}
```

### ApiError

Error class for API failures:

```typescript
class ApiError extends Error {
  status?: number;
  data?: any;
  headers?: Record<string, string>;
  originalError?: any;
}
```

### Airframes

Type definition for airframes data returned by `getAirframes()`:

```typescript
type Airframes = {
  [aircraftCode: string]: AirframeAircraft;
  // Example: A320, B738, etc.
}
```

### UserFlightPlan

Type definition for flight plan data returned by `getUserFlightPlan()`:

```typescript
type UserFlightPlan = {
  fetch: Fetch;
  params: Params;
  general: General;
  origin: Origin;
  destination: Destination;
  // ... and many more fields
}
```

## Configuration Utilities

The library exports configuration utilities:

```typescript
import { getConfigFromEnv, mergeConfig } from 'simbrief-api';

// Get configuration from environment variables
const envConfig = getConfigFromEnv();

// Merge configuration with defaults
const config = mergeConfig({
  baseURL: 'https://www.simbrief.com/api',
});
```

## Examples

### Fetching Airframes

```typescript
import SimBriefApi from 'simbrief-api';

const api = new SimBriefApi({
  baseURL: 'https://www.simbrief.com/api',
});

const response = await api.getAirframes();

// Access specific aircraft data
const a320 = response.data.A320;
const b738 = response.data.B738;

console.log(`A320: ${a320.aircraft_name}`);
console.log(`B738: ${b738.aircraft_name}`);
```

### Fetching User Flight Plan

```typescript
import SimBriefApi from 'simbrief-api';

const api = new SimBriefApi({
  baseURL: 'https://www.simbrief.com/api',
});

const response = await api.getUserFlightPlan('myusername');

const flightPlan = response.data;

console.log(`Origin: ${flightPlan.origin?.icao_code}`);
console.log(`Destination: ${flightPlan.destination?.icao_code}`);
console.log(`Aircraft: ${flightPlan.general?.aircraft}`);
console.log(`Flight Number: ${flightPlan.general?.flight_number}`);
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Development mode
npm run dev
```

## Testing

The library includes comprehensive unit tests using Mocha and Chai. Tests are located in `src/**/*.spec.ts` files.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Debug tests
npm run test:debug
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow includes:

### Automated Testing

- **Test Workflow** (`.github/workflows/test.yml`):
  - Runs on every push and pull request
  - Tests on Node.js versions 18.x and 20.x
  - Installs dependencies, runs tests, and verifies build
  - Ensures code quality before merging

### Automated Publishing

- **Publish Workflow** (`.github/workflows/publish.yml`):
  - Triggers when a version tag is pushed (e.g., `v1.0.0`, `v2.1.3`)
  - Runs tests and builds the project
  - Automatically publishes to npm
  - Creates a GitHub release

### Setting up NPM Publishing

To enable automatic publishing to npm, you need to:

1. **Create an NPM access token**:
   - Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Click "Generate New Token"
   - Select "Automation" token type
   - Copy the token (you won't see it again)

2. **Add the token to GitHub Secrets**:
   - Go to your repository on GitHub
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your NPM access token
   - Click "Add secret"

### Creating a Release

To publish a new version to npm:

1. **Update the version in `package.json`** (or it will be updated automatically from the tag)

2. **Create and push a version tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

   Or create an annotated tag:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

3. **The workflow will automatically**:
   - Run all tests
   - Build the project
   - Extract version from the tag
   - Update `package.json` version (if needed)
   - Publish to npm
   - Create a GitHub release

### Version Tag Format

Version tags must follow the semantic versioning format:
- `v1.0.0` (major.minor.patch)
- `v2.1.3`
- `v0.1.0`

The workflow will automatically extract the version number (removing the `v` prefix) and use it for publishing.

## License

MIT
