import React from "react";
import { Route,Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./pages/Main";
import AddEditPage from "./pages/AddEdit";

function Photo(props){
    // const resolved = useResolvedPath();
    // const match = useMatch("/photos");
    // if (!match) {
    //     return null; // or handle case when match is not found
    // }
    // const { path } = match;
    // console.log(AddEditPage());
    return (
       <div>
        <Routes>
           
             <Route path='/' element = {<MainPage/>}/>
             <Route path="add" element = {<AddEditPage />} />
             <Route path="/:photoId" element = {<AddEditPage />} />
             <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
          
    )
}
export default Photo;