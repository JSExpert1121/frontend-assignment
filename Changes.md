## Works done
1. Backend

    mockup was updated. Paging, filtering, and sorting were added to the fetch-tokens endpoint

2. Frontend

    The entire project was built from scratch without using any component or css library like MUI.

    <br>
    Has been done:

    - Created the folder structure of the project.
    - Created the layout component for shared layout.
    - Created several base components for commonly used elements like input, button, and icon.
    - Wrote storybook component tests for future use and testing.
    - Integrated backend APIs using react-query.
    - Implemented infinite scrolling for tokens page.

    <br>
    What can be done to improve:

    - To add routing to the page: When we refresh the page, the old filter values and sort values should be restored.
    - To write integration tests to avoid unexpected changes.
    - To consider the use of component or css library such as MUI or TailwindCSS: Using them can speed up development and ensure cross-browser compatibility.

    <br>
    General steps for me to add new features are as follows.

    - Design components based on Atomic design principle
    - Update the existing components needed for the new feature, or create a new component if not exists.
    - If updated or new component is a base component commonly used across the whole project, write component tests/docs using storybook.
    - Combine the components into a new feature and add logic or user interactions to them.
    - Test and fix bugs if any.
    - Write integration tests for important features
    
    <br>
    In general, I don't add comments to the simple and clear codes. I write comments only when the code is very important and hard to understand. I always try to write simple and readable code by splitting complex UIs and logics into simple and reusable units. This results in the dramatic reduction in the amount of comments.

    I used 2 more packages: `clsx` and `react-helmet`. `clsx` is being widely used for components development. `react-helmet` was used for customizing head components like document title.
