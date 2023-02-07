import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{




    --color-primary:  rgb(90, 250, 250);
    --color-primary-focus:rgb(90, 200, 200);
    --color-primary-negative:  rgb(50, 90, 90);



    --grey-0:#f8f9fa;
    --grey-1:#868e96;
    --grey-2:#343b41;
    --grey-3:#212529;
    --grey-4: #121214;


    --sucess: #3fe864;
    --negative: #e83f5b;

}


body {
    background-color: var(--grey-4);
    }

    h1,h2,h3{
        
        font-weight: bold;

    }

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    }

`;
