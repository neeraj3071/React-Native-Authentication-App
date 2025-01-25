# AuthenticationApp

**AuthenticationApp** is a React Native application designed for user authentication. This README provides essential information for setting up, running, and contributing to the project.

## Quick Start

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/AuthenticationApp.git
    cd AuthenticationApp
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    - Android:

        ```bash
        npx react-native run-android
        ```

    - iOS:

        ```bash
        npx react-native run-ios
        ```

## Prerequisites

- **Node.js** (LTS version)
- **npm** or **Yarn**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **React Native CLI**


## Features

- User authentication (login/signup)
- Secure token storage
- Profile management

## Development

### Android Setup

1. Configure `android/local.properties`:

    ```
    sdk.dir=/path/to/your/android/sdk
    ```

2. Install Android dependencies:

    ```bash
    cd android && ./gradlew clean
    ```

### iOS Setup (macOS only)

1. Install CocoaPods:

    ```bash
    sudo gem install cocoapods
    ```

2. Install iOS dependencies:

    ```bash
    cd ios && pod install
    ```

## Testing

Run tests with:

```bash
npm test

## CI/CD
CI: GitHub Actions
CD: Fastlane (Android)
For detailed CI/CD setup, refer to .github/workflows/ci.yml and android/fastlane/Fastfile.


