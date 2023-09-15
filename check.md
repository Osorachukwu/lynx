const Nav = () => {
  const [isOpen, setIsOpen] = useState({display: "none"});
    function toggle() {
        if (isOpen.display === "none") {
            setIsOpen({display: "block"})
        }else {
            setIsOpen({display: "none"})

        }
        
    }


1. To use react rounter first in the terminal install it using the command - npm i react-router-dom
2. Import browser router inside the main.jsx and use it's tag to wrap around the app.jsx tag
3. Then go to the app.jsx and import { Route, Routes } from "react-router-dom"; go ahead to use the Route to create the <Routes> tag to wrap around <Route>tags in order to point to where you are supposed to link to. 
4. Inside the Nav  first import { Link } from 'react-router-dom'; go ahead to use the <Link> tag make the hambourger links.


Using splide 
$ npm install @splidejs/react-splide