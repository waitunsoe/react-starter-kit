### RTK Quick Overview

-   1.  npm install from rtk
-   2.  make a folder in src
            -   feature
            -   service --> inside this file, every slice we want to create
                -   export action in reducer & export default reducer
                -   in store.js, fill slice's name and slice,
-   3.  add store.js file in feature
-   4.  wrap with provider and pass store pros to App in main.js file

-   just to show data -> useSlector
-   to change data    -> useDispatch