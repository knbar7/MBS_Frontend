// import { createContext, useContext, useEffect, useState } from "react";
// import { getFromDb } from "./api/get-from-db"

// const DataContext = createContext({});

// export const DataProvider = ({ children }) => {
//     const [users, setUsers] = useState([]);
//     const [intentions, setIntentions] = useState([]);
//     const [threeToOnes, setThreeToOnes] = useState([]);
//     const [assignments, setAssignments] = useState([]);
//     const [studentCoach, setStudentCoach] = useState([]);
//     const [assignmentResponse, setAssignmentResponse] = useState([]);
  
//     useEffect(() => {
//         // Fetch user
//         getFromDb("user")
//           .then((data) => {
//               setUsers(data);
//             }
//           );
//       }, []);
  
//     useEffect(() => {
//       // Fetch intentions
//       getFromDb("intention")
//         .then((data) => setIntentions(data));
//     }, []);
  
//     useEffect(() => {
//       // Fetch three-to-one
//       getFromDb("three-to-one")
//         .then((data) => setThreeToOnes(data));
//     }, []);
  
//     return (
//       <DataContext.Provider value={{
//         users,
//         intentions,
//         threeToOnes,
//       }}>
//         {children}
//       </DataContext.Provider>
//     );
//   };
  
//   export const useData = () => {
//     const context = useContext(DataContext);
//     return {
//       users: context.users,
//       intentions
//     };
//   };