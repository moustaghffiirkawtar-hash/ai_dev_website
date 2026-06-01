// import React from "react";

// let members = [
//   {
//     name: "Fatima Zahrae Er-raqi",
//     role: "President",
//     pic: "img/presidente.jpg",
//   },
//   {
//     name: "Younes El Kadmiri",
//     role: "Vice President",
//     pic: "img/vicepresident.jpg",
//   },
//   {
//     name: "Mohamed BEN DIFI",
//     role: "Head of the Design Unit",
//     pic: "img/mohammed.jpg",
//   },
//   { name: "Taoufik AMZIL", role: "Speaker", pic: "img/toufik.jpg" },
//   { name: "Wiam boulif", role: "General Secretary", pic: "img/wiam.jpg" },
//   {
//     name: "Echabbi majda",
//     role: "Head of the Media Unit",
//     pic: "img/majda.jpg",
//   },
//   {
//     name: "HIba Benhammou",
//     role: "Head of the Media Unit",
//     pic: "img/hibaaa.png",
//   },
//   { name: "SARA RIZK", role: "Events Manager", pic: "img/sara.jpg" },
//   {
//     name: "Fatima Ez-zahraa HAJARI",
//     role: "Human Resources Manager",
//     pic: "img/rh.jpg",
//   },
//   { name: "Meryem Mouktader", role: "Treasurer", pic: "img/meriem.jpg" },
// ];

// function ListOfMembers() {
//   return (
//     // Container provides responsive padding and alignment
//     <div className="container py-4">
//       {/* Row creates the grid. g-4 adds gaps between cards */}
//       <div className="row g-4 justify-content-center">
//         {members.map((member) => (
//           // Responsive columns: 1 col on mobile, 2 on small, 3 on medium, 4 on large screens
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={member.name}>
//             {/* Card Component */}
//             <div className="card h-100 text-center shadow-sm border-0">
//               <div className="card-body d-flex flex-column justify-content-center align-items-center pt-4">
//                 {/* Image: rounded-circle makes it round. object-fit-cover ensures it doesn't stretch */}
//                 <img
//                   src={member.pic}
//                   className="rounded-circle mb-3"
//                   alt={member.name}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                   }}
//                 />

//                 {/* Name */}
//                 <h5
//                   className="card-title fw-bold mb-1"
//                   style={{ fontSize: "1rem" }}
//                 >
//                   {member.name}
//                 </h5>

//                 {/* Role */}
//                 <p className="card-text text-muted mb-0">{member.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ListOfMembers;
let members = [
  {
    name: "Fatima Zahrae Er-raqi",
    role: "President",
    pic: "img/presidente.jpg",
  },
  {
    name: "Younes El Kadmiri",
    role: "Vice President",
    pic: "img/vicepresident.jpg",
  },
  {
    name: "Mohamed BEN DIFI",
    role: "Head of the Design Unit",
    pic: "img/mohammed.jpg",
  },
  { name: "Taoufik AMZIL", role: "Speaker", pic: "img/toufik.jpg" },
  { name: "Wiam boulif", role: "General Secretary", pic: "img/wiam.jpg" },
  {
    name: "Echabbi majda",
    role: "Head of the Media Unit",
    pic: "img/majda.jpg",
  },
  {
    name: "HIba Benhammou",
    role: "Head of the Media Unit",
    pic: "img/hibaaa.png",
  },
  { name: "SARA RIZK", role: "Events Manager", pic: "img/sara.jpg" },
  {
    name: "Fatima Ez-zahraa HAJARI",
    role: "Human Resources Manager",
    pic: "img/rh.jpg",
  },
  { name: "Meryem Mouktader", role: "Treasurer", pic: "img/meriem.jpg" },
];

function ListOfMembers() {
  return (
    <>
      {members.map((member) => (
        <div
          className="member"
          key={member.name}
          style={{
            backgroundColor: "#91F9F4",
            width: "200px",
            textAlign: "center",
            margin: "10px",
            display: "block",
            borderRadius: "20%",
            padding: "14px",
          }}
        >
          <img
            src={member.pic}
            className="pic"
            alt={member.name}
            style={{
              height: "100px",
              width: "100px",
              margin: "5px",
              borderRadius: "70%",
              border: "3px solid #5595FF",
            }}
          />
          <h5 className="name" style={{ padding: "5px", color: "#2d5391" }}>
            {member.name}
          </h5>
          <p className="role" style={{ margin: "5px" }}>
            {member.role}
          </p>
        </div>
      ))}
    </>
  );
}

export default ListOfMembers;
