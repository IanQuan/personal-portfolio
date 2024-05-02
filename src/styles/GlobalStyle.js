import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
}
html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
}
img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
button{
    outline: none
}
.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
}
.social-icon {
    font-size: 2rem; /* Increase size */
    transform: rotate(90deg); /* Rotate icon */
    display: inline-block; /* Ensure transformations work */
}

/* Styling scrollbar for Webkit browsers */
::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
    background-color: var(--deep-dark); /* color of the tracking part */
}

::-webkit-scrollbar-thumb {
    background-color: var(--gray-1); /* color of the scroll thumb */
    border-radius: 4px; /* roundness of the scroll thumb */
    border: 2px solid var(--deep-dark); /* creates a border around the scroll thumb */
}

/* Styling scrollbar for Firefox */
* {
    scrollbar-width: thin; /* can be 'auto', 'thin', or 'none' */
    scrollbar-color: var(--gray-1) var(--deep-dark); /* thumb and track color */
}

/* Smooth Scroll */
[data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
        background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
        z-index: 101;
        background: var(--deep-dark);
        .scrollbar-thumb-y {
            background: var(--gray-1);
        }
    }
}
`;
export default GlobalStyles;
