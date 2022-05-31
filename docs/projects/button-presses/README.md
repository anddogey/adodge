# Button Presses Project

## Repository & Organization

1. Create a repository on GitHub as "button-presses-app".
2. Clone the repository to its own directory using GitKraken.
3. Create a repository on GitHub as "button-presses-api".
4. Continue on to **Front End (React Native)**.

## Front End (React Native)

### Setup

1. Open a terminal at the directory titled "button-presses-app".
2. `npx react-native init ButtonPresses --template react-native-template-typescript`
3. `yarn add axios`
4. Move the contents of the new `ButtonPresses` directory into the root `button-presses-app` directory.
5. Delete the `ButtonPresses` directory.
6. Copy over the `.eslintrc.js`, `.eslintignore`, `.prettierrc.js`, and `.prettierignore` files from DJ's boilerplate.
7. Open `./ios/ButtonPresses.xcworkspace` with XCode.
8. Rename the bundle identifier as `org.adodge.button-presses`.
9. Ensure a team is selected under Signing & Capabilities within XCode.
10. Ensure that your phone is selected at the top of the window.
11. Ensure the app deploys to your phone properly before continuing to **Development**.

### Development

1. Create a `src` folder.

2. Move `App.tsx` into the `src` folder.

3. Change the `App` component from a default export to a named export — then adjust `index.js`.

4. Create a custom `Button` component that uses react-native's `Pressable` base component.

5. Use the custom `Button` component and react-native's `Text` base component on the `App` "home screen" to render content similar to this:
    ```
    Number of presses: ???
    
    [ Press Me! ]
    ```

6. Use react-native's `StyleSheet` to construct styles for any `View`, `Button`, or `Text` components.

7. Use `useState` to expose a getter-and-setter for a property (such as number of presses).

8. Use `useCallback` to create a callback function that is only updated when dependencies are updated.

9. Use `useEffect` to run "effectful" code either (1) only when dependencies are updated or (2) only once on the initial render.

### Running

1. Click the Play button in XCode while your phone is selected to **rebuild** the app. If the app has already been built and no native pods have changed, then just open metro, kill the app, and open the app again.
2. When necessary, refresh the app by clicking "R" within the metro terminal.

## Back End (Node.js)

### Setup

1. Open a terminal at the directory titled "button-presses-api".

2. Run the following commands:

    ```
    yarn init
    # After filling out the terminal form...
    yarn add express typescript ts-node
    yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/node
    ```

3. Copy over the `.eslintrc.js`, `.eslintignore`, `.prettierrc.js`, `.prettierignore`, and `tsconfig.json` files from DJ's boilerplate.

4. Add a "start" script to `scripts` within `package.json` that runs `ts-node src/index.ts`.

### Development

1. Create a `src` directory with a `index.ts` file.
2. Create 3 directories under a `services` directory: `api`, `core`, and `repositories`.
3. Create a "APIHub" that is responsible for initializing express and references a "ButtonsService" (seen in the next step).
4. Create a "ButtonsService" that is responsible for defining the routes for all button-related API activity and references a "ButtonsRepository" (seen in the next step).
5. Create a "ButtonsRepository", extending a "FileRepository" class (mentioned in the next step), that is responsible for all data-related operations with our buttons data.
6. Create a "FileRepository", inheriting from a "IRepository" interface, that is responsible for data-related operations with file-stored data.
7. Create a "IRepository" interface that declares the functions all repositories must define *at the minimum*,
8. Ensure `express` is used to host a web server and receive requests at defined routes.
9. Ensure all types are defined as close to their use-cases as possible.
10. Ensure `path` and `fs` are used for the "FileRepository".

### Running

1. Run `yarn start`.

## General Notes

* `useEffect` has three use-cases and one of them is **wrong**.
    * **Correct:** `useEffect(() => {}, [])` - this will run the inner arrow function once upon initial render.
    * **Correct:** `useEffect(() => {}, [someVariableUsedInTheInnerFunction])` - this will run the inner arrow function every time `someVariableUsedInTheInnerFunction` is updated.
    * **Incorrect:** `useEffect(() => {})` - this will run the inner arrow fucntion every render, which defeats the purpose of useEffect.
* Ensure that axios usage in the mobile app uses the laptop's wi-fi LAN IP address and not `localhost`.
* Middleware in Express is integrated using `app.use` — you will specifically need `app.use(express.json())` in order to accept JSON body requests.
* Remember to use React Native, Express, and StackOverflow documentation if you get lost.