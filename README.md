# React Native Authentication App

A modern React Native authentication app with clean UI and automated CI/CD pipeline.

## Features

- Clean, modern UI for authentication
- Email and password validation
- Secure authentication flow
- Automated builds with GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native development environment setup
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the Metro bundler:
```bash
npm start
```

4. Run on iOS:
```bash
npm run ios
```

5. Run on Android:
```bash
npm run android
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

- Automated testing on push and pull requests
- Android build generation on main branch
- iOS build generation on main branch

### Pipeline Structure

- `test` job: Runs linting and tests
- `build-android` job: Generates Android APK
- `build-ios` job: Generates iOS build

### Extending the Pipeline

To add new steps to the pipeline:

1. Edit `.github/workflows/ci.yml`
2. Add new jobs or steps as needed
3. Commit and push changes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.